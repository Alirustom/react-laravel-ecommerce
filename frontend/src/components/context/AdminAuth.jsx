import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({children}) => {
   const admin_info_token = localStorage.getItem('token');
   const [user, setUser]  = useState(admin_info_token);

   const login = (user) => {
     setUser(user);
   }
   const logout = () => {
     localStorage.removeItem('token');
     setUser(null);
   }

   return (<AdminAuthContext.Provider value={{user,login,logout}}>
           {children}
          </AdminAuthContext.Provider>)
}