import {combineReducers} from 'redux'
import blogsReducer from '../reducers/blogsReducer'

export default combineReducers({
      blogs: blogsReducer
}) 