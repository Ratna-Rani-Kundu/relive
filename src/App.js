// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route exact path='/'>
             
       </Route>
       <Route  path='/home'>
             
       </Route>
       <Route exact path='/service'>
             
       </Route>
       <Route exact path='/psychologist'>
             
       </Route>
       <Route exact path='/*'>
             
       </Route>
     </Switch>
   </Router>
    
  );
}

export default App;
