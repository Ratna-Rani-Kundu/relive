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
function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route exact path='/'>
          <Home></Home>   
       </Route>
       <Route  path='/home'>
       <Home></Home>
       </Route>
       <Route exact path='/service'>
             
       </Route>
       <Route exact path='/psychologist'>
             
       </Route>
       <Route exact path='/login'>
            <LogIn></LogIn> 
       </Route>
       <Route exact path='/*'>
             
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
    
  );
}

export default App;
