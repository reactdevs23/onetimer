import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 0;
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
  margin-top: 45px;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;
export const TextContainer = styled.div`
  @media only screen and (max-width: 1024px) {
    order: -1;

    display: block;
  }
`;
export const Br = styled.br``;
