import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function Header() {




    return (


        <nav class="bg-black fixed top-0 left-0 z-50 w-full">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="text-white text-2xl">
                    <div className="h-16">
                        <img className="h-full" src="./eroma.png" alt="" />
                    </div>

                </NavLink>

                <div >
                    <ul className="flex nabvar gap-3 p-4">
                        <li>
                            <NavLink to={'/'} className="text-white text-lg" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list" className="text-white text-lg">List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload" className="text-white text-lg">Upload</NavLink>
                        </li>

                    </ul>
                </div>
            </div >
        </nav >

    );
}