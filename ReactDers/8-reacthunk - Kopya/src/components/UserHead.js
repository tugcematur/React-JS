import React, { Component } from 'react'
import { connect} from 'react-redux'
import {getUser} from '../actions'

class UserHead extends Component {
    componentDidMount() {
    this.props.getUser(this.props.userId)
      //  this.props.getUser(this.props.userId);
    //    console.log(this.props) 
     //   console.log(this.props.userId)
    }
    render() {
       
      const { user } = this.props;
        if (!user) {
         return null   
        }
        return (
            <div>
                {user.name}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
   return { user: state.users.find(user => user.id === ownProps.userId) };
}
export default connect(mapStateToProps, {getUser})(UserHead)
