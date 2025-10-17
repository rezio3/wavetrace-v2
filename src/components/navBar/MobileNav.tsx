import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navButtons } from "./NavBar";
import { Link } from "react-router-dom";
import { footerLinks } from "../footer/Footer";

type MobileNavProps = {
  isOpen: boolean;
  toggleDrawer: any;
};
const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleDrawer }) => {
  const list = () => (
    <Box
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(true)}
    >
      <div className="d-flex flex-column h-100">
        <List>
          {navButtons.map((navButton, index) => (
            <ListItem key={navButton.btnText + index} disablePadding>
              <ListItemButton component={Link} to={navButton.link}>
                <ListItemIcon>{navButton.icon}</ListItemIcon>
                <ListItemText primary={navButton.btnText} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ opacity: 1 }} />
        <Divider className="mt-auto" sx={{ opacity: 1 }} />
        <List>
          {footerLinks.map((footerLink, index) => (
            <ListItem key={footerLink.linkText + index} disablePadding>
              <ListItemButton component={Link} to={footerLink.link}>
                <ListItemIcon>{footerLink.icon}</ListItemIcon>
                <ListItemText primary={footerLink.linkText} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
  return (
    <div>
      <>
        <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
};

export default MobileNav;
