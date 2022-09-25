import styled from "styled-components";

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 5.5fr;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;
export const TextContainer = styled.div`
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-top: -17%;
  @media only screen and (max-width: 1024px) {
    margin-top: 0%;
    width: 80%;
    margin: 0 auto;
    display: block;
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  background: linear-gradient(
    99.18deg,
    #28aee8 6.57%,
    #2875e8 40.1%,
    #ac5ba7 95.45%
  );
  border-radius: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #ffffff;
  padding: 12px 22px;
  border: none;
  outline: none;
  margin-top: 20px;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 12px 25px;
  }
`;
