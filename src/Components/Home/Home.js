import React from 'react';
import "./Home.css"
import{Button, Form} from 'react-bootstrap'
const Home = () => {
    return (
        <div className='banner p-5'>
          <h1 className='text-center pt-5 text-success'>Search Professionals for You</h1><br/>
          <div className=' p-5 m-5 container text-center w-50 d-flex '>
         
                  <Form.Select aria-label="Default select example">
          <option value="1">Psychologist</option>
          <option value="2">Gynaecology</option>
          <option value="3">Head Neck Surgeon</option>
</Form.Select>
<Button onClick='/service' className='' bg='primary'>Need Appointment?</Button>
          </div>
          
        </div>
    );
};

export default Home;