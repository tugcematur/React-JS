import React from 'react'

const ConfirmComponent = (props)=> {
    return (

        <div className="border border-danger rounded ">
            <p>
                {props.children }
            </p>
             <input type="submit" className="btn btn-success" value= "Ok" /> 
             <input type="submit" className="btn btn-danger" value= "İptal" /> 
             <hr></hr>
        </div>
    )
}
export default ConfirmComponent;
