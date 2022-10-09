import styled from "styled-components";

export const StyledHeroWrapper = styled.section`
  padding-top: 120px;

  @media only screen and (max-width: 520px) {
    padding-top: 200px;
    position: relative;
  }
`;
export const StyledWorkWithBrands = styled.div`
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 50px;
  @media only screen and (max-width: 520px) {
    position: static;
    padding-top: 0px;
  }
`;
export const StyledHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 440px;
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;
export const MobileImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 440px;
  display: none;
  @media only screen and (max-width: 520px) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  width: 740px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 5px;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    width: 448px;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;
export const HeroTitle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 112%;
  text-align: center;
  color: #f2f5fa;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 32px;
  }
`;
export const HeroText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #c7c9d1;

  padding-top: 10px;
  margin: 0 auto;
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  position: relative;
  @media only screen and (max-width: 1024px) {
    font-size: 16.99px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
