import HeaderText from "../../elements/HeaderText";
import SectionWrapper from "../../elements/SectionWrapper";
import StepBox from "./StepBox";
import "./RoadMap.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import StraightenIcon from "@mui/icons-material/Straighten";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import EditIcon from "@mui/icons-material/Edit";
import GlassCard from "../../elements/GlassCard";

const RoadMap = () => {
  return (
    <SectionWrapper centered>
      <HeaderText
        className="d-flex justify-content-center w-100 mb-1 mb-lg-5 text-uppercase text-center"
        fontSize={32}
        letterSpacing={5}
        fontWeight={700}
      >
        How does it work?
      </HeaderText>
      <div className="d-flex w-100 justify-content-center justify-content-md-between flex-wrap mt-5 mb-5">
        {stepBoxes.map((e, index) => {
          return (
            <StepBox
              number={e.number}
              header={e.header}
              txt={e.txt}
              key={e.header + index}
            />
          );
        })}
      </div>
      <HeaderText
        className="d-flex justify-content-center w-100 mb-4 text-uppercase"
        fontSize={32}
        letterSpacing={5}
        fontWeight={700}
      >
        Features
      </HeaderText>
      <div className="d-flex w-100 justify-content-center justify-content-lg-between flex-wrap  mb-5">
        {features.map((e) => {
          return (
            <div className="mt-1 position-relative" key={e.header}>
              <GlassCard
                header={e.header}
                icon={e.icon}
                height={160}
                width={350}
                className="mt-3"
                isTextBold
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default RoadMap;

const stepBoxes = [
  {
    number: "01",
    header: "Explore",
    txt: "Find the music that best suits your needs.",
  },
  {
    number: "02",
    header: "Buy or edit",
    txt: "Purchase a track or request edits to make it fit your project even better.",
  },
  {
    number: "03",
    header: "Offer",
    txt: "We’ll get in touch with you with an offer to edit the track you selected.",
  },
  {
    number: "04",
    header: "Unique",
    txt: "If you need a unique soundtrack, you can order a custom composition made specifically for your project.",
  },
  {
    number: "05",
    header: "Stay in touch",
    txt: "Collaborate with our artists to create your dream projects together.",
  },
];

const features = [
  {
    header: "Fast music editing",
    icon: <AccessTimeIcon className="feature-icon" />,
  },
  {
    header: "Affordable music customization",
    icon: <CurrencyExchangeIcon className="feature-icon" />,
  },
  {
    header: "Wide range of orchestral instruments",
    icon: <QueueMusicIcon className="feature-icon" />,
  },
  {
    header: "Synthesizers and electronic music",
    icon: <StraightenIcon className="feature-icon" />,
  },
  {
    header: "Easy order placement",
    icon: <FormatIndentIncreaseIcon className="feature-icon" />,
  },
  {
    header: "Modify and enhance your ordered music",
    icon: <EditIcon className="feature-icon" />,
  },
];
