import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faCompactDisc } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen bg-[#ba9ffb]">
      <h1 className="flex flex-col items-center my-2 font-bold text-xl ">Soundwave</h1>
      <ul className="px-5 w-full">
        <li><FontAwesomeIcon icon={faHouse} /> Home</li>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</li>
        <li><FontAwesomeIcon icon={faCompactDisc} /> Your Library</li>
      </ul>
    </div>
  )
}

export default Sidebar
