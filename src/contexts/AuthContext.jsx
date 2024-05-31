import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(null);
  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const tok = hash.split("&")[0].split("=")[1];
      if(tok){
        window.localStorage.setItem("token",tok);
        setToken[tok];
        window.location.hash = "";
      }
    }else{
      const tok = window.localStorage.getItem("token");
      if(tok){
        setToken(tok);
      }
    }
  },[])

  return(
    <AuthContext.Provider value={{token}}>{children}</AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
}
