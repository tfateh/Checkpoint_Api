import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCES } from '../ActionsType';

const initialState =  {
    loading: false,
    users: null,
    errors: null,
};

 const userReducers = (state = initialState,{type, payload}) => {
  switch (type) {
    case GET_USERS:
      
      return{
        ...state,
        loading: true,
      };
      case GET_USERS_SUCCES:
      
      return{
        ...state,
        loading: false,
        users: payload,
      };
      case GET_USERS_FAILED:
      
      return{
        ...state,
        loading: false,
        errors: payload,
      };

  
    default:
      return state;
  }
}

export default userReducers;


