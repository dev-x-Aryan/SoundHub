
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a2e76c122c8f4909a4e7f64e497a9193&response_type=token&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export const Login = () => {
  const handleClick= ()=>{
    window.location.href = `${AUTH_URL}&show_dialog=true`;
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-500">
      <h1 className="mb-5 text-xl text-green-300 text font-semibold">Connect with Spotify?</h1>
      <button className="rounded bg-white border-black text-black px-4 py-2 hover:bg-green-500 focus:outline-none" onClick={handleClick}>Login</button>
    </div>
  )
}
