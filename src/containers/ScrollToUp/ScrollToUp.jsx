import React, { useState } from "react";
import { useEffect } from "react";

function ScrollToUp() {
  const [showArrow, setShowArrow] = useState(false);
  // const listenToScroll = () => {
  //   window.addEventListener("scroll", () => {
  //     // let heightToHidden = 20;
  //     // const winScroll =
  //     //   document.body.scrollTop || document.documentElement.scrollTop;

  //     if (window.pageYOffset > 100) {
  //       setShowArrow(true);
  //     } else {
  //       setShowArrow(false);
  //     }
  //   });
  // };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    console.log("clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {showArrow && (
        <button
          className=" text-3xl"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: "black",
            color: "#fff",
            boxShadow: "20px 20px 30px hsla(0, 0%, 0%, 0.25)",
            borderRadius: "80%",
            padding: "1%",
            curcor: "pointer",
          }}
          onClick={() => scrollUp()}
        >
          &#8593;
        </button>
      )}
    </div>
  );
}

export default ScrollToUp;
