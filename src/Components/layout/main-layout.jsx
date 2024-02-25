import React from "react";
// import Footer from "../footer";
import Footer from "@/Components/footer";
import Header from "../Header/Header";
const Mainlayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Mainlayout;
