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
        {navButtons.map((e, index) => (
          <ListItem key={e.btnText + index} disablePadding>
            <ListItemButton component={Link} to={e.link}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.btnText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Pricing", "FAQ", "Support"].map((text, index) => (
          <ListItem key={text + index} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
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
