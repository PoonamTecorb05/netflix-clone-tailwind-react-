import React from "react"
import Banner from "../component/Home/Banner"
import PopularMovies from "../component/Home/PopularMovies"
import Promos from "../component/Home/Promo"
import TopRated from "../component/Home/TopRated"
import TvShows from "../component/Home/TvShows"
import Layout from "../Loyout/Loyout"
const HomeScreen = () => {
    return (
        <Layout>
            <div className="conatiner mx-auto min-h-screen px-2 mb-6">
                <Banner />
                <PopularMovies />
                <TvShows />
                <Promos />
                <TopRated />
            </div>
        </Layout>
    )
}
export default HomeScreen