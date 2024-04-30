
const Home = () => {
    // eslint-disable-next-line no-undef
    const genres = ["Pop", "Rock", "Hip-hop"] 
    let title= "Pop"
    const handleChange=(event) =>{
        title = event.target.value
    }
  return (
    <div className="flex flex-col items-center mt-4 ">
        <h1 className="text-white font-bold text-3xl mb-4">Discover</h1>
        <select value={title} onChange={handleChange} className="bg-black text-gray-50 text-sm p-2">
            {genres.map((genre)=>
                <option key={genre} value={title}> {genre} </option>
            )}
        </select>
    </div>
  )
}
export default Home