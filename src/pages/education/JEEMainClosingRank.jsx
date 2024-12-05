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
  Button,
} from "@mui/material";

import states from "../../data/nit/states.json";
import nit2024 from "../../data/nit/nit2024.json";
import _ from "lodash";
import { DataGrid } from "@mui/x-data-grid";

const quotas = [
  { name: "Home State", value: "HS" },
  { name: "Other State", value: "OS" },
];

const seatTypes = [{ name: "Open", value: "open" }];

function JEEMainClosingRank() {
  const [state, setState] = useState("");
  const [quota, setQuota] = useState("hs");
  const [gender, setGender] = useState("");
  const [seatType, setSeatType] = useState("");
  const [program, setProgram] = useState("");
  const [data, setData] = useState(null);

  const programs = useMemo(() => {}, []);

  const calculateData = () => {
    try {
      const filteredData = nit2024.filter((d) => {
        return (
          d.State === state ||
          d.Quota === quota ||
          d.SeatType === seatType ||
          !gender ||
          d.Gender === gender ||
          !program ||
          d.Program === program
        );
      });
      setData(filteredData);
    } catch (error) {
      console.error("Error calculating data:", error);
    }
  };

  const columns = [
    { field: "id", headerName: "SN" },
    { field: "Institute", headerName: "Insitute" },
    { field: "State", headerName: "Insitute" },
    { field: "Academic Program Name", headerName: "Insitute" },
    { field: "Quota", headerName: "Insitute" },
    { field: "Seat Type", headerName: "Insitute" },
    { field: "Gender", headerName: "Insitute" },
  ];

  const rows = useMemo(() => {
    return data?.map((d, index) => ({ ...d, id: index + 1 }));
  }, [data]);

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
                data={_.sortBy(states)}
                onChange={(e) => setState(e.target.value)}
                name="name"
                // dropdownValue="value"
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
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={calculateData}
                  variant="contained"
                  sx={{ minWidth: 150 }}
                >
                  Get Ranks
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      {data && <DataGrid columns={columns} rows={rows} />}
    </Box>
  );
}

export default JEEMainClosingRank;
