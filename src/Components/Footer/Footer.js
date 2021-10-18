import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='p-5 bg-success text-light text-center' >
           <div  className='p-5  d-flex'>
           <div className='text-light'>
               {/* <h1>Relive</h1>
               <h2>Get Us</h2> */}
               <p><i className='fa fa-map-marker'> 21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</i></p>
               <p><i className='fa fa-phone-square'>  10633, +8809666700100</i></p>
               <p><i className='fa fa-envelope'>     info.relive@gmail.com</i></p>
           </div>
           <div>
           <ul >
            <li className='text-success'>
              <Link className='text-light' to="/">Home</Link>
            </li>
            <li className='text-success'>
              <Link className='text-light' to="/about">About</Link>
            </li>
            <li className='text-success'>
              <Link className='text-light' to="/service">Services</Link>
            </li>
            </ul>
           </div>
           </div>
           <hr />
           <p>Copyright © 2021 Relive.com</p>
        </div>
    );
};

export default Footer;