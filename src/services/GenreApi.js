export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd8f3d19e69msh6f4728a8ae200fbp17602djsn39223bea3755',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

export const GenreApi = async () =>{
    const response = await fetch('https://shazam.p.rapidapi.com/genres/list', options)
    const data = await response.json();

    return data;
}