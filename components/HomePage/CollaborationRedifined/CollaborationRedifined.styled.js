import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 0;
`;
export const TextContainer = styled.div`
  width: 732px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    width: 448px;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;
export const Break = styled.br`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;

  /* .frontLine {
    position: absolute;
    top: 35%;
    width: 105%;
    left: 54%;
    transform: translate(-50%, -50%);
  } */
  /* .backLine {
    position: absolute;
    top: 45%;
    width: 110%;
    left: 49%;
    transform: translate(-50%, -50%);
    z-index: -1;
  } */
  /* @media only screen and (max-width: 1024px) {
    .frontLine {
      width: 155%;
      top: 35%;
      left: 56%;
    }
    .backLine {
      top: 42%;
      width: 170%;
    }
  }
  @media only screen and (max-width: 520px) {
    .frontLine {
      width: 305%;
      top: 37%;
      left: 60%;
    }
    .backLine {
      top: 42%;
      left: 45%;
      width: 310%;
    }
  } */
`;
export const FrontLineImage = styled.img`
  position: absolute;
  top: 35%;
  width: 105%;
  left: 54%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 1024px) {
    width: 155%;
    top: 35%;
    left: 56%;
  }
  @media only screen and (max-width: 520px) {
    width: 305%;
    top: 37%;
    left: 60%;
  }
`;
export const BackLineImage = styled.img`
  position: absolute;
  top: 45%;
  width: 110%;
  left: 49%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    top: 42%;
    width: 170%;
  }
  @media only screen and (max-width: 520px) {
    top: 42%;
    left: 45%;
    width: 310%;
  }
`;
export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 0.65fr repeat(9, 1fr) 0.65fr;
  gap: 10px;
  height: 100%;
  width: 100%;

  .image {
    --marginTop: -73%;
    --margin: 1%;
    width: 100%;
    display: block;
    z-index: -1;
  }
  .image1 {
    margin-top: calc(var(--marginTop) - 40%);
  }
  .image2 {
    margin-top: calc(var(--marginTop) / 1.5);
  }
  .image3 {
    margin-top: calc(var(--margin));
  }
  .image4 {
    margin-top: calc(var(--margin) + 40%);
  }
  .image5 {
    margin-top: calc(var(--margin) + 70%);
  }
  .image6 {
    margin-top: calc(var(--margin));
  }
  .image7 {
    margin-top: calc(var(--margin) + 27%);
  }
  .image8 {
    margin-top: calc(var(--marginTop) - 10%);
  }
  .image9 {
    margin-top: calc(var(--marginTop) + 22%);
  }
  .image10 {
    margin-top: calc(var(--margin) - 15%);
  }
  .image11 {
    margin-top: calc(var(--margin) + 15%);
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(7, 1fr);
    .image1,
    .image2,
    .image10,
    .image11 {
      display: none;
    }
  }
  @media only screen and (max-width: 520px) {
    grid-template-columns: 0.3fr repeat(3, 1fr) 0.3fr;
    .image1,
    .image2,
    .image3,
    .image9,
    .image10,
    .image11 {
      display: none;
    }
    .image4,
    .image8 {
      object-fit: cover;
      height: 100%;
    }
  }
`;
export const Image = styled.img``;
