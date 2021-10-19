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

import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import AuthProvider from './context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
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
       <PrivateRoute exact path='/service'>
           <Services></Services>  
       </PrivateRoute>
       <PrivateRoute exact path='/appointment'>
            <Appointment></Appointment> 
       </PrivateRoute>
       <Route exact path='/login'>
            <LogIn></LogIn> 
       </Route>
       <Route exact path='/*'>
           <NotFound></NotFound>  
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
   </AuthProvider>
  </div>
    
  );
}

export default App;
