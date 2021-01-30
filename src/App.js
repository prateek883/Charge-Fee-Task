import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/signup/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Message from './components/message/Message';

function App() { 
  
  // This is user which will be set after anyone will login and the variable user will store the name 
  const [user,setUser]  = useState(null) // initially it will be null
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact>
          <Homepage user={user}  />
          </Route>
          <Route path="/login" exact>
          <Signup setUser={setUser} />
          </Route>
          <Route path="/message" exact>
          <Message />
          </Route>
        </Switch>
      </Router>
      
    
     
    </div>
  );
}

export default App;
