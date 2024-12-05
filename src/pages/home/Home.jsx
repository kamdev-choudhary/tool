import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material"; // Importing expand icon
import toolsList from "../../data/toolsList.json";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  let tools = [];
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: 2,
        p: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
        },
        bgcolor: "background.primary",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Welcome to ToolBox
      </Typography>
      <Typography
        variant="h5"
        component="p"
        gutterBottom
        sx={{ color: "#555" }}
      >
        We provide a collection of awesome tools for free!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, color: "#666" }}>
        Discover powerful tools to enhance your productivity, creativity, and
        more. New tools and features are added every week, so be sure to check
        back regularly!
      </Typography>

      <Box>
        {Object.keys(toolsList)?.map((object) => (
          <Accordion key={object}>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
              {object}
            </AccordionSummary>
            <AccordionDetails>
              {toolsList[object]?.map((tool, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: 1,
                    mb: 1,
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.1)",
                    },
                    p: 1,
                    borderRadius: 1,
                  }}
                  key={tool}
                  onClick={() => navigate(tool?.path)}
                >
                  <img src={tool.icon} height={30} />
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    {tool.name}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Typography variant="body2" sx={{ marginTop: "40px", color: "#888" }}>
        Updates and new tools are released every week. Stay tuned for more!
      </Typography>
    </Paper>
  );
}

export default Home;
