import React from "react";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <h4>
                    <i className="fa fa-phone text-warning me-2"></i>
                    Contact <span className="text-warning">App</span>
                </h4>
            </div>
        </nav>
    );
}
export default NavBar;