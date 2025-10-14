import { GiSoundWaves } from "react-icons/gi";
import HeaderText from "../elements/HeaderText";
import SectionWrapper from "../elements/SectionWrapper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <SectionWrapper className="mt-4 justify-content-between align-items-center">
      <div className="d-flex">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <HeaderText
            headerType="h1"
            letterSpacing={5}
            fontWeight={700}
            fontSize={40}
            className="me-2 mt-1"
          >
            Wavetrace
          </HeaderText>
        </Link>
        <GiSoundWaves className="display-3 text-secondary" />
      </div>
      <div>
        {navButtons.map((e, index) => (
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
        ))}
      </div>
    </SectionWrapper>
  );
};

export default NavBar;

const navButtons = [
  { btnText: "Music", link: "/music" },
  { btnText: "Orders", link: "/orders" },
  { btnText: "Collaboration", link: "/collaboration" },
];
