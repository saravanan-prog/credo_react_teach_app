
export  const auth = () => {
    const tokenAvailable = localStorage.getItem('token') ? true : false
    return tokenAvailable
}