import { GiSoundWaves } from "react-icons/gi";
import HeaderText from "../HeaderText";
import SectionWrapper from "../SectionWrapper";
import Button from "@mui/material/Button";

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
          <>
            <Button
              className="ms-4"
              variant="text"
              data-pageindex={1}
              onClick={() => {}}
            >
              {e.btnText}
            </Button>
          </>
        ))}

        {/* <ShoppingCartIcon fontSize="medium" /> */}
      </div>
    </SectionWrapper>
  );
};

export default NavBar;

const navButtons = [
  { btnText: "Music", link: "" },
  { btnText: "Orders", link: "" },
  { btnText: "Collaboration", link: "" },
];
