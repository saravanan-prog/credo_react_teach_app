import { memo,useMemo } from "react"

export default memo(function IntroComponent(){
    
    const calculation =  calc()

    return (
        <div>
            <h3> Welcome to Counter App</h3>
            <p>This calculator helps students how perform the logic implemntation.</p>
        </div>
    )

})

const calc = () => {
    for(let i=0; i< 1000000000; i++){}
}