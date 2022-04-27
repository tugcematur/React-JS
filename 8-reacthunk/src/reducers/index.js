import {combineReducers} from 'redux'
import blogsReducer from '../reducers/blogsReducer'
import userReducer from '../reducers/userReducer'

export default combineReducers({
      blogs: blogsReducer,
      users: userReducer
}) 