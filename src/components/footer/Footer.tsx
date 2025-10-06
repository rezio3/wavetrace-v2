import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SectionWrapper from "../SectionWrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <SectionWrapper className="justify-content-between align-items-end mb-4 mt-5">
      <span className="text-secondary">Wavetrace &copy; 2024</span>
      <div className="position-absolute b-0 socials-container">
        <Button variant="text" className="social-icon">
          <InstagramIcon />
        </Button>
        <Button variant="text" className="social-icon">
          <XIcon />
        </Button>
        <Button variant="text" className="social-icon">
          <YouTubeIcon />
        </Button>
      </div>
      <div>
        <Button variant="text" data-pageindex={1} onClick={() => {}}>
          Pricing
        </Button>
        <Button variant="text" data-pageindex={1} onClick={() => {}}>
          FAQ
        </Button>
        <Button variant="text" data-pageindex={1} onClick={() => {}}>
          Support
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
