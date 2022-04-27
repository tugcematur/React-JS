import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogs } from '../actions'
import UserHead from '../components/UserHead'

class BlogList extends Component {
    componentDidMount() {
        this.props.getBlogs();
    }
    render() {
        console.log(this.props.blogs)
      
        const list = this.props.blogs.map(({id,title,body,userId}) => {
            return (
                <tr  key = {id}>
                    <td  >{title}</td>
                    <td>{body}</td>
                    <td>{userId}</td>
                    <td> <UserHead userId = {userId}></UserHead> </td>
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