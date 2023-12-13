import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Slider.scss";

function CustomSlider() {
  const [value, selectValue] = useState(500);
  return (
    <div className="d-flex custom-slider">
      <label className="me-2 mt-1">100</label>
      <Slider
        value={value}
        min={100}
        max={1000}
        onChange={(e) => selectValue(e.target.value)}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <label className="ms-2 mt-1">1000</label>
    </div>
  );
}

export default CustomSlider;
