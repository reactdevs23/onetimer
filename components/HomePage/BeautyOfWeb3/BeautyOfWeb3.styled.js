import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 300px 0;
  background: url("thePlatform/img-beautyweb3Bg.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 0;
    padding-top: 100px;
  }
`;
export const GridContainer = styled.div`
  width: 95%;
  max-width: 1620px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 60px;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    width: 94%;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  @media only screen and (max-width: 520px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;
export const RedImage = styled.img`
  width: 100%;

  background: rgba(139, 48, 34, 0.65);
  border: 1px solid rgba(209, 85, 67, 0.6);
  backdrop-filter: blur(10px);

  border-radius: 24px;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const RedTabImage = styled.img`
  position: static;
  display: none;

  background: rgba(139, 48, 34, 0.65);
  border: 1px solid rgba(209, 85, 67, 0.6);
  backdrop-filter: blur(10px);

  border-radius: 24px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const RedMobileImage = styled.img`
  position: static;
  display: none;
  background: rgba(139, 48, 34, 0.65);
  border: 1px solid rgba(209, 85, 67, 0.6);
  backdrop-filter: blur(10px);

  border-radius: 24px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
export const YellowImage = styled.img`
  max-width: 469px;
  width: 100%;
  background: rgba(174, 101, 0, 0.58);
  border: 1px solid rgba(219, 130, 2, 0.42);
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(9px);
  border-radius: 16px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  right: -50px;
  @media only screen and (max-width: 1600px) {
    max-width: 400px;
  }
  @media only screen and (max-width: 1399px) {
    max-width: 350px;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const YellowTabImage = styled.img`
  display: none;
  width: 100%;
  background: rgba(174, 101, 0, 0.58);
  border: 1px solid rgba(219, 130, 2, 0.42);
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(9px);

  border-radius: 16px;
  position: static;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const YellowMobileImage = styled.img`
  position: static;
  display: none;

  background: rgba(174, 101, 0, 0.58);
  border: 1px solid rgba(219, 130, 2, 0.42);
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(9px);

  border-radius: 16px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
export const GreenImage = styled.img`
  max-width: 442px;
  background: rgba(62, 129, 142, 0.64);
  border: 1px solid rgba(68, 198, 223, 0.6);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  position: absolute;
  bottom: 0;
  left: 11%;
  transform: translateY(65%);
  @media only screen and (max-width: 1600px) {
    max-width: 400px;
  }
  @media only screen and (max-width: 1399px) {
    max-width: 350px;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const GreenTabImage = styled.img`
  position: static;
  display: none;

  border-radius: 16px;
  background: rgba(62, 129, 142, 0.64);
  border: 1px solid rgba(68, 198, 223, 0.6);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);

  border-radius: 16px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const GreenMobileImage = styled.img`
  position: static;
  display: none;

  border-radius: 16px;
  background: rgba(62, 129, 142, 0.64);
  border: 1px solid rgba(68, 198, 223, 0.6);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);

  border-radius: 16px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
export const GrayImage = styled.img`
  max-width: 320px;
  background: rgba(156, 166, 167, 0.7);
  border: 1px solid rgba(161, 171, 172, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  position: absolute;
  bottom: 0;
  right: 11%;
  transform: translateY(87%);
  @media only screen and (max-width: 1600px) {
    max-width: 300px;
    right: 14%;
  }
  @media only screen and (max-width: 1399px) {
    max-width: 240px;
    right: 15%;
  }
  @media only screen and (max-width: 1199px) {
    right: 5%;
  }
  @media only screen and (max-width: 1080px) {
    right: 2%;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const GrayTabImage = styled.img`
  display: none;
  width: 100%;

  background: rgba(156, 166, 167, 0.7);
  border: 1px solid rgba(161, 171, 172, 0.9);
  backdrop-filter: blur(10px);

  border-radius: 16px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const GrayMobileImage = styled.img`
  display: none;

  background: rgba(156, 166, 167, 0.7);
  border: 1px solid rgba(161, 171, 172, 0.9);
  backdrop-filter: blur(10px);

  border-radius: 16px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
export const TextWrapper = styled.div`
  max-width: 622px;
  @media only screen and (max-width: 1024px) {
    order: -1;
    max-width: 550px;
  }
`;
export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 112%;
  text-transform: uppercase;
  color: #f2f5fa;
  @media only screen and (max-width: 1550px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 1280px) {
    font-size: 45px;
  }
  @media only screen and (max-width: 1160px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 1032px) {
    font-size: 38px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 36px;
  }
`;
export const Info = styled.div`
  padding-top: 15px;
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
`;
export const Icon = styled.img`
  width: 24px;
  margin-top: 3px;
  @media only screen and (max-width: 1024px) {
    width: 20px;
    margin-top: 1px;
  }
`;
export const AddText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #f9f9fb;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
