import { BrowserRouter,Routes,Route} from "react-router"

import DashboardPage from "../Pages/dashboard/DashboardPage"

import PageNotFound from "../Pages/pagenotFound/PageNotFound"
import Header from "../core/resusble-components/Header"
import LoginForm from "../Pages/Login/LoginForm"
import ProtectionRoute from "./ProtectionRoute"


export default function RoutingOutlet(){

    

    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<LoginForm />} />
                <Route path ="login" element = {<LoginForm />} />

                <Route path="dashboard" element= { 
                    <ProtectionRoute>
                         <DashboardPage /> 
                    </ProtectionRoute>
                    }  
                />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
        </BrowserRouter>
    </div>
}