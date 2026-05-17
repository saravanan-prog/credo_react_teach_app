export default function isAuth()  {
    return  localStorage.getItem('token') ? true : false 
}