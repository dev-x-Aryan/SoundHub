import { createContext, useContext, useState, useEffect } from "react";
import { GenreApi } from "../services/GenreApi";

const GenreContext = createContext({
    const [genres, setGenres] = useState([]),
    useEffect(() => {
        const fetchGenre() => async()=>{
            const data = await GenreApi(options);
            setGenres(data);
        }
        fetchGenre();
    },[])
});

export const GenreProvider = GenreContext.Provider;

export default function useGenre() {
    return useContext(GenreContext);
}