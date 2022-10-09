import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    .topImage {
      margin-bottom: 60px;
    }
    .bottomImage {
      margin-top: 80px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .topImage {
      margin-bottom: 60px;
    }
    .bottomImage {
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 767px) {
    .topImage {
      margin-bottom: 70px;
    }
    .bottomImage {
      margin-top: 70px;
    }
  }
  @media only screen and (max-width: 520px) {
    .topImage {
      margin-bottom: 60px;
    }
    .bottomImage {
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 375px) {
    .topImage {
      margin-bottom: 150px;
    }
    .bottomImage {
      margin-top: 20px;
    }
  }
`;
export const TabImage = styled.img`
  display: none;
  width: 100%;
  @media only screen and (max-width: 1280px) {
    display: block;
  }
  @media only screen and (max-width: 520px) {
    width: 150%;
  }
`;
export const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1500px;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 670px;
  @media only screen and (max-width: 1024px) {
    width: 499.2px;
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
  }
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 145%;
  /* or 140% */

  text-align: center;
  letter-spacing: 0.01em;
  padding-top: 8px;

  /* White */

  color: #ffffff;
  @media only screen and (max-width: 1399px) {
    font-size: 20px;
    line-height: 130%;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
