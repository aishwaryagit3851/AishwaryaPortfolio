import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "../Introduction/Introduction";
import Userlayout from "../Userlayout/Userlayout";
import About from "../About/About";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import ScrollToUp from "../ScrollToUp/ScrollToUp";
import Contact from "../Contact/Contact";

function Navigations() {
  return (
    <BrowserRouter>
      {/* <Suspense> */}
      <Routes>
        <Route
          path="/"
          element={
            <Userlayout>
              <Introduction />
            </Userlayout>
          }
        />
        <Route
          path="/projectDetail"
          element={
            <Userlayout>
              <ProjectDetail />
            </Userlayout>
          }
        />
        <Route
          path="/contactMe"
          element={
            <Userlayout>
              <Contact />
            </Userlayout>
          }
        />
      </Routes>

      {/* <ScrollToUp /> */}
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default Navigations;
