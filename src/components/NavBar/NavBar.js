import React from "react";
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link to={"/contact/list"} className="text-decoration-none">
                    <h4 className="text-dark">
                        <i className="fa fa-phone text-warning me-2"></i>
                        Contact <span className="text-warning">App</span>
                    </h4>
                </Link>
            </div>
        </nav>
    );
}
export default NavBar;