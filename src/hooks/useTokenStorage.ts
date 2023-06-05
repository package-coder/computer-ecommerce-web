

let token: string | null = null

const setToken = (_token: string) => {
    token = _token
}

const getToken = () => {
    return token
}

export {
    setToken,
    getToken
}