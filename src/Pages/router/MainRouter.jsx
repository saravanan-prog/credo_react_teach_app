import { lazy,Suspense } from 'react'

import { BrowserRouter,Routes,Route } from "react-router"


const CounterPage       = lazy(()=>import("../a_counter-page-memo/CounterPage"))
const Parentcomponent   = lazy(()=>import("../b_use-callback/Parentcomponent"))


export default function MainRouter(){



    return <div>
        <BrowserRouter>
            <Suspense fallback={<h1>Loading....</h1>}>
                <Routes>
                    <Route index element={<CounterPage /> } />
                    <Route path="counter" element={<CounterPage /> } />
                    <Route path="callbackpage" element={<Parentcomponent /> } />
              </Routes>
            </Suspense>
        </BrowserRouter>
    </div>
}