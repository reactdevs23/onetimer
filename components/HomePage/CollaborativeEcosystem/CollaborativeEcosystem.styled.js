import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1500px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding-top: 120px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 604px;
  @media only screen and (max-width: 1024px) {
    max-width: 448px;
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 520px) {
    padding: 0 10px;
    .title {
      font-size: 38px;
    }
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
  @media only screen and (max-width: 1399px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;
