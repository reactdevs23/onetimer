import React from "react";
import {
  StyledContainer,
  Tagline,
  TextStrokeColor,
  InfoText,
} from "../../../styles/Common.styled";
import {
  CeoName,
  CeoPosition,
  CeoImg,
  CeoInfo,
  NameAndPositon,
} from "../Team.styled";

const CeoAndFounder = () => {
  return (
    <CeoInfo>
      <CeoImg src="/ceo.svg" />
      <div>
        <NameAndPositon>
          {" "}
          <CeoPosition>Founder & CEO</CeoPosition>
          <CeoName>Doyoon Daren Kang</CeoName>
        </NameAndPositon>
        <div>
          <InfoText color="#9B9FA4" fontWeight="500">
            {" "}
            Daren is a visionary and an executor.
          </InfoText>{" "}
          <InfoText color="#9B9FA4" fontWeight="500">
            With twenty years of leadership experience across manufacturing,
            software, marketing, creative and publishing industries, he’s been
            focusing on solving problems in the creator ecosystem.{" "}
          </InfoText>{" "}
          <InfoText color="#9B9FA4" fontWeight="500">
            One of his favorite quotes is <q>No Day, But Today</q> , and he
            believes today is always the first day of the rest of his life.
          </InfoText>
        </div>
      </div>
    </CeoInfo>
  );
};

export default CeoAndFounder;
