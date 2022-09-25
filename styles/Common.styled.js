import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 100px 0px;
  width: 90%;
  max-width: 1500px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom && paddingBottom};
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    padding-bottom: ${({ paddingBottom }) => paddingBottom && "30px"};
  }
`;
export const TextStrokeColor = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "100%")};
  letter-spacing: 0.02em;
  color: #2b2b32;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.44);
  backdrop-filter: blur(4px);
  color: #2b2b32;
  display: block;
  text-align: ${({ textCenter }) => textCenter && textCenter};
  -webkit-text-stroke: 1.5px #fff;
  text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 36px;
  }
`;
export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "112%")};
  text-align: ${({ textCenter }) => textCenter && "center"};

  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "-0.04em"};
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : " #f2f5fa")};

  text-shadow: ${(textShadow) =>
    textShadow && "0px 2px 15px rgba(0, 0, 0, 0.33)"};
  @media only screen and (max-width: 1280px) {
    font-size: ${({ faqTitle }) => faqTitle && "48px"};
    font-size: ${({ firstAction }) => firstAction && "51.5294px"};
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
    letter-spacing: ${({ tabvLspacing }) =>
      tabvLspacing ? tabvLspacing : "-0.04em"};
    line-height: ${({ lineHeight }) => (lineHeight ? "120% " : "112%")};
  }

  @media only screen and (max-width: 575px) {
    font-size: ${({ fontSize }) => (fontSize ? "34px" : "36px")};
  }
`;
export const Tagline = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-align: ${({ textCenter }) => textCenter && "center"};
  letter-spacing: 0.01em;
  color: #27a9ff;
  @media only screen and (max-width: 1024px) {
    font-size: 15.54px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 14.07px;
  }
`;

export const StyledText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: ${({ color }) => (color ? color : "#c7c9d1")};
  padding-bottom: 20px;
  @media only screen and (max-width: 1024px) {
    font-size: 16.99px;
    text-align: ${({ textCenter }) => textCenter && "center"};
  }
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

export const InfoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: ${({ textCenter }) => textCenter && "center"};
  color: #c7c9d1;
  color: ${({ color }) => color && color};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  padding-top: 12px;
  @media only screen and (max-width: 1024px) {
    font-size: 16.99px;
    text-align: ${({ tabCenter }) => tabCenter && "center"};
  }
  @media only screen and (max-width: 767px) {
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 375px) {
    font-size: 15.97px;
  }
`;
