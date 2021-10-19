import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <img src='https://www.mait.com/assets/admin/img/pages/404.gif' alt="" />
         <br />
          <Link to='/home'><Button>Go to Home</Button></Link>
        </div>
    );
};

export default NotFound;