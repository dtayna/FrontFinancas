import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { api } from '../../server';
export const AuthContext = createContext();

//refresh token

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const signIn = async (login, password) => {
    let logged = false;
    let userObj = {login: login, password:password }
    localStorage.clear();
    
    try {
      const res = await api.post("/login", userObj);
      
      if (res.status === 200) {
        setToken(res.data)
        localStorage.setItem('token', res.data)
        setUserLogged(userObj);
        logged = true
      }
    
    } catch (err) {
      logged = false;
      console.error('Erro ao tentar realizar login', err);
    }
    return logged;
  };

  const signOut = async () => {
    setToken(null);
    setUser(null);
  };

  const setUserLogged = async (userObj) => {
    const resUser = await api.get(`/user/login?userLogin=${userObj.login}`);
    if(resUser.status == 200){
      setUser(resUser.data)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
