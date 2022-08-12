import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
                <span className='navbar-title'>
                CRUD APP
                </span>
            </Link>
            <Link to="create">
                <span className='navbar-title'>
                Create Post
            </span>
            </Link>
        </div>
    )
}