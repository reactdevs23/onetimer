import styled from "styled-components";

export const StyledHeroWrapper = styled.section`
  padding-top: 150px;
`;
export const StyledHeroSection = styled.div`
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const StyledHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 440px;
`;

export const TextContainer = styled.div`
  width: 630px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 5px;
  z-index: 2;
  @media only screen and (max-width: 991px) {
    width: 450px;
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

  @media only screen and (max-width: 375px) {
    font-size: 36px;
  }
`;
export const HeroText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;

  padding-top: 20px;
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 991px) {
    font-size: 16.99px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
