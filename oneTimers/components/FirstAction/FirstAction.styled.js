import styled from "styled-components";

export const StyledCreatorContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const StyledCreatorFirst = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  @media only screen and (max-width: 575px) {
    display: block;
  }
`;
export const StyledCreatorFirstCol = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  margin-bottom: 30px;

  @media only screen and (max-width: 1600px) {
    display: block;
  }
  @media only screen and (max-width: 575px) {
    display: block;
    margin: 25px 0;
  }
`;

export const StyledHeading = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 26.4804px;
  line-height: 113%;
  text-align: ${({ textRight }) => textRight && textRight};
  text-transform: uppercase;
  color: #f2f5fa;
  letter-spacing: ${({ letterSpacing }) => letterSpacing && letterSpacing};
  text-shadow: 0px 0.827512px 6.20634px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 1280px) {
    letter-spacing: ${({ smallDekstopSpacing }) =>
      smallDekstopSpacing && smallDekstopSpacing};
  }
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
    letter-spacing: ${({ tabvLspacing }) => tabvLspacing && tabvLspacing};
  }
  @media only screen and (max-width: 575px) {
    letter-spacing: ${({ mobileLetterSpacing }) =>
      mobileLetterSpacing && mobileLetterSpacing};
  }
  @media only screen and (max-width: 375px) {
    font-size: 16px;
    letter-spacing: ${({ tabvLspacing }) => tabvLspacing && tabvLspacing};
  }
`;
export const StyledTextContainer = styled.div`
  padding-top: 130px;
  padding-left: 12px;
  @media only screen and (max-width: 1399px) {
    padding-top: 50px;
  }
  @media only screen and (max-width: 1024px) {
    padding-left: 0px;
    padding-top: 25px;
  }
  @media only screen and (max-width: 575px) {
    display: block;
  }
`;
export const CreatorBottomImage = styled.img`
  position: absolute;
  bottom: -8%;
  left: 0;
  z-index: -1;
  width: 14%;
  @media only screen and (max-width: 1204px) {
    transform: translateX(-50%);
    width: 180px;
  }
`;
