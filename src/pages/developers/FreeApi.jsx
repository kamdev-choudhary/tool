import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const apiData = {
  "Data & General Information": [
    {
      name: "OpenWeatherMap",
      url: "https://openweathermap.org/api",
      description: "Weather data and forecasts.",
    },
    {
      name: "NASA API",
      url: "https://api.nasa.gov/",
      description: "Space and astronomy-related data.",
    },
    {
      name: "REST Countries",
      url: "https://restcountries.com/",
      description: "Information about countries worldwide.",
    },
    {
      name: "Open Notify",
      url: "http://open-notify.org/",
      description: "Data on the International Space Station.",
    },
    {
      name: "Quoteable",
      url: "https://github.com/lukePeavey/quotable",
      description: "Quotations and authors API.",
    },
  ],
  "Finance & Cryptocurrency": [
    {
      name: "CoinGecko",
      url: "https://www.coingecko.com/en/api",
      description: "Cryptocurrency prices and market data.",
    },
    {
      name: "Open Exchange Rates",
      url: "https://openexchangerates.org/",
      description: "Currency exchange rates (limited free tier).",
    },
    {
      name: "Alpha Vantage",
      url: "https://www.alphavantage.co/",
      description: "Stock and financial market data.",
    },
  ],
  "Geolocation & Mapping": [
    {
      name: "PositionStack",
      url: "https://positionstack.com/",
      description: "Forward and reverse geocoding.",
    },
    {
      name: "GeoDB Cities",
      url: "https://rapidapi.com/wirefreethought/api/geodb-cities/",
      description: "City data and geolocation.",
    },
    {
      name: "Mapbox",
      url: "https://www.mapbox.com/",
      description: "Maps and location services.",
    },
  ],
  // Add more categories as needed
};

const FreeApi = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Free API List
      </Typography>
      {Object.keys(apiData).map((category) => (
        <Accordion key={category}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {apiData[category].map((api) => (
                <ListItem key={api.name} alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Link
                        href={api.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {api.name}
                      </Link>
                    }
                    secondary={api.description}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FreeApi;
