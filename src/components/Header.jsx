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


        <nav class="bg-black">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="text-white text-2xl">
                    Excel
                </NavLink>

                <div >
                    <ul className="flex gap-3 p-4">
                        <li>
                            <NavLink to={'/'} className="text-white" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list" className="text-white">List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload" className="text-white">Upload</NavLink>
                        </li>

                    </ul>
                </div>
            </div >
        </nav >

    );
}