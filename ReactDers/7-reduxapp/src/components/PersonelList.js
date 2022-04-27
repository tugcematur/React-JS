import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectPersonel} from '../actions/'

class PersonelList extends Component {
    // const vlist = videos.map(video =>{
    //     return (
    //         <div  key = {video.id.videoId}   >
    //             <p>{video.snippet.title}</p>
    //             <img onClick={() => onVideoSelect(video)  } src = {video.snippet.thumbnails.medium.url}
    //             alt= "" style={{cursor: "pointer"}} />
    //         </div>
    //     ) 
    // } )

    render() {
        
        const plist = this.props.personels.map(personel => {
            
            return (
                <tr key={personel.id}  >
                    <th>{personel.id}</th>
                    <td>{personel.name}</td>
                    <td>{personel.salary}</td>
                    <td>  <button className="btn btn-dark"
                     onClick = {() => this.props.selectPersonel(personel)} >
                        Detail
                        </button> </td>
                </tr>
            )
        })
         
        return (
            <div className= "row">
                <div className="col-md-7">
                    <table className="table table-hover"  >
                        <thead>
                            <tr  >
                                <th >Id</th>
                                <th>Ad</th>
                                <th>Maas</th>
                            </tr>
                        </thead>
                        <tbody >
                            {plist}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state)
    return { personels: state.personels }
}
export default connect(mapStateToProps , {
    selectPersonel:selectPersonel
})(PersonelList)
// function name() {
//     return function( ) {
//        return 'Merhaba' 
//     }

// }
// connect()()