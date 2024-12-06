import React from "react";
import EncDec from "./EncDec";
import Hash from "./Hash";
import { Box } from "@mui/material";

function CryptoJS() {
  return (
    <Box>
      <EncDec />
      <Hash />
    </Box>
  );
}

export default CryptoJS;
