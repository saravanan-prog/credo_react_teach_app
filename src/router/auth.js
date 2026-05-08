
export default function isAuth(){
     const tokenAvailable = localStorage.getItem("token") ? true : false;
     return tokenAvailable
}