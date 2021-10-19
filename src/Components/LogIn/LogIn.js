import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword ,createUserWithEmailAndPassword  } from "firebase/auth";
import { Form ,Button} from 'react-bootstrap';

const icon=<FontAwesomeIcon icon={faGoogle} />
initializeAuthentication()
const googoleProvider=new GoogleAuthProvider();

const LogIn = () => {
  const{signInUsingGoogle}=useFirebase()
    //email password state change
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [isLogIn,setIsLogIn]=useState(false)
    const auth = getAuth();

//Registration handle
const handleRegistration=(event)=>{
    event.preventDefault()
console.log(email,password)

//give an error ,if user give less than 6 character as a password
if(password.length <6){
    setError('Password must be at least 6 characters long')
    return;
}
if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
setError('Need at least one number ,one upper case and one special character')
}
//  isLogIn? processLogin(email,password) : registerNewUser(email,password)
createUserWithEmailAndPassword(auth,email,password)
.then(result=>{
    // The signed-in user info.
 const user = result.user;  
 console.log(user)
 setError('')
 })
.catch(error=>{
    setError(error.massage);
})
}

// const registerNewUser=(email,password)=>{
//   createUserWithEmailAndPassword(auth,email,password)
// .then(result=>{
//     // The signed-in user info.
//  const user = result.user;  
//  console.log(user)
//  setError('')
//  })
// .catch(error=>{
//     setError(error.massage);
// })
// }
// const processLogin(email,password)=>{
//   signInWithEmailAndPassword(auth,email,password)
//   .then(result=>{
//     const user=result.user;
//     console.log(user)
//     setError('')
//   })
//   .catch(error=>{
//     setError(error.massage)
//   })
//   }

//Email change handle
const handleEmailChange=(event)=>{
setEmail(event.target.value);
}

//Password change handle
const handlePasswordChange=(event)=>{
setPassword(event.target.value);
}

// check box handle
const toogleLogIn=(event)=>{
setIsLogIn(event.target.checked)
}
    return (
        <div  className='container mx-5 '>
             <h3 className='text-primary mt-3'>Please {isLogIn?'Log In':'Register'}</h3>    
                  <Form onSubmit={handleRegistration}>
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange}  type="password" placeholder="Password" required />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={toogleLogIn} type="checkbox" label="ALready Registered?" />
  </Form.Group>
  <div className='text-danger'>{error} </div>
  <Button variant="primary" type="submit">
    {isLogIn?'Log In':'Register'}
  </Button>
  
</Form>
            <div>----------------------</div>
    <Button onClick={signInUsingGoogle} className='bg-primary'>{icon}  Google Sign In</Button>
       
    
        
        
        
        </div>
    );
};

export default LogIn;