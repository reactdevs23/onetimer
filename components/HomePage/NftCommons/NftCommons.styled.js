import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 100px 0;
`;
export const Slash = styled.img`
  width: 31px;
  margin: 0 5px;
  @media only screen and (max-width: 1024px) {
    width: 21.94px;
  }
  @media only screen and (max-width: 575px) {
    width: 19.94px;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding-top: 60px;

  .mobileImage {
    display: none;
  }
  @media only screen and (max-width: 1399px) {
    gap: 20px;
  }
  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    @media only screen and (max-width: 520px) {
      width: 100%;
      .webImage {
        display: none;
      }
      .mobileImage {
        display: block;
        max-width: 327px;
      }
    }
    @media only screen and (max-width: 520px) {
      width: 100%;
    }
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  @media only screen and (max-width: 1024px) {
    margin-top: 120px;
  }
  @media only screen and (max-width: 575px) {
    margin-top: 140px;
  }
`;
export const Image = styled.img`
  width: 100%;

  @media only screen and (max-width: 1024px) {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
  @media only screen and (max-width: 767px) {
    min-height: 400.03px;
    width: 90%;
  }
  @media only screen and (max-width: 575px) {
    min-height: 350px;
    object-fit: cover;
    width: 100%;
  }
  @media only screen and (max-width: 520px) {
    min-height: 400px;
  }
`;

export const NftTopImage = styled.img`
  position: absolute;
  top: -10%;
  right: 10%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(22px);
  @media only screen and (max-width: 1399px) {
    top: -15%;
    right: 12%;
  }

  @media only screen and (max-width: 1199px) {
    width: 350px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 376px;
    right: 16%;
  }
`;
export const NftMobileImage = styled.img`
  position: absolute;
  top: -10%;
  right: 10%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(22px);
  @media only screen and (max-width: 1399px) {
    top: -15%;
    right: 12%;
  }
  @media only screen and (max-width: 1399px) {
    top: -15%;
    right: 12%;
  }

  @media only screen and (max-width: 575px) {
    left: 50%;
    top: -20%;
    width: 80%;
    display: block;

    transform: translate(-50%);
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
    max-width: 455px;
  }
  @media only screen and (max-width: 575px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 0px;
  }
`;
export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
  @media only screen and (max-width: 350px) {
    .title {
      font-size: 36px;
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
export const Logo = styled.img`
  margin-top: 25px;
  width: 94px;
  @media only screen and (max-width: 1024px) {
    display: block;
    font-size: 75px;
    margin: 0 auto;
    margin-top: 25px;
  }
`;
