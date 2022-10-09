import styled from "styled-components";

export const StyledHeroWrapper = styled.section`
  padding-top: 150px;
  padding-bottom: 20px; ;
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
  z-index: 1;
`;

export const TextContainer = styled.div`
  width: 988px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 5px;
  z-index: 2;
  @media only screen and (max-width: 991px) {
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
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;

  padding-top: 20px;
  margin: 0 auto;
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  position: relative;
  @media only screen and (max-width: 991px) {
    font-size: 16.99px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const ImageContainer = styled.div`
  width: 85%;
  max-width: 1376px;
  margin: 0 auto;
  margin-top: -120px;
  z-index: 2;
  position: relative;
  @media only screen and (max-width: 767px) {
    margin-top: -80px;
  }
`;
export const Image = styled.img`
  width: 100%;
  z-index: 1;
`;
