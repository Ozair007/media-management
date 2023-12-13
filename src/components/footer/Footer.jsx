import React from "react";
import "./Footer.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Footer() {
  return (
    <div className="footer d-flex justify-content-between align-items-center">
      <div>
        <button className="btn">Back</button>
      </div>
      <div>
        <button className="btn">
          Next
          <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Footer;
