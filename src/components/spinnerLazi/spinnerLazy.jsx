import React from 'react'
import { MoonLoader,SyncLoader } from "react-spinners";

import "./spinnerLazy.css"
function SpinnerLazy() {
  return (
    <div className='container-spinner-lazy-p'>
        <SyncLoader className="spinner-lazy" color={"#005197"} loading={true} size={10}/>
        <p>E.S.E.G</p>
    </div>
  )
}

export default SpinnerLazy