import React, { useState, createContext, useEffect } from "react";
import axios from "axios"

const AuthContext = createContext();

function AuthProvider(props) {

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    token: "",
    id:0
  });
  const loginDataHandler = (username, password, token) => {    
    setLoginData((prev) => ({ ...prev, username, password, token }));
    axios.post("/auth/login",{username, password, token})
    .then((res)=>{
console.log(res.data)
setLoginData(res.data)
    })
    .catch((error)=>{
console.log(error)
    })
  };

  return <AuthContext.Provider value={{ loginDataHandler, loginData }}>{props.children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
