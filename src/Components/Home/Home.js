import React from 'react';
import "./Home.css"
import{Button, Form, Row} from 'react-bootstrap'
import useService from '../../hooks/useService';
import Service from '../Service/Service';
import { useHistory } from "react-router-dom";
const Home = () => {
  const [services]=useService()
  let history = useHistory();
  const handleHomeAppointment=()=>{
    
    history.push("/service");
  }
    return (
        <div>
          <div className='banner p-5'>
          <h1 className='text-center pt-5 text-success'>Search Professionals for You</h1><br/>
          <div className=' p-5 m-5 container text-center w-50 d-flex '>
         
                  <Form.Select aria-label="Default select example">
                     <option value="1">Psychologist</option>
                     <option value="2">Gynaecology</option>
                     <option value="3">Head Neck Surgeon</option>
                   </Form.Select>
                 <Button onClick={handleHomeAppointment}className='' bg='primary'>Need Appointment?</Button>
          </div>
          
        </div>
        <hr />
          <h1  className='text-success text-center mb-3'>Our Mental Health Professionals</h1>
          
                
                <Row xs={1} sm={2} md={3} lg={4}className="g-4">
            {
                services.map(service=><Service

                key={service.id}
                service={service}></Service>)
            }
            </Row>
        </div>
    );
};

export default Home;