import CustomerDetails from "./components/CustomerDetails";
import productData from '../../core/json/product.json'
import userData from '../../core/json/user.json'




export default function AdminPage(){




    return <div>
        
        <h1 >Admin Page</h1>
            <div>
                <CustomerDetails />
            </div>   
    </div>
}