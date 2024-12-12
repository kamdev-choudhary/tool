import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <Typography variant="body1" color="textSecondary" align="center">
        No items to display.
      </Typography>
    );
  }

  return (
    <>
      {items.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CustomAccordion;
