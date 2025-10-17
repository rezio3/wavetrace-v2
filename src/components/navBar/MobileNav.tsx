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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(true)}
    >
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
      <Divider />
      <List>
        {footerLinks.map((footerLink, index) => (
          <ListItem key={footerLink.linkText + index} disablePadding>
            <ListItemButton component={Link} to={footerLink.link}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={footerLink.linkText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
