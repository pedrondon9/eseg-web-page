import React from 'react'
import { MoonLoader, SyncLoader } from "react-spinners";

import "./spinnerCargar.css"
function SpinnerCargar({color}) {
  return (
    <div className='container-spinner-cargar-p'>
        <SyncLoader className="spinner-cargar" color={color} loading={true} size={15}/>
    </div>
  )
}

export default SpinnerCargar