import Header from "../../resuable-components/header/Header"
import Footer from "../../resuable-components/footer/Footer"
import CustomerList from "../../resuable-components/customer-data/CustomerList"


export default function HomePage(){


    return <div>
        <Header/>

            <div>
                <p> I am Home Page </p>
                <CustomerList />
            </div>

        <Footer/>
    </div>
}