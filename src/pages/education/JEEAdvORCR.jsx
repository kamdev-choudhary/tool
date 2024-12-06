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
  Autocomplete,
  TextField,
} from "@mui/material";
import { CustomToolbar } from "../../components/CustomToolbar";

import iit2024 from "../../data/iit/iit2024.json";
import categories from "../../data/categories.json";
import _ from "lodash";
import { DataGrid } from "@mui/x-data-grid";
import iits from "../../data/iit/iits.json";

function JEEAdvORCR() {
  const [institute, setInstitute] = useState("");
  const [gender, setGender] = useState("");
  const [seatType, setSeatType] = useState("");
  const [program, setProgram] = useState("");

  // Generate unique programs dynamically based on selected filters
  const programs = useMemo(() => {
    const filteredPrograms = iit2024.filter((d) => {
      return (
        (!institute || d.Institute === institute) &&
        (!seatType || d["Seat Type"] === seatType) &&
        (!gender || d.Gender === gender)
      );
    });

    const uniquePrograms = _.uniqBy(
      filteredPrograms.map((d) => ({
        name: d["Academic Program Name"],
        value: d["Academic Program Name"],
      })),
      "value"
    );

    return _.sortBy(uniquePrograms, "name");
  }, [institute, gender, seatType]);

  // Filtered Data Logic
  const filteredData = useMemo(() => {
    return iit2024.filter((d) => {
      return (
        (!institute || d.Institute === institute) &&
        (!seatType || d["Seat Type"] === seatType) &&
        (!gender || d.Gender === gender) &&
        (!program || d["Academic Program Name"] === program)
      );
    });
  }, [institute, gender, seatType, program]);

  // Columns for DataGrid
  const columns = [
    {
      field: "id",
      headerName: "SN",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    { field: "Institute", headerName: "Institute", minWidth: 150 },
    {
      field: "Academic Program Name",
      headerName: "Program Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "Quota",
      headerName: "Quota",
      minWidth: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Seat Type",
      headerName: "Seat Type",
      minWidth: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Gender",
      headerName: "Gender",
      minWidth: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Opening Rank",
      headerName: "Opening Rank",
      minWidth: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Closing Rank",
      headerName: "Closing Rank",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
  ];

  // Rows for DataGrid
  const rows = useMemo(() => {
    return filteredData?.map((d, index) => ({ ...d, id: index + 1 }));
  }, [filteredData]);

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
                value={institute}
                data={_.sortBy(iits)}
                onChange={(e) => setInstitute(e.target.value)}
                name="name"
                label="Institute"
              />
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box>
                <CustomDropDown
                  value={gender}
                  data={[
                    "Gender-Neutral",
                    "Female-only (including Supernumerary)",
                  ]}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CustomDropDown
                value={seatType}
                data={_.sortBy(categories)}
                onChange={(e) => setSeatType(e.target.value)}
                name="name"
                dropdownValue="value"
                label="Seat Type"
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Autocomplete
                size="small"
                options={programs}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField {...params} label="Select a Program" />
                )}
                value={programs.find((p) => p.value === program) || null}
                onChange={(event, newValue) => {
                  setProgram(newValue?.value || "");
                }}
                isOptionEqualToValue={(option, value) =>
                  option.value === value?.value
                } // Match by value
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
          },
          mt: 2,
          bgcolor: "background.paper",
        }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          disableSelectionOnClick
          slots={{ toolbar: () => <CustomToolbar showAddButton={false} /> }}
        />
      </Box>
    </Box>
  );
}

export default JEEAdvORCR;