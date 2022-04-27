import React from 'react'


const ImageList = props => {
    const images = props.images.map(({ id, description, urls }) => {
        return (
                <tr key={id}>
                    <td >{id}</td>
                    <td>{description}</td>
                    <td><img src={urls.regular} width="150px"></img></td>
                </tr>
        )
    })
    return (
            <table className="table table-responsive-md">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Image</th>
                   
                </tr>
                </thead>
                <tbody>
                      {images}
                </tbody>
               
            </table>
       
    )
}
export default ImageList
