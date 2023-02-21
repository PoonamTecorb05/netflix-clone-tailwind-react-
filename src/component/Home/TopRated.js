import { useState } from "react"
import { Movies } from "../../Data/MovieData";
import Titles from "../Titles";
import { BsCaretLeftFill, BsCaretRightFill, BsCollectionFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import { FaHeart } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Rating from "./star";
const TopRated = () => {
    const [nextEl, setNextEl] = useState(null);
    const [prevEl, setPrevEl] = useState(null);
    const classNames="hover:bg-dry transition text-sm rounded w-8 h-8 flex-colo bg-subMain text-white"
    return (
        <div className="my-16">
            <Titles title="Popular Movie" Icon={BsCollectionFill} />
            <div className=" mt-10">
                <Swiper
                    // direction="vertical"
                    slidePreView={1}
                    loop={true}
                    speed={1000}
                    modules={[Navigation, Autoplay]}
                    className="w-full xl:h-48 bg:dry h-35"
                    navigation={{ nextEl, prevEl }}
                    slidesPerView={6}
                    spaceBetween={20}
                    autoplay={true}
                    breakpoints={{
                        2100: {
                            width: 2100,
                            slidesPerView: 4,
                          },
                        1366: {
                            width: 1366,
                            slidesPerView: 4,
                          },
                          768: {
                            width: 768,
                            slidesPerView: 3,
                          },
                        640: {
                          width: 640,
                          slidesPerView: 3,
                        },
                        480: {
                          width: 480,
                          slidesPerView: 2,
                        },
                        375: {
                            width: 375,
                            slidesPerView: 1,
                          },
                      }}
                >
                    {Movies.slice(0, 6).map((movie, index) => {
                        return (
                            <SwiperSlide key={index}  >
                                <div className="p-2 h-48 hovered border border-border bg-dry rounded-lg  overflow-hidden">
                                    <img src={`/images/${movie?.image}`}
                                        alt=""
                                        className="w-full h-full object-cover" />
                                    <div className="px-4 hoveres gap-6 text-center absolute bg:black bg-opacity-70 bg-main top-0 left-0 bottom-0 right-0 ">
                                        <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-subMain  bg-opacity-30 rounded-md text-white  bg-white ">
                                            <FaHeart />
                                        </button>
                                        <Link className="font-medium text-l trancute line-clamp-1" to="" >
                                            {movie.name}
                                        </Link>
                                        <div className="flex gap-2 text-star">
                                            <Rating value={movie.rate} />
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    }
                    )}
                </Swiper>
                <div className="w-full px-1 flex-rows pt-12 gap-6">
                    <button className={classNames} ref={(node)=> setPrevEl(node)}>
                        <BsCaretLeftFill/>
                    </button>
                    <button className={classNames} ref={(node)=> setNextEl(node)}>
                        <BsCaretRightFill/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TopRated