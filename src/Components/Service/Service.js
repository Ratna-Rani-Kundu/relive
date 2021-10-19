import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,expertise,designation}=service
    return (
        <>
            

    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {designation} <br />{expertise}
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
       <Link to='/appointment'><Button variant="primary">Get Appointment</Button></Link>
    </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default Service;