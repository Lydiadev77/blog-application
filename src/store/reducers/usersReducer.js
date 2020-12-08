import {GET_USERS,DELETE_POST} from '../types'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState,  { type, payload }){

    switch(type){

        case GET_USERS:
        return {
            ...state,
            users:payload,
            loading:false

        };
        case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id != payload),
      };
        default: return state
    }

}