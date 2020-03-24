import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './hooks';

import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

function App() {
  
  return (
    <Router >
    <div>
            <Redirect to="/Hooks" />    
            <Route path={"/Hooks"} component={Hooks} /> 
    </div>
</Router>
  );
}

export default App;
