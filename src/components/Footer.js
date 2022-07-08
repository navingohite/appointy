import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="f1"
      className="text-center text-lg-start bg-info fixed-bottom"
      style={{ color: "white" }}
    >
      <div className="text-center p-2">
        <p className="text-reset">© 2022 Copyright: Appointy</p>
      </div>
    </footer>
  );
};
export default Footer;
