import React, { useState, createContext, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    token: "",
  });
  const loginDataHandler = (username, password, token) => {
    setLoginData((prev) => ({ ...prev, username, password, token }));
  };

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  return <AuthContext.Provider value={{ loginDataHandler }}>{props.children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
