import { createContext, useState } from "react";

const TempIdeas = [
    {
        id: "1",
        admin_id: "1",
        prompt_text: "The Forgotten Enchanter's Amulet",
        creation_date: "21/10/2023",
    },
    {
        id: "2",
        admin_id: "1",
        prompt_text: "The Forgotten Enchanter's Amulet",
        creation_date: "21/10/2023",
    },
    {
        id: "2",
        admin_id: "1",
        prompt_text: "The Forgotten Enchanter's Amulet",
        creation_date: "21/10/2023",
    }
];

export const IdeaContext = createContext({
    idea: null,
    setIdea: () => null,
});

export const IdeaProvider = ({children}) =>{
    const [idea,setIdea] = useState(TempIdeas);
    const value = {idea, setIdea};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}