import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogs } from '../actions'

class BlogList extends Component {
    componentDidMount() {
        this.props.getBlogs();
    }
    render() {
        console.log(this.props.blogs)
        // const images = props.images.map(({ id, description, urls }) => {
        //     return (
        //             <tr key={id}>
        //                 <td >{id}</td>
        //                 <td>{description}</td>
        //                 <td><img src={urls.regular} width="150px"></img></td>
        //             </tr>
        //     )
        // })
 
        const list = this.props.blogs.map(({id,title,body}) => {
            return (
                <tr  key = {id}>
                    <td  >{title}</td>
                    <td>{body}</td>
                </tr>
            )
        })
        return (
            <div>
                BlogList
                <div className="row ">
                    <div className="col-md-7"> 
                        <table className="table table-bordered"  >
                            <thead>
                                <tr >
                                    <th>Başlık</th>
                                    <th>Detay</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { blogs: state.blogs }
}
export default connect(mapStateToProps, { getBlogs: getBlogs })(BlogList)