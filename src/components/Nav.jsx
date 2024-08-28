import React from "react";
import './nav.css';
import { GrCart } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="me-auto">
          <a className="navbar-brand" href="#">
            <img src="/logo.jpg" alt="logo" width="50" height="50" />
          </a>
        </div>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler btn bg-secondary-subtle p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Navigation Links */}
          <ul className="navbar-nav align-item-center mx-auto justify-content-center gap-4">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">How to use</a>
            </li>
          </ul>

          {/* Right-Aligned Links */}
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                <abbr title="Cart">
                  <GrCart style={{ height: '24px', width: '24px' }} />
                </abbr>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                <abbr title="Search">
                  <FaSearch style={{ height: '24px', width: '24px' }} />
                </abbr>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                <abbr title="Profile">
                  <CgProfile style={{ height: '24px', width: '24px' }} />
                </abbr>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
