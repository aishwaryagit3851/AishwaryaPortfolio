import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

function Navbar() {
  return (
    // <nav
    //   className="fixed navbar navbar-expand-lg navbar-light bg-light w-screen"
    //   style={{ zIndex: 5 }}
    // >
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link disabled"
    //             href="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <>
      <div
        className="fixed flex flex-row w-screen w-screen h-17 bg-white px-10 pt-2 sm:pt-3 largeNav"
        style={{ justifyContent: "space-between", zIndex: 5 }}
      >
        <div>
          <Link className="animate-text text-xl sm:text-3xl" to="/">
            Portfolio
          </Link>
        </div>
        <div className="contactme sm:pt-2  sm:my-2 rounded align-center">
          <Link className="px-1 sm:px-2 text-xl text-white" to="/contactMe">
            Contact Me
          </Link>
        </div>
      </div>
      <div
        className="fixed flex w-screen w-screen h-17 bg-white px-10 pt-2 sm:pt-3 smallNav"
        style={{ justifyContent: "space-between", zIndex: 5 }}
      >
        <div className="contactme rounded align-center p-2 my-2">
          <Link className="pt-2 px-1text-xl text-white text-xl" to="/">
            <AiOutlineHome />
          </Link>
        </div>
        <div className="contactme rounded align-center p-2 my-2">
          <Link className="pt-2 px-1text-xl text-white text-xl" to="/contactMe">
            <MdContactPhone />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
