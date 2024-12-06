import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

function Movies() {
  const [movieData, setMovieData] = useState(null);
  const [title, setTitle] = useState(null);
  const [year, setYear] = useState(null);

  // Function to fetch movie data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${title}${
          year ? `&y=${year}` : ""
        }&apikey=c559e919`
      );

      if (response.data.Response === "True") {
        setMovieData(response.data);
      } else {
        setMovieData(null);
        Swal.fire("Movie not found!");
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        borderRadius: 1,
        p: 2,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        bgcolor: "background.paper",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Search for a Movie
      </Typography>
      <Box component="form" sx={{ display: "flex", gap: 2 }}>
        <TextField
          size="small"
          label="Movie Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "300px" }}
        />
        <TextField
          size="small"
          label="Year"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          sx={{ width: "200px" }}
          type="number"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={fetchData}
          sx={{ width: "150px" }}
        >
          Search
        </Button>
      </Box>

      {movieData && (
        <Card sx={{ maxWidth: 1000, mt: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <CardMedia
                component="img"
                height="400"
                image={
                  movieData.Poster !== "N/A"
                    ? movieData.Poster
                    : "https://via.placeholder.com/300x400"
                }
                alt={movieData.Title}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {movieData.Title} ({movieData.Year})
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Genre:</strong> {movieData.Genre}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Director:</strong> {movieData.Director}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Actors:</strong> {movieData.Actors}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Language:</strong> {movieData.Language}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Country:</strong> {movieData.Country}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Released:</strong> {movieData.Released}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Runtime:</strong> {movieData.Runtime}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Box Office:</strong> {movieData.BoxOffice || "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Plot:</strong> {movieData.Plot}
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Ratings
                </Typography>
                <List>
                  {movieData?.Ratings.map((rating, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText
                        primary={`${rating.Source}:`}
                        secondary={rating.Value}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )}
    </Box>
  );
}

export default Movies;