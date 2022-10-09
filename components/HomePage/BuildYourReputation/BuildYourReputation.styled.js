import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 600px;
    justify-content: center;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;
export const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const TabImage = styled.img`
  width: 100%;
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    margin-top: 45px;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
`;
export const MobileImage = styled.img`
  display: none;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    display: block;
    margin-top: 45px;
  }
`;
export const TextContainer = styled.div`
  @media only screen and (max-width: 1024px) {
  }
`;
export const Br = styled.br`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
