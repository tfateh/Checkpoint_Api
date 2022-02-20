import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import UserCard from './UserCard';

const UserList = () => {
    const users= useSelector((state)=> state.userReducers.users);
    const loading= useSelector((state)=> state.userReducers.loading);
  return loading? (
      <>
      <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button></>
  ): (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:15}}>
        
        {users && users.map((user)=><UserCard user={user} key={user.id}/>) } </div>
  )
}

export default UserList;