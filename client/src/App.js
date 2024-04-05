import './App.css';
import Keno from './components/Keno';
import Login from './components/login';
import {Routes, Route} from "react-router-dom";
import React, {useContext, useEffect} from 'react';
import { AuthContext } from './context/authProvider';
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const {loginData}= useContext(AuthContext)
  const test = true
  
  useEffect(() => {
    loginData.token ? navigate('/keno') :navigate('/')
  }, [loginData]);
  return (
    <div className="App">   
     
      <Routes>
     <Route path="/" element={<Login/>}/>
      {loginData.token ?<Route path="/keno" element={<Keno/>}/> : <Route path="/" element={<Login/>}/>}
      </Routes>   
 
  
    </div>
  );
}

export default App;
