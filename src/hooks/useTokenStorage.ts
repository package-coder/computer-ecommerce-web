

const setToken = (token: string) => {
    localStorage.setItem('token', token)
}

const getToken = () => {
    return localStorage.getItem('token')
}

export {
    setToken,
    getToken
}