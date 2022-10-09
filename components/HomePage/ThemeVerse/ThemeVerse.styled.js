import styled from "styled-components";
export const ThemeVerseContainer = styled.div`
  padding: 120px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/thePlatform/img-themeverseBg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 150px 0;

  @media only screen and (max-width: 1024px) {
    padding: 140px 0;
  }
`;
export const Slash = styled.img`
  width: 31px;
  margin: 0 5px;
  @media only screen and (max-width: 1024px) {
    width: 21.94px;
  }
  @media only screen and (max-width: 575px) {
    width: 19.94px;
  }
`;
export const TextWrapper = styled.div`
  max-width: 983px;

  @media only screen and (max-width: 1024px) {
    max-width: 450px;
  }
  @media only screen and (max-width: 575px) {
    max-width: 90%;
  }
`;
export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledText = styled.p`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  text-align: center;
  color: #c7c9d1;
  margin-top: 15px;
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #c7c9d1;
  margin-top: 15px;
  text-align: center;
  @media only screen and (max-width: 1399px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;
export const ImageContainer = styled.div`
  margin: 0 auto;
  margin-top: -6%;
  max-width: 1244px;

  position: relative;

  @media only screen and (max-width: 1399px) {
    max-width: 900px;
    margin-top: -8%;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 446px;
    margin: 0;
    margin-top: -9%;
    padding: 0 40px;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: -4%;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
    margin-top: -8%;
    padding: 0 20px;
  }
`;
export const Image = styled.img`
  z-index: 5;
  display: block;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const TabImage = styled.img`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const MobileImage = styled.img`
  display: none;

  @media only screen and (max-width: 767px) {
    display: block;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const TextBox = styled.div`
  padding: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  max-width: 594.79px;
  width: 50%;
  background: rgba(0, 0, 0, 0.26);
  border: 1px solid #51535c;
  backdrop-filter: blur(53.5px);
  border-radius: 32px;
  position: absolute;
  right: -3%;
  bottom: -3%;
  @media only screen and (max-width: 1399px) {
    max-width: 450px;
    padding: 50px 30px;
  }
  @media only screen and (max-width: 1024px) {
    width: 328px;
    padding: 20px;
    right: 0;
    transform: translateX(87%);
    top: 27%;
    bottom: auto;
  }
  @media only screen and (max-width: 767px) {
    width: 328px;
    padding: 15px;
    right: auto;
    left: 15%;
    transform: translateX(0);
    top: -8%;
    bottom: auto;
  }
  @media only screen and (max-width: 400px) {
    width: 80%;
    left: auto;
    right: 0;
  }
`;
export const TextBoxTitleAndIcon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 25px;
  @media only screen and (max-width: 1024px) {
    gap: 10px;
    .seconText {
      display: none;
    }
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #0099ff;
  min-width: 58px;
  height: 58px;
  border-radius: 50%;
  @media only screen and (max-width: 1399px) {
    min-width: 45px;
    height: 45px;
  }
  @media only screen and (max-width: 1399px) {
    min-width: 32px;
    height: 32px;
  }
`;
export const Icon = styled.img`
  @media only screen and (max-width: 1399px) {
    width: 24px;
  }
  @media only screen and (max-width: 1399px) {
    width: 20px;
  }
`;
export const TitleAndText = styled.div``;
export const TextBoxTitle = styled.h6`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 27.2125px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #ffffff;
  padding-top: 2.5%;
  @media only screen and (max-width: 1399px) {
    padding-top: 1%;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
export const TextBoxText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19.4375px;
  line-height: 140%;
  color: #c7c9d1;
  padding-top: 15px;
  @media only screen and (max-width: 1399px) {
    font-size: 14px;
  }
`;
