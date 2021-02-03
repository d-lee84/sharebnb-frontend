import {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShareBnBApi from "./apiHelper";
import './App.css';

import jwt from "jsonwebtoken";

/** App component
 *
 */
function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function getCurrentUserOnUpdate() {
    async function getCurrentUser(){
      ShareBnBApi.token = token;
      let {username} = jwt.decode(token);
      let user = await ShareBnBApi.getCurrentUser(username);
      setCurrentUser(user);
    }
    if(token) getCurrentUser();
  }, [token]);


  async function loginUser(formData) {
    console.log("entered into loginUser fn");
    let token; 
    try {
      token = await ShareBnBApi.login(formData);
      console.log("token", token);
    } catch (err) {
      console.error(err);
    }
    setToken(token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Routes loginUser={loginUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
