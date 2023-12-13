import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Header.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";

function Header() {
  //   const navigate = useNavigate();
  return (
    <div className="header d-flex justify-content-between p-4">
      <div className="d-flex gap-2">
        <div>
          <button className="btn">
            <ArrowBackIcon />
          </button>
        </div>
        <div>
          <h6>Media Management</h6>
          <p>Draft campaign</p>
        </div>
      </div>
      <div className="d-flex gap-2">
        <div>
          <h6>Jane Cooper</h6>
          <a href="#" className="link">
            Change profile
          </a>
        </div>
        <div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
