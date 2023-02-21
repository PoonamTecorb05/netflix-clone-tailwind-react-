import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
    const Links = [
        {
            title: 'Company',
            links: [
                {
                    name: "Home",
                    link: ""

                },
                {
                    name: "About Us",
                    link: "/about-us"
                },
                {
                    name: "Contact Us",
                    link: "/contact-us"
                },
                {
                    name: "Movies",
                    link: "/contact-us"
                },
            ]
        },
        {
            title: 'Top Categories',
            links: [
                {
                    name: "Action",
                    link: "#"

                },
                {
                    name: "Romantic",
                    link: "#"
                },
                {
                    name: "Drama",
                    link: "#"
                },
                {
                    name: "Historical",
                    link: "#"
                },
            ]
        },
        {
            title: 'My Account',
            links: [
                {
                    name: "Dashboard",
                    link: "#"

                },
                {
                    name: "My Favourites",
                    link: "#"
                },
                {
                    name: "Profile",
                    link: "#"
                },
                {
                    name: "Change Password",
                    link: "#"
                },
            ]
        }

    ]
    return (
        <div className="bg-dry py-4 bprder=t-2 border-black">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-7 py-10 justify-between ">
                    {Links.map((link, index) => (
                        <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm-pb-0">
                            <h3 className="text-md lg:leading-7 font-medium  mb-4 sm-mb-5 lg-mb-6  pb-0.5" >{link.title}</h3>
                            <ul className="text-md flex flex-col space-y-3">
                                {link.links.map((text, index) => (
                                    <li key={index} className="flex item-baseline">
                                        <Link to={text.link} className="text-border text-white inline-block w-full hover:text-subMain ">
                                            {text.name}
                                        </Link>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                    ))}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm-pb-0">
                        <Link to="" >
                            <img src="/images/logo.png" alt="" className="w-2/4 object-contain h-20" />
                        </Link>
                        <p className="leading-7 text-md text-border mt-3">
                            <span>
                                Lorem 196 Andrew Road, Suite 200, <br />New York, NY 1007
                            </span>
                            <br/>
                            <span>Tell: +255 754 661 423</span>
                            <br/>
                            <span>Email: Info@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer