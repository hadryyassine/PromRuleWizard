import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import logo from "../logo.png";
import "@fontsource/inter"; // Defaults to weight 400.

const pages = [];
const appName = "PromRuleWizard";
const blackColor = "#2B1E24";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleRepoRedirect = () => {
    window.location.href = "https://github.com/hadryyassine/PromRuleWizard"; // Replace with your actual GitHub repo URL
  };
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.21)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              ml: 4,
              height: "30px",
            }}
          />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "18px",
              // letterSpacing: '.3rem',
              color: blackColor,
              textDecoration: "none",
            }}
          >
            {appName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: blackColor }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Box
            component="img"
            src={logo}
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: "30px",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Inter",
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: blackColor,
              textDecoration: "none",
            }}
          >
            {appName}
          </Typography>
          <Box
            flexGrow={1}
            justifyContent="flex-end"
            sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: blackColor,
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            sx={{
              flexGrow: 0,
              bgcolor: "#F93F01",
              color: "white",
              borderRadius: 36,
              textTransform: "none",
              px: 2,
              "&:hover": {
                bgcolor: "white",
                color: "#F93F01",
                border: "1px solid #F93F01",
              },
            }}
            onClick={handleRepoRedirect} // Add this onClick handler
          >
            Visit Our Github Repo
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
