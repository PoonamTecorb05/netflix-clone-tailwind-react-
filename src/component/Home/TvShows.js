import Titles from "../Titles"
import { BsCollectionFill } from 'react-icons/bs'
import { Movies } from "../../Data/MovieData"
import Movie from "../Movie"
import { Autoplay, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
const TvShows = () => {
    return (
        <div className="my-16">
            <Titles title="International Tv Shows" Icon={BsCollectionFill} />
            <div className="w-full mt-6 ">
                <Swiper
                
                    direction="horizontal"
                    loop={true}
                    autoplay={{ dalay: 4000, disableOnInteraction: false }}
                    speed={1000}
                    modules={[Autoplay ,Scrollbar]}
                    className="w-full xl:h-48 bg:dry h-35"
                    slidesPerView={6}
                    spaceBetween={20}
                    scrollbar={{ draggable: true }}
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
                    {Movies.slice(0, 8).map((movie, index) => {
                        return (
                            <SwiperSlide key={index} className="relative rounded overflow-hidden">
                                <Movie key={index} movie={movie} />
                            </SwiperSlide>
                        )

                    }
                    )}
                </Swiper>
            </div>
        </div>
    )
}
export default TvShows