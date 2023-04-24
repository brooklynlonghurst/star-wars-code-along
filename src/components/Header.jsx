import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h2>RRD</h2>
            <nav>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/search">
                    <button>Search</button>
                </Link>
                <Link to="/details/1">
                    <button>Details</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header