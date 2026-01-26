import styled from "@emotion/styled";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import logo from "../assets/logo.svg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  cursor: "pointer",
}));

const Navbar = ({ onMenuClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#fff" }}>
      <StyledToolbar>
        <IconButton
          onClick={onMenuClick}
          sx={{ display: { xs: "block", sm: "none" } }}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Stack direction="row" gap={14}>
          <Stack direction="row" gap={1}>
            <Avatar src={logo} alt="Logo" sx={{ width: 32, height: 32 }} />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              color="#333"
            >
              SALINITY
            </Typography>
          </Stack>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
            color="#343c"
          >
            Task Manager
          </Typography>
        </Stack>

        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search>
          <InputBase placeholder="search..." />
        </Search> */}
        <Icons>
          {" "}
          <Badge badgeContent={4} color="error">
            <Mail color="primary" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="primary" />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
            src="https://randomuser.me/api/portraits/men/1.jpg
"
          />
        </Icons>
        <Userbox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://randomuser.me/api/portraits/men/1.jpg
"
          />
          <Typography variant="span">John</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
