import { Divider, List, ListItem, ListItemButton } from "@mui/material";
import { faq } from "./faq";
import CustomText from "../elements/CustomText";
import { useState } from "react";
import { useWindowSize } from "react-use";

const FaqList = () => {
  const [questionClicked, setQuestionClicked] = useState<{
    question: string;
    response: string;
  } | null>(null);
  const { width } = useWindowSize();
  const isMobile = width < 992;
  return (
    <>
      <List>
        {faq.map((e, index) => (
          <ListItem
            disablePadding
            key={e.question + index}
            onClick={() => setQuestionClicked(e)}
          >
            <ListItemButton>
              <CustomText
                fontSize={isMobile ? 14 : 16}
                fontFamily="DM Sans, sans-serif"
              >
                {e.question}
              </CustomText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <div
        className="p-3 ms-0 ms-lg-5 d-flex flex-column"
        style={{ width: isMobile ? "100%" : "50%" }}
      >
        {isMobile && <Divider sx={{ opacity: 1 }} className="mb-3" />}
        <CustomText className="mb-2" fontSize={14}>
          {questionClicked?.question}
        </CustomText>

        <CustomText textType="span" fontSize={14} fontWeight={200}>
          {questionClicked?.response}
        </CustomText>
      </div>
    </>
  );
};

export default FaqList;
