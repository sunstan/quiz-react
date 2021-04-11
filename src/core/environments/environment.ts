const dev = {
    hostApi: 'http://localhost:3000',
}

const prod = {
    hostApi: 'http://localhost:3000',
}

export const env = process.env.NODE_ENV === 'production'
    ? prod
    : dev;