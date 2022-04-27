import _ from "lodash" // npm install --save lodash 

import React, { Component } from 'react'
import { connect} from 'react-redux'
import {getUser} from '../actions'

class UserHead extends Component {
  componentDidMount() {
    this.props.getUser(this.props.userId)
    console.log(this.props.userId)
  }
    render() {
      const {user} = this.props
     // const user = this.props.users.find(user =>  user.id === this.props.userId)
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
const mapStateToProps = (state,ownProps) => {
  return {user: state.users.find(user =>  user.id === ownProps.userId)}
}
export default  connect (mapStateToProps, {getUser})(UserHead)
