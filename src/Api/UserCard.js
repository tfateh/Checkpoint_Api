
import React from 'react'
import  {Card}  from 'react-bootstrap';

function UserCard({user:{name,email,address:{street,city,zipcode}}}) {
    
  return (
    <Card style={{ width:400,display:'flex',flexDirection:'row',border:'1px solid black',borderRadius:'10px' }}>
  <Card.Img style={{width:120}}variant="top" src="https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-photo-de-profil-d-affaires-de-l-avatar.jpg?ver=6" />
  <Card.Body>
    <Card.Title>Name:{name}</Card.Title>
    <Card.Text>
      E-Mail:{email}
    </Card.Text>
    <Card.Text>
      Adresse:{street}
      <br/>
               {city}
      <br/>
             {zipcode}
    </Card.Text>
  </Card.Body>
</Card>
  )
}
export default UserCard;