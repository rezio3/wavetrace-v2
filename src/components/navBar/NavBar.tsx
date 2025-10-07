import { GiSoundWaves } from "react-icons/gi";
import HeaderText from "../HeaderText";
import SectionWrapper from "../SectionWrapper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <SectionWrapper className="mt-4 justify-content-between align-items-center">
      <div className="d-flex">
        <HeaderText
          headerType="h1"
          letterSpacing={5}
          fontWeight={700}
          fontSize={40}
          className="me-2 mt-1"
        >
          Wavetrace
        </HeaderText>
        <GiSoundWaves className="display-3 text-secondary" />
      </div>
      <div>
        {navButtons.map((e) => (
          <Button
            className="me-4"
            variant="text"
            data-pageindex={1}
            onClick={() => {}}
          >
            {e.linkText}
          </Button>
        ))}

        <ShoppingCartIcon fontSize="medium" />
      </div>
    </SectionWrapper>
  );
};

export default NavBar;

const navButtons = [
  { linkText: "Music", link: "" },
  { linkText: "Orders", link: "" },
  { linkText: "Collaboration", link: "" },
];
