import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
// Pages
import Home from './componentes/home/Home'; 
import About from './componentes/about/About';
import Error from './componentes/error/Error';
import PropertyPage from './componentes/property/PropertyPage';

//Routes for the webpage
ReactDOM.render(
    <Router>
	    <div>
	    	<Switch>

		        {/* Pages + error 404 */}
		        <Route exact path='/' component={Home} />
		        <Route path='/about' component={About} />
				<Route path='/property' component={PropertyPage} />
				<Route component={Error} />
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
