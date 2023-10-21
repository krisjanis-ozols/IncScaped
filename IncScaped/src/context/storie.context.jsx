import { createContext, useState } from "react";

const TempStories = [
    {
        id: "1",
        user_id: "1",
        title: "Storie title",
        storie_text: "lorem",
        fragment: "lorem",
        creation_date: "21/10/2023",
        
    },
    {
        id: "2",
        user_id: "1",
        title: "Storie title",
        storie_text: "lorem",
        fragment: "lorem",
        creation_date: "21/10/2023",
    },
    {
        id: "3",
        user_id: "1",
        title: "Storie title",
        storie_text: "lorem",
        fragment: "lorem",
        creation_date: "21/10/2023",
    },
    {
        id: "4",
        user_id: "1",
        title: "Storie title",
        storie_text: "lorem",
        fragment: "lorem",
        creation_date: "21/10/2023",
    },
];

export const StorieContext = createContext({
    stories: null,
    setStorie: () => null,
});

export const StorieProvider = ({children}) =>{
    const [stories,setStorie] = useState(TempStories);
    const value = {stories, setStorie};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}