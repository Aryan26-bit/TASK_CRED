
import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card(props) {
  return (
    <>
   <Card style={{ width: '16rem', height:'10rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='buisness_css'>{props.name}</Card.Title>
        <Card.Text>
          <p style={{textAlign:"center"}}>{props.email}</p>
          <p style={{textAlign:"center"}}>{props.phoneno}</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </>
  )
}

export default card;