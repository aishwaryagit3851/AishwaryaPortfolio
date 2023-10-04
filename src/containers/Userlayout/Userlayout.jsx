import React from "react";
import Navbar from "../Navbar/Navbar";
import ScrollToUp from "../ScrollToUp/ScrollToUp";

function Userlayout({ children }) {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <section>
        <div>{children}</div>
      </section>
    </React.Fragment>
  );
}

export default Userlayout;
