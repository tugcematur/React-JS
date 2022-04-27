import React from 'react'
import { connect } from 'react-redux'
 const  PersonelDetail = (props)  => {
    console.log(props)
    return (
        <div>
            PersonelDetail
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {personel : state.selectedPersonel}
        
}
export default connect(mapStateToProps)(PersonelDetail)
