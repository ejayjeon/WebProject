import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/Landing/LandingPage';
import Login from './components/views/Login/Login';
import RegisterPage from "./components/views/Register/RegisterPage";

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/api/user/login">Login</Link>
        </li>
        <li>
          <Link to="/api/user/register">Register</Link>
        </li>
      </ul>

      <hr />
      <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/api/user/login" element={<Login/>}/>
          <Route exact path="/api/user/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
