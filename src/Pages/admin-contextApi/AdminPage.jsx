import CustomerDetails from "./components/CustomerDetails";
import productData from '../../core/json/product.json'
import userData from '../../core/json/user.json'

import { AdminContext } from "../../core/context/gernalContext";



export default function AdminPage(){




    return <div>
        
        <h1 >Admin Page</h1>

        <AdminContext.Provider value = { {"products":productData,"users" :userData } } >
            <div>
                <CustomerDetails />
            </div>
        </AdminContext.Provider>

        

        
         
    </div>
}