import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="navItem">
                <NavLink exact activeClassName="active" className="homepage" to="/">Home</NavLink>
                <NavLink exact activeClassName='active' to='/blogs'>
                    Blogs
                </NavLink>
                <NavLink exact activeClassName='active' to='/projects'>
                    Projects
                </NavLink>
                <NavLink exact activeClassName='active' to='/contact'>
                    Contact
                </NavLink>

            </div>
        </>
    );
}

export default Navbar;