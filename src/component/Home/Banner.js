import { Link } from "react-router-dom";
import { Autoplay } from "swiper"
import { FaHeart } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from "../../Data/MovieData";
import FlexMovieItems from "../FlexMovieItems";
const Banner = () => {
    return (
        <div className="relative w-full">
            <Swiper
                direction="vertical"
                slidePreView={1}
                loop={true}
                autoplay={{ dalay: 4000, disableOnInteraction: false }}
                speed={1000}
                modules={[Autoplay]}
                className="w-full xl:h-96 bg:dry h-48"
            >
                {Movies.slice(0, 6).map((movie, index) => {
                    return (
                        <SwiperSlide key={index} className="relative rounded overflow-hidden">
                            <img src={`/images/${movie?.image}`}
                                alt=""
                                className="w-full h-full object-cover" />
                            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg-gap-8 md-gap-5 gap-4">
                                <h1 className="xl:text-4xl trucate capitalize font-sans sm:text-2xl text-xl font-bold ">
                                    {movie.name}

                                </h1>
                                <div className="flex gap-5 item-center text-dryGray">
                                    <FlexMovieItems movie={movie} />
                                </div>
                                <div className="flex gap-5 item-center">
                                    <Link to="" className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm  text-xs" >
                                        Watch
                                    </Link>
                                    <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                                        <FaHeart />
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>

        </div>
    )
}
export default Banner