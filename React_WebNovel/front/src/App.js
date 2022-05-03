import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
//import Star from './components/utils/Star'
//import Reply from './components/utils/Reply'
//import Success from './components/views/Success'
import Login from './components/views/LoginPage/Login';
import Main from './components/views/MainPage/Main';
import Landing from './components/views/LandingPage/Landing'
// let Star = lazy(() => { return import('./components/utils/Star')});
//let Reply = lazy(() => { return import('./components/utils/Reply')});
//let Success = lazy(() => { return import('./components/views/Success')});
import Scribe from './components/views/ScribePage/Scribe'


export default function App() {

  //const [state, setstate] = useState("")




	return (
		<div className='App'>
      <Switch>
      <Route exact path="/">
      <Landing/>
      </Route>
      <Route exact path="/main">
      <Main/>
      </Route>
      <Route exact path="/login">
      <Login/>
      </Route>
      <Route exact path="/scribe">
      <Scribe/>
      </Route>
      </Switch>
		</div>
	);
}

