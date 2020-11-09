import React,{Suspense,lazy} from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Landing from './component/Dashboard/Landing';
import Loader from './component/Layout/Loader';
const Routes= lazy(()=>import('./component/Routing/Routes'));
require('dotenv').config({path: __dirname + '/.env'})


function App() {
  return (
    <div className="App">
    <Router>
          <div className="App">  
            {/* <ReactNotification />         */}
            <Switch>
            <Route exact path="/" component={Landing} />
            <Suspense fallback={
             <div>
               <Loader/>
             </div>
            }>
            <Route component={Routes} />
            </Suspense>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
