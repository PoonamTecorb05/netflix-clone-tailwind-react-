import React from "react"
import Footer from "../Loyout/Footer/Footer"
const MainPage = () => {
    return (
        <div class="bg-black">
            <section class="relative h-auto   flex items-center flex-col w-full   justify-center">
                <div class="max-w-3xl  space-y-2 flex flex-col items-center  text-white absolute z-20   ">
                    <div class="text-4xl font-bold">Unlimited movies, TV </div>
                    <div class="text-4xl font-bold"> shows and more.</div>
                    <div class="text-xl hidden  sm:inline-block">Watch anywhere. Cancel anytime.
                    </div>
                    <div class="text-lg px-8 hidden  sm:inline-block">Ready to watch? Enter your email to create or restart your membership.
                    </div>
                    <div class="w-full flex">
                        <input class="w-full focus:outline-none text-gray-400 px-4 py-3 bg-white" placeholder="Email address" type="text" />
                        <div class="bg-red flex-shrink-0 flex ">
                            <button class="px-4 flex bg-subMain  items-center">Get Started

                                <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                <div class=" relative h-full  ">
                    <div class="absolute w-full  h-60 bg-gradient-to-b from-black   ">
                        <div class="flex  items-center py-4 px-20 w-full justify-between">
                            <div class="w-40 text-red-500">
                                <span class=" nfLogo" data-uia="netflix-header-svg-logo-noclick">
                                    <svg viewBox="0 0 111 30" class="svg-icon svg-icon-netflix-logo" focusable="false">
                                        <g id="netflix-logo">
                                            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            <div class="flex space-x-6 hidden  sm:inline-flex">
                                <div class="bg-subMain px-4 py-1 rounded  text-white">Sign In</div>
                            </div>
                        </div>
                    </div>
                    <div class=" h-60 bg-gradient-to-t absolute from-black text-white bottom-0 w-full"> </div>


                    <img class="z-0 flex w-full object-fit " src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/7ae82418-beea-4868-8594-dddd284dc46c/IN-en-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg" />

                </div>

            </section>

            <section class=" border-t-8  flex h-full flex-col sm:flex-row  flex  border-gray-700   min-half-screen  w-full z-50 text-white   bg-black">

                <div class="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 w-full p-12">
                    <div class="text-4xl text-left  w-full font-bold">Enjoy on your TV.
                    </div>
                    <div class="text-xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                </div>

                <div class="sm:w-1/2 w-full bg-black">
                    <div class="relative max-w-2xl  my-auto w-full my-auto  overflow-hidden">
                        <img alt="" class="absolute  right-0 z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />

                        <video class=" p-20 w-full" autoplay="" playsinline="" muted="" loop="">
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                        </video>

                    </div>

                </div>
            </section >
            <section class="   flex-col sm:flex-row h-full  flex  border-gray-700 border-t-8  min-half-screen  w-full z-50 text-white   bg-black">

                <div class="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 w-full p-12">
                    <div class="relative ">
                        <div class="flex justify-center w-full">
                            <div class="absolute w-full flex justify-between  max-w-sm flex bottom-0  bg-black border border-gray-500 p-4">
                                <div class=""><img class="h-16" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" /></div>
                                <div class="our-story-card-animation-text">
                                    <div id="" class="text-0" data-uia="">Stranger Things</div>
                                    <div id="" class="text-1" data-uia="">Downloading...</div>
                                </div>
                                <div class=""><svg class="text-white w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg></div>
                            </div>
                        </div>

                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />

                    </div>

                </div>

                <div class="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 w-full p-12">
                    <div class="text-4xl text-left  w-full font-bold">Watch everywhere.

                    </div>
                    <div class="text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        .</div>
                </div>


            </section >

            <section class="  flex h-full  flex-col sm:flex-row  border-gray-700 border-t-8  min-half-screen  w-full z-50 text-white   bg-black">

                <div class="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 w-full p-12">
                    <div class="text-4xl text-left  w-full font-bold">Watch everywhere.

                    </div>
                    <div class="text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        .</div>
                </div>

                <div class="sm:w-1/2 w-full bg-black">
                    <div class="relative max-w-2xl  my-auto w-full my-auto  overflow-hidden">
                        <img alt="" class="absolute  right-0 z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />

                        <video class=" p-20 w-full" autoplay="" playsinline="" muted="" loop="">
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                        </video>

                    </div>

                </div>

            </section >
            {/* <!--  --> */}

            < section class=" border-gray-700 border-b-8 border-t-8 bg-black text-center  text-white" >
                <div class="w-full max-w-3xl mx-auto py-20">


                    <div class=" text-4xl font-bold" >Frequently Asked Questions</div>



                    <div class=" py-4">  Ready to watch? Enter your email to create or restart your membership.
                    </div>


                    <div class="flex w-full">
                        <input class="w-full focus:outline-none text-gray-400 px-4 py-3 bg-white" placeholder="Email address" type="text" />
                        <div class="bg-red flex-shrink-0 flex text-white ">
                            <button class="px-4 flex bg-subMain  items-center">Get Started

                                <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </section >
            {/* <!--  --> */}

            <Footer />

        </div >
    )
}
export default MainPage