import { createContext, useState } from "react";

const TempRatings = [
    {
        id: "1",
        storie_id: "1",
        lietotajs: "1",
        rating: "4",
        creation_date: "21/10/2023",        
    },
    {
        id: "2",
        storie_id: "2",
        user_id: "1",
        rating: "0",
        creation_date: "21/10/2023",  
    },
    {
        id: "3",
        storie_id: "3",
        user_id: "1",
        rating: "2",
        creation_date: "21/10/2023",  
    },
    {
        id: "4",
        storie_id: "4",
        user_id: "1",
        rating: "5",
        creation_date: "21/10/2023", 
    },
];

export const RatingContext = createContext({
    rating: null,
    setRating: () => null,
});

export const RatingProvider = ({children}) =>{
    const [rating,setRating] = useState(TempRatings);
    const value = {rating, setRating};
    return(
        <RatingContext.Provider value={value}>
            {children}
        </RatingContext.Provider>
    )
}