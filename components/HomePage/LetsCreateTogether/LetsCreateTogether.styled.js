import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1500px;
  width: 90%;
  margin: 0 auto;
  padding: 100px 0;
`;
export const TextContainer = styled.div`
  width: 732px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    width: 448px;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
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
  color: #fff;

  padding-top: 25px;
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
export const Button = styled.button`
  border: 0;
  outline: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #ffffff;
  background: linear-gradient(
    99.18deg,
    #28aee8 6.57%,
    #2875e8 40.1%,
    #ac5ba7 95.45%
  );
  border-radius: 30px;
  padding: 15px 25px;
  margin: 0 auto;
  display: block;
  margin-top: 25px;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
