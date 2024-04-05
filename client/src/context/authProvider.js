import React, { useState, createContext, useEffect } from "react";
import axios from "axios"

const AuthContext = createContext();

function AuthProvider(props) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    token: "",
  });
  const loginDataHandler = (username, password, token) => {
    
    setLoginData((prev) => ({ ...prev, username, password, token }));
    axios.post("/auth/login",{username, password, token})
    .then((res)=>{
console.log(res.data)
    })
    .catch((error)=>{
console.log(error)
    })
  };

  useEffect(() => {
    
  }, [loginData]);
  return <AuthContext.Provider value={{ loginDataHandler }}>{props.children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
