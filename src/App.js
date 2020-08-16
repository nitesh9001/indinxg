import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './component/Routing/Routes';
import Landing from './component/Dashboard/Landing';
// import FontAwesome from "react-fontawesome"
import 'font-awesome/css/font-awesome.css';

require('dotenv').config({path: __dirname + '/.env'})


function App() {
  return (
    <div className="App">
    <Router>
          <div className="App">  
            {/* <ReactNotification />         */}
            <Switch>
            <Route exact path="/indinxg" component={Landing} />
            <Route component={Routes} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
