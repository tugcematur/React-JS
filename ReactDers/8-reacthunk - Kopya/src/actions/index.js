import jsonPlaceHolder from '../apis/jsonPlaceHolder' 

export const getBlogs = ()  => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type:'GET_BLOGS' ,payload: response.data})
}
     
   
 
