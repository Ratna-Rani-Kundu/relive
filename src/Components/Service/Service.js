import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';

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
       <Button variant="primary">Get Appointment</Button>
    </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default Service;