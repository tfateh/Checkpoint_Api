import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useDispatch } from 'react-redux';
import UserList from './Api/UserList';
import { useEffect } from 'react';
import { getUsers } from './Reduce/Actions/userActions';
import Headers from './Headers';
const App=()=> {
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getUsers);
    
  }, )
  
  return (
    <di>
      <Headers/>;
      <UserList/>
    </di>
  );
}

export default App;
