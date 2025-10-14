import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SectionWrapper from "../elements/SectionWrapper";
import "./Footer.scss";
import { useWindowSize } from "react-use";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { width } = useWindowSize();
  const isMobile = width < 992;
  return (
    <SectionWrapper className="justify-content-between flex-column-reverse flex-lg-row align-items-center align-items-lg-end mb-4 mt-5">
      <span className="text-secondary" style={{ marginTop: isMobile ? 80 : 0 }}>
        Wavetrace &copy; {currentYear}
      </span>
      <div className="position-absolute socials-container">
        {socialIcons.map((e, index) => (
          <Button
            variant="text"
            className="social-icon"
            key={"footer-button" + index}
          >
            {e.icon}
          </Button>
        ))}
      </div>
      <div>
        {footerLinks.map((e, index) => (
          <Button
            variant="text"
            data-pageindex={1}
            onClick={() => {}}
            key={e.linkText + index}
          >
            {e.linkText}
          </Button>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Footer;

const socialIcons = [
  { icon: <InstagramIcon />, link: "" },
  { icon: <XIcon />, link: "" },
  { icon: <YouTubeIcon />, link: "" },
];

const footerLinks = [
  { linkText: "Pricing", link: "" },
  { linkText: "FAQ", link: "" },
  { linkText: "Support", link: "" },
];
