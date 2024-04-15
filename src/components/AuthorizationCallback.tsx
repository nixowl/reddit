import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { setAuthorized } from '@/redux/authorizedSlice'

export const AuthorizationCallback = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const [cookies, setCookies] = useCookies(['accessToken', 'refreshToken'])

    useEffect(() => {
        const code = searchParams.get('code')
        const state = searchParams.get('state')

        if (state !== localStorage.getItem('state')) {
            navigate('/')
            return
        }

        if (code) {
            handleCodeExchange(code)
                .then(() => {
                    dispatch(setAuthorized(true))
                    navigate('/')
                })
                .catch((err) => {
                    console.error('Error exchanging code for tokens: ', err)
                })
        }
    }, [dispatch, navigate, searchParams])

    const handleCodeExchange = async (code: string) => {
        const url =
            'https://cors-anywhere.herokuapp.com/https://www.reddit.com/api/v1/access_token'
            
        try {
            const response = await axios.post(
                url, 
                {
                    code,
                    redirect_uri: 'http://127.0.0.1:5173/authorize_callback',
                    client_id: import.meta.env.VITE_REDDIT_CLIENT_ID,
                    client_secret: import.meta.env.VITE_REDDIT_SECRET,
                    grant_type: 'authorization_code',
                }
            )

            console.log(response.data)
            const accessToken = response.data.access_token
            const refreshToken = response.data.refresh_token

            setCookies('accessToken', accessToken, {
                path: '/',
                expires: new Date(Date.now() + 1000 * 60 * 60),
            })

            if (refreshToken) {
                setCookies('refreshToken', refreshToken, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                })
            }
        } catch (err) {
            throw err
        }
    }

    return <div>Authorizing...</div>
}
