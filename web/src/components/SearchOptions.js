import React, { useState } from "react";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "./CustomButton";
import { ColumnsTemplate } from "./ColumnsTemplate";

function SearchOptions() {
  const [size_height, set_size_height] = useState([0, 50]);
  const handleChange = (value) => {
    return `${value}`;
  };
  return (
    <div>
      <div className="slidersContainer">
        <Box sx={{ width: 300 }}>
          <p>Højde voksen</p>
          <Slider
            getAriaLabel={() => "Højde voksen"}
            value={size_height}
            onChange={(event, newValue) => set_size_height(newValue)}
            valueLabelDisplay="on"
            getAriaValueText={""}
            max={50}
          />
        </Box>
      </div>
      <div className="buttonContainer">
        <CustomButton />
      </div>
    </div>
  );
}

export default SearchOptions;
