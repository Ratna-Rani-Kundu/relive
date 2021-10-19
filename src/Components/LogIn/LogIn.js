import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import Button from '@restart/ui/esm/Button';
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const icon=<FontAwesomeIcon icon={faGoogle} />
initializeAuthentication()
const googoleProvider=new GoogleAuthProvider();

const LogIn = () => {
    const auth = getAuth();
  const  handleGoogleSignIn=()=>{
    signInWithPopup(auth,googoleProvider)
    .then(result=>{
       // The signed-in user info.
    const user = result.user;  
    console.log(user)
    })
}
const handleRegistration=(e)=>{
console.log('registrations')
e.preventDefault()
}
    return (
        <div  className='container'>
         
                <form onSubmit={handleRegistration}>
                    <h3>Please Register</h3>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' />
                    <br /><br /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' />
                    <br /><br /><br />
                   <input type="submit" value='Register'/>
                </form>
            <div>----------------------</div>
           <br /><br /><br /> <Button onClick={handleGoogleSignIn} className='bg-primary'>{icon}  Google Sign In</Button>
        </div>
    );
};

export default LogIn;