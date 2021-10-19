// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LogIn from './Components/LogIn/LogIn';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
  <div>
     <AuthProvider>
     <Router>
     <Header/>
     <Switch>
       <Route exact path='/'>
          <Home></Home>   
       </Route>
       <Route  path='/home'>
       <Home></Home>
       </Route>
       <Route  path='/about'>
       <About></About>
       </Route>
       <Route exact path='/service'>
           <Services></Services>  
       </Route>
       <Route exact path='/appointment'>
            <Appointment></Appointment> 
       </Route>
       <Route exact path='/login'>
            <LogIn></LogIn> 
       </Route>
       <Route exact path='/contact'>
         <Contact></Contact>
         </Route>
       <Route exact path='/*'>
             
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
   </AuthProvider>
  </div>
    
  );
}

export default App;
