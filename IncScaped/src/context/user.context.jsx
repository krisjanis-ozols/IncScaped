import { createContext, useState } from "react";

const TempUser = [
    {
        id: "1",
        Username: "1",
        password: "23e34",
        email: "kkas@gmail.com",
        registration_date: "21/10/2023",
        role: 0,
    },
];

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(TempUser);
    const value = {currentUser, setCurrentUser};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}