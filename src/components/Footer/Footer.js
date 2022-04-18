import React from "react";

const Footer = () => {
  var today = new Date();
  return (
    <div className="py-4 text-center text-white bg-dark">
      &#169; Copyright {today.getFullYear()}
    </div>)
};

export default Footer;
