import { createContext, useState } from "react";
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

    allUsers: null,
    setAllUsers: () => null,

    userToken: null,
    setUserToken: () => null,
});

export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState({});
    const [allUsers,setAllUsers] = useState([]);
    const [userToken,_setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    
    
    const setUserToken = (token) =>{
        if(token){
            localStorage.setItem('TOKEN',token);
        }else{
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
    }
    const value = {currentUser, setCurrentUser,allUsers,setAllUsers,userToken,setUserToken};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}