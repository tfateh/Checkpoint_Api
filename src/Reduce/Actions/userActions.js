import axios from 'axios';
import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCES } from '../ActionsType';

export const getUsers =async (dispatch) => {
  dispatch ({type: GET_USERS});

  try {
      const res =await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({type: GET_USERS_SUCCES, payload: res.data});
      
  } catch (error) {
      dispatch({type: GET_USERS_FAILED, payload: error.response.data});

  }
};

