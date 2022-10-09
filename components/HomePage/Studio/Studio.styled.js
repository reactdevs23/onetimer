import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 120px 0;
`;
export const TextContainer = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 448px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 520px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding-top: 60px;
  .tabImage {
    display: none;
  }
  .mobileImage {
    display: none;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    .webImage {
      display: none;
    }
    .tabImage {
      display: block;
    }
  }
  @media only screen and (max-width: 1399px) {
    gap: 20px;
  }
  @media only screen and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: 1fr;
    @media only screen and (max-width: 520px) {
    }
    .tabImage {
      display: none;
    }
    .mobileImage {
      display: block;
    }
  }
`;
export const Image = styled.img`
  width: 100%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const TextWrapper = styled.div`
  width: 604px;
  @media only screen and (max-width: 1399px) {
    padding-right: 15px;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const IconAndText = styled.div`
  display: flex;
  gap: 15px;
  margin: 40px 0;
  @media only screen and (max-width: 375px) {
    gap: 10px;
  }
`;
export const IconContainer = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1.5px solid #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1399px) {
    min-width: 45px;
    height: 45px;
  }
  @media only screen and (max-width: 1024px) {
    min-width: 32px;
    height: 32px;
  }
`;
export const Icon = styled.img`
  width: 28px;
  @media only screen and (max-width: 1399px) {
    width: 22px;
    height: 22px;
  }
  @media only screen and (max-width: 1024px) {
    width: 16px;
    height: 16px;
  }
`;

export const TitleAndText = styled.div`
  width: calc(100% - 50px);
  @media only screen and (max-width: 1024px) {
    width: calc(100% - 32px);
  }
`;
export const Title = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #ffffff;
  padding-top: 10px;
  @media only screen and (max-width: 1399px) {
    font-size: 20px;
    padding-top: 6px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    padding-top: 4px;
  }
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #c7c9d1;
  margin-top: 10px;
  @media only screen and (max-width: 1399px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
