import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({ selectedContent, setSelectedContent }) {
  const contents = [
    "Fun",
    "Education",
    "Sports",
    "News",
    "Investment",
    "Facts",
  ];

  const handleChange = (event) => {
    setSelectedContent(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Age</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={selectedContent}
          label="Select"
          onChange={handleChange}
        >
          {contents.map((content) => (
            <MenuItem value={content}>{content}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
