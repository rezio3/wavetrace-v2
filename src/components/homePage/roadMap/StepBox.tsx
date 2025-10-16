import { Button, CardActions, CardContent } from "@mui/material";
import HeaderText from "../../elements/HeaderText";
import { Link } from "react-router-dom";

type StepBoxProps = {
  number: string;
  header: string;
  txt: string;
  btnTxt: string;
  link: string;
};

const StepBox: React.FC<StepBoxProps> = ({
  number,
  header,
  txt,
  btnTxt,
  link,
}) => {
  return (
    <div className="mt-3 position-relative">
      <h3 className="position-absolute step-number-header">{number}</h3>
      <div className="road-map-card position-relative w-75 d-flex flex-column justify-content-between">
        <CardContent className="pb-0">
          <HeaderText
            className="text-uppercase mb-2"
            fontSize={14}
            fontFamily="Roboto, sans-serif"
          >
            {header}
          </HeaderText>

          <p className="step-txt">{txt}</p>
        </CardContent>
        <CardActions className="step-box-buttons">
          <Button size="small" component={Link} to={link}>
            {btnTxt}
          </Button>
        </CardActions>
      </div>
    </div>
  );
};

export default StepBox;
