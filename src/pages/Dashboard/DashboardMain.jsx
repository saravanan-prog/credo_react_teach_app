import { useState } from "react";
import customersData from '../../assets/json/customer.json'
import productData from '../../assets/json/product.json'
// import the create context 
import { DashbordContextStore } from "../../context/globalStore";
import CustomerList from './components/CustomerList';



export default function DashboardMain(){

    const [customers,setDashboardData] = useState(customersData)
    const [products,setProducts] = useState(productData)
    
    return(
        <>
            <div>
                <h3> Dashboard </h3>
            </div>

            <div>
                <DashbordContextStore.Provider value ={
                    {
                        customers:  customers,
                        products  : products
                    }
                }>
                    <CustomerList />
                </DashbordContextStore.Provider>
                
            </div>
        </>
    )
}