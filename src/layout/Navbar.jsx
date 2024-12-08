import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import {
  ArrowDropDownRounded,
  DarkModeRounded,
  LightModeRounded,
  MenuRounded,
} from "@mui/icons-material";
import { useGlobalContext } from "../GlobalProvider";
import { useNavigate } from "react-router-dom";
import toolsList from "../data/toolsList.json";
import { icons } from "../constants/icons";
import DrawerItems from "./DrawerItems";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useGlobalContext();
  const isSmallScreen = useMediaQuery("(max-width: 650px)");

  // State for managing menu and drawer
  const [menuAnchor, setMenuAnchor] = useState(null); // Tracks which menu is open (anchor element)
  const [activeCategory, setActiveCategory] = useState(null); // Tracks active category
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handlers for Drawer
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Handlers for Menus
  const openMenu = (event, category) => {
    setMenuAnchor(event.currentTarget); // Set the anchor element for the menu
    setActiveCategory(category); // Set the active category
  };

  const closeMenu = () => {
    setMenuAnchor(null); // Reset the anchor element
    setActiveCategory(null); // Reset the active category
  };

  const navigateTo = (path) => {
    if (!path) {
      console.error("No path specified");
      return;
    }
    navigate(path);
    closeMenu(); // Close the menu after navigation
    setDrawerOpen(false); // Close the drawer if open
  };

  // Render menu items for a category
  const renderMenuItems = (category) =>
    toolsList[category]?.map((item) => (
      <MenuItem
        sx={{ minWidth: 200 }}
        key={item.name}
        onClick={() => navigateTo(item.path)}
      >
        <ListItemIcon>
          <img src={item.icon} alt={item.name} style={{ height: 24 }} />
        </ListItemIcon>
        <Typography>{item.name}</Typography>
      </MenuItem>
    ));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "background.paper",
        p: 1,
        px: 2,
      }}
    >
      {isSmallScreen ? (
        <IconButton onClick={toggleDrawer(true)}>
          <MenuRounded />
        </IconButton>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              p: 1,
              borderRadius: 1,
              ":hover": { bgcolor: "rgba(0,0,0,0.1)" },
            }}
            onClick={() => navigate("/")}
          >
            <img
              src={icons.home}
              alt="Home"
              style={{ height: 24, marginRight: 8 }}
            />
            <Typography variant="body2">Home</Typography>
          </Box>

          {Object.keys(toolsList).map((category) => (
            <Box
              key={category}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                p: 1,
                borderRadius: 1,
                marginX: 1,
                ":hover": { bgcolor: "rgba(0,0,0,0.1)" },
              }}
              onClick={(event) => openMenu(event, category)}
            >
              {/* <img
                src={icons[category]}
                alt={`${category} icon`}
                style={{ height: 24, marginRight: 8 }}
              /> */}
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {category}
                <ArrowDropDownRounded />
              </Typography>
            </Box>
          ))}

          {/* Menu Component */}
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)} // Opens menu if anchorEl is set
            onClose={closeMenu} // Closes menu on backdrop click
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {activeCategory && renderMenuItems(activeCategory)}
          </Menu>
        </Box>
      )}

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerItems setDrawerOpen={setDrawerOpen} />
      </Drawer>

      {/* Theme Toggle */}
      <IconButton onClick={toggleTheme} sx={{ ml: 2 }}>
        {theme === "light" ? <LightModeRounded /> : <DarkModeRounded />}
      </IconButton>
    </Box>
  );
};

export default Navbar;
