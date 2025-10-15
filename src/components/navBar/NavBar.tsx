import { GiSoundWaves } from "react-icons/gi";
import HeaderText from "../elements/HeaderText";
import SectionWrapper from "../elements/SectionWrapper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MobileNav from "./MobileNav";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import { urlRouter } from "../../routes/urlRouter";

const NavBar = () => {
  const { width } = useWindowSize();
  const isMobile = width < 992;
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpenMobileNav(open);
    };
  return (
    <SectionWrapper className="mt-4 justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Link
          to={urlRouter.homePage}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <HeaderText
            headerType="h1"
            letterSpacing={5}
            fontWeight={700}
            fontSize={40}
            className="me-2"
          >
            Wavetrace
          </HeaderText>
        </Link>
        <GiSoundWaves className="display-3 text-secondary" />
      </div>
      <div>
        {isMobile ? (
          <button
            style={{ color: "white", background: "none", border: "none" }}
            onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
          >
            <MobileNav isOpen={isOpenMobileNav} toggleDrawer={toggleDrawer} />
            <MenuIcon fontSize="large" />
          </button>
        ) : (
          navButtons.map((e, index) => (
            <Button
              className="ms-4"
              variant="text"
              data-pageindex={1}
              component={Link}
              to={e.link}
              key={e.btnText + index}
            >
              {e.btnText}
            </Button>
          ))
        )}
      </div>
    </SectionWrapper>
  );
};

export default NavBar;

export const navButtons = [
  { btnText: "Music", link: urlRouter.musicPage, icon: <LibraryMusicIcon /> },
  { btnText: "Orders", link: urlRouter.ordersPage, icon: <DescriptionIcon /> },
  {
    btnText: "Collaboration",
    link: urlRouter.collaborationPage,
    icon: <GroupsIcon />,
  },
];
