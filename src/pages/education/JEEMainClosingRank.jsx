import React, { useMemo, useState } from "react";
import CustomDropDown from "../../components/CustomDropDown";
import {
  Box,
  Divider,
  Paper,
  Typography,
  Grid2 as Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const states = [{ name: "Andhra Pradesh", value: "andhrapradesh" }];

const quotas = [
  { name: "Home State", value: "hs" },
  { name: "Other State", value: "os" },
];

const seatTypes = [{ name: "Open", value: "open" }];

function JEEMainClosingRank() {
  const [state, setState] = useState("");
  const [quota, setQuota] = useState("hs");
  const [gender, setGender] = useState("");
  const [seatType, setSeatType] = useState("");
  const [program, setProgram] = useState("");

  const programs = useMemo(() => {}, []);

  return (
    <Box>
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
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">State Closing Rank</Typography>
        </Box>
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CustomDropDown
                value={state}
                data={states}
                onChange={(e) => setState(e.target.value)}
                name="name"
                dropdownValue="value"
                label="State"
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CustomDropDown
                value={quota}
                data={quotas}
                onChange={(e) => setQuota(e.target.value)}
                name="name"
                dropdownValue="value"
                label="Quota"
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    row
                    value={gender} // Controlled by state
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CustomDropDown
                value={seatType}
                data={seatTypes}
                onChange={(e) => setSeatType(e.target.value)}
                name="name"
                dropdownValue="value"
                label="Seat Type"
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CustomDropDown
                value={program}
                data={seatTypes}
                onChange={(e) => setProgram(e.target.value)}
                name="name"
                dropdownValue="value"
                label="Program Name"
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

export default JEEMainClosingRank;
