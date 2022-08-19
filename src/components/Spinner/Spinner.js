import React from "react";
import ImageLoading from '../../assets/images/spinner.gif';
function Spinner(){
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <img className="spinner-sm" src={ImageLoading} alt="" />
        </div>
    )
}

export default Spinner;