import { useEffect, useState } from "react";
import { playlistApi } from "../services/playlistApi";
import { useAuth } from "../contexts/AuthContext";

const Library = () => {

    const {token} = useAuth();
    const [playlists, setPlaylists] = useState([]);
    useEffect(()=>{
        const fetchPlaylist = async()=>{
            const data = await playlistApi(token);
            setPlaylists(data);
            console.log(playlists);
        }
        fetchPlaylist();
    },[token,playlists])

    return (
        <div className="">
            {playlists.map((playlist)=>(
                <h1 key={playlist.id}>{playlist.name}</h1>
            ))}
        </div>
    );
}
 
export default Library;