import {GET_USERS, USERS_ERROR,DELETE_POST} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://5fb4b432e473ab0016a16c66.mockapi.io/post`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
export const deletePost = (id) => async (dispatch) => {
    const idd = id;
    await axios.delete(`https://5fb4b432e473ab0016a16c66.mockapi.io/post/${idd}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  };

