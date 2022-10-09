import styled from "styled-components";

export const Wrapper = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding-top: 60px;

  .mobileImage {
    display: none;
  }
  .tabImage {
    display: none;
  }
  @media only screen and (max-width: 1399px) {
    gap: 20px;
  }
  @media only screen and (max-width: 1024px) {
    .webImage {
      display: none;
    }
    .tabImage {
      display: block;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
      width: 100%;
      .webImage {
        display: none;
      }
      .tabImage {
        display: none;
      }
      .mobileImage {
        display: block;
      }
    }
    @media only screen and (max-width: 520px) {
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  width: 100%;

  @media only screen and (max-width: 1024px) {
    width: 90%;
    display: block;
    margin: 0 auto;
    margin-top: 48px;
  }
  @media only screen and (max-width: 575px) {
    min-height: 400px;
    object-fit: cover;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 35px;
  @media only screen and (max-width: 1024px) {
    padding-left: 0px;
  }
`;
export const TextWrapper = styled.div`
  width: 604px;
  @media only screen and (max-width: 1399px) {
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 448px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 575px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;
export const Logo = styled.img`
  margin-top: 25px;
  width: 94px;
  @media only screen and (max-width: 1024px) {
    font-size: 75px;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 auto;
    margin-top: 25px;
  }
`;
