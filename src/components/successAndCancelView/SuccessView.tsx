import { Link } from "react-router-dom";
import CustomText from "../elements/CustomText";
import SectionWrapper from "../elements/SectionWrapper";
import { urlRouter } from "../../routes/urlRouter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessView = () => {
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const title = params.get("title");
  const sessionId = params.get("session_id");
  const shortSessionId = sessionId ? sessionId.slice(-8) : "";

  return (
    <SectionWrapper centered className="align-items-center gap-3">
      <CustomText className="text-center mt-5 mt-lg-3" fontSize={34}>
        Thank you for your purchase!
      </CustomText>
      <CustomText className="text-center" fontSize={24} fontWeight={300}>
        You’ve successfully purchased <b>{title}</b>.
      </CustomText>
      <CheckCircleIcon className="text-success" style={{ fontSize: 50 }} />
      <CustomText fontWeight={200} className="mb-0 mt-lg-5 text-center">
        A download link has been sent to your email: <b>{email}</b>
      </CustomText>
      {shortSessionId && (
        <CustomText fontWeight={200} className="mt-1 text-center">
          Order number: <b>{shortSessionId}</b>
        </CustomText>
      )}
      <CustomText fontWeight={200} className="mt-2 mt-lg-5 text-center">
        If you have any questions, please contact our{" "}
        <Link to={urlRouter.support} className="tag-a-link">
          support team
        </Link>
        .
      </CustomText>
    </SectionWrapper>
  );
};

export default SuccessView;
