import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getRelativeTime(unixTimestamp: number) {
    const currentTime = new Date().getTime() / 1000
    const timeDifference = currentTime - unixTimestamp

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ]

    for (const interval of intervals) {
        const count = Math.floor(timeDifference / interval.seconds)
        if (count >= 1) {
            const plural = count === 1 ? '' : 's'
            return `${count} ${interval.label}${plural} ago`
        }
    }

    return 'Just now'
}
