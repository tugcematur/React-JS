import _ from "lodash" // npm install --save lodash  22222

import jsonPlaceHolder from '../apis/jsonPlaceHolder' 

export const getBlogs = ()  => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type:'GET_BLOGS' ,payload: response.data})
}
     
 // 111111
// export const getUser = (id)  => async dispatch => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({type:'GET_USER' ,payload: response.data})
// }

// 222222
export const getUser = (id)  =>  dispatch => {
 //    const response = await jsonPlaceHolder.get(`/users/${id}`);   2222
  //     dispatch({type:'GET_USER' ,payload: response.data})          2222
  _getUser(id,dispatch) // 222222
}


// 222222
export const _getUser =  _.memoize ( async (id ,dispatch) => {
    const response =  await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type:'GET_USER' ,payload: response.data})
})
       
       
 
