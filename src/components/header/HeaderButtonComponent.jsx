import { Link,useNavigate } from "react-router"

export default function HeaderButtonComponent(){

    const navigate = useNavigate()

    return(
        <>
            <div class="m-3 nav-nav d-flex justify-content-around">
                <button 
                    class="btn btn-primary btn-rounded" 
                    onClick={ ()=>navigate("/home") }
                > 
                    Home 
                </button>
                <button 
                    class="btn btn-primary btn-rounded" 
                    onClick={ ()=>navigate("/about") }
                > 
                  About 
                </button>
                <button 
                    class="btn btn-primary btn-rounded" 
                    onClick={ ()=>navigate("/contact") }
                > 
                    Contact 
                </button>
                <button 
                    class="btn btn-primary btn-rounded" 
                    onClick={ ()=>navigate("/products") }
                >
                    Product 
                </button>
            </div>
          
        </>
    )
}