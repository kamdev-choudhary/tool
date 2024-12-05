import React, { useEffect, useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import sayari from "../../data/sayari.json";
import { sheetUrl } from "../../constants/helper";

const Shayari = () => {
  const [sayaries, setSayaries] = useState(null);

  const fetchSayari = async () => {
    fetch(sheetUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  };

  console.log(sayaries);

  useEffect(() => {
    fetchSayari();
  }, []);
  return (
    <>
      {sayari &&
        sayari?.map((s, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              borderRadius: 2,
              p: 3,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
              },
              mb: 1,
            }}
          >
            <Typography>{s?.type}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>
              {s?.content?.map((c, index) => (
                <Typography key={index}>{c}</Typography>
              ))}
            </Typography>
          </Paper>
        ))}
    </>
  );
};

export default Shayari;
