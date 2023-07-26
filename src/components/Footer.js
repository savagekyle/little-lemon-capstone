import React from "react";

const Footer = () => {
  const date = new Date();
  var year = date.getFullYear();
  return (
    <div className="footer">
      <footer className="container">
        Copyright &copy; {year} Little Lemon. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;
