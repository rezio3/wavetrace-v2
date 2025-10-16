import React from "react";
import type { TermsAndPolicy } from "../../assets/types";
import CustomText from "../elements/CustomText";
import HeaderText from "../elements/HeaderText";

const TermsAndPolicyItem: React.FC<TermsAndPolicy> = ({
  header,
  content,
  isListNumerable,
  list,
  content2,
}) => {
  return (
    <div className="mb-5">
      <HeaderText
        headerType="h5"
        fontSize={22}
        fontFamily="Roboto, sans-serif"
        fontWeight={400}
        className="mb-3"
      >
        {header}
      </HeaderText>
      <CustomText textType="p" fontWeight={200} fontSize={16} className="mb-2">
        {content}
      </CustomText>
      {list &&
        list.map((list, index) => (
          <React.Fragment key={"list item" + header + index}>
            {list.innerListHeader && (
              <CustomText textType="span" fontSize={16} fontWeight={400}>
                {list.innerListHeader}
              </CustomText>
            )}
            <ul className={isListNumerable ? `list-unstyled ms-3` : ""}>
              {list.innerListItem.map((innerListItemText, index) => (
                <li className={innerListItemText + index}>
                  <CustomText textType="span" fontSize={16} fontWeight={200}>
                    {isListNumerable && index + 1 + ". "} {innerListItemText}
                  </CustomText>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      {content2 && (
        <CustomText
          textType="p"
          fontWeight={200}
          fontSize={16}
          className="mb-2"
        >
          {content2}
        </CustomText>
      )}
    </div>
  );
};

export default TermsAndPolicyItem;
