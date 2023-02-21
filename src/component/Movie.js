import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'

const Movie = ({ movie }) => {
    return (
        <div className="border border-border p-1 hover:scale-95 h-48 transition relative rounded overflow-hidden">
            <Link to="" className="w-full">
                <img src={`/images/${movie?.image}`} alt={movie?.name} className="w-full h-full object-cover" />

            </Link>
            <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 px-4 py-3 ">
                <h3 className="font-semibold truncate">{movie?.name}</h3>
                <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md  bg-subMain ">
                    <FaHeart />
                </button>
            </div>
        </div>
    )
}
export default Movie