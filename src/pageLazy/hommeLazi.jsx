import React , {Suspense , lazy} from "react"
import SpinnerLazy from "../components/spinnerLazi/spinnerLazy"
const VerHomme = lazy(()=> import("../pages/home/home"))

const HommeLazi =()=>{
    return(
    <div>
        <Suspense fallback = {<SpinnerLazy/>}>
                   <VerHomme/>
        </Suspense>
    </div>
    )
}


export default HommeLazi