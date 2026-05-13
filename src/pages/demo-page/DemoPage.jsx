import { useEffect } from "react"
import useFetch from "../../core/custom-hook/useFetch"
import useRandom from "../../core/custom-hook/useRandam"
import useLang from "../../core/custom-hook/useLang"

export default function DemoPage(){

    const otp = useRandom()
    const {loading,data,error} = useFetch("https://fakestoreapi.com/users")
    const content = useLang('en')


    useEffect(()=>{
       
        console.log("content===>",content)
    },[content])

     // Loading state
    if (loading) {
        return <h1>Loading...</h1>;
    }

    // Error state
    if (error) {
        return <h1>{error}</h1>;
    }

    //Success state
    return (
        <div>

        

            <h1>User List</h1>

            { data.map((user) => (
                <div key={user.id}>
                    8<h3>{user.name.firstname}</h3>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    );
}