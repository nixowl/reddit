import { v4 as uuid } from 'uuid'
const clientId = import.meta.env.VITE_REDDIT_CLIENT_ID
const redirect_uri = 'http://127.0.0.1:5173/authorize_callback'
const scope = 'identity,read,save,submit,vote'

export const authorizeUser = async () => {
    const redirectToken = uuid()
    const authorizationUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${redirectToken}&redirect_uri=${redirect_uri}&duration=permanent&scope=${scope}`

    localStorage.setItem('state', redirectToken)

    return authorizationUrl
}
