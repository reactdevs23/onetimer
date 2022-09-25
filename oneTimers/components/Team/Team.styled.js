import styled from "styled-components";
export const TeamWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledTeamContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 100px 0;
  width: 90%;
`;
export const CeoInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;
  gap: 50px;
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const NameAndPositon = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const CeoPosition = styled.p`
  padding-right: 15px;
  border-right: 2px solid #6a6a6a;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #15c4af;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 767px) {
    border-right: none;
    padding-right: 0;
  }
`;
export const CeoName = styled.p`
  padding-left: 15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 131%;
  letter-spacing: -0.02em;
  color: #ffffff;
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    padding-bottom: 20px;
  }
`;
export const CeoImg = styled.img`
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 60%;
    margin: 0 auto;
    display: block;
  }
`;
export const OurBeliveText = styled.h6`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 200;
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.04em;
  color: #f2f5fa;
  text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  padding: 25px 0;
  padding-bottom: 60px;

  @media only screen and (max-width: 1024px) {
    font-size: 28.64px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 28px;
  }
`;
export const TeamMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  position: relative;
  justify-content: center;
  @media only screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    padding: 0 20px;
  }
  @media only screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0px;
  }
`;
export const MemberImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;
export const Positon = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 171%;
  letter-spacing: 0.01em;
  color: #b861fd;
  @media only screen and (max-width: 375px) {
    font-size: 14px;
  }
`;
export const Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #ffffff;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;
export const TextureImage = styled.img`
  position: absolute;
  top: 10%;

  right: 10%;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    right: 30px;
    width: 80px;
    display: none;
    z-index: -5;
  }
`;
export const SecondTextureImage = styled.img`
  position: absolute;
  top: -3.8%;

  left: 12%;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    width: 140px;
    display: none;
    z-index: -5;
  }
`;
export const ThirdTextureImage = styled.img`
  position: absolute;
  bottom: 10%;

  right: 19%;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    width: 140px;
    display: none;
    z-index: -5;
  }
`;
