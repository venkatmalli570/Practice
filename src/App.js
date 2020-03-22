import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './hooks';

import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";

function App() {
  
  return (
    <Router >
    <div>
       
        
            <Route exact path={"/"} component={Hooks} />    
            <Route path={"/Hooks"} component={Hooks} />    
            
        
    </div>
</Router>
  );
}

export default App;
