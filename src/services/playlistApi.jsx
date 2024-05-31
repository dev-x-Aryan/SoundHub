import { useAuth } from "../contexts/AuthContext";

export const playlistApi = async (token) => {
  const response = await fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  const data = await response.json();
  return data.items;
};
