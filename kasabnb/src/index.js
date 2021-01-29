import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// Call components of the website
import Home from './components/home/Home';
import About from './components/about/About';
import Error from './components/error/Error';
import Services from './components/services/Services';
// Set up the websites routes
ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {/*Rutas*/}
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  </Router>, //, afer Router is always required
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
