import { BrowserRouter,Routes,Route } from "react-router";
import CounterPage from "../pages/counter/CounterPage";
import LoanPage from "../pages/loan-calc/LoanPage";
import ReviewsPage from "../pages/reviews/ReviewsPage";

export default function MainRoute(){

    return <div>
        <BrowserRouter>
            <Routes>
                <Route index element ={ <CounterPage />} />
                <Route path = "counter" element ={ <CounterPage />} />
                <Route path = "loan" element ={ <LoanPage />} />
                <Route path = "review" element ={ <ReviewsPage />} />



            </Routes>
        
        </BrowserRouter>
    </div>
}