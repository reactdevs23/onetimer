import React from "react";
import styled from "styled-components";
import {
  ImagesContainer,
  ImageWrapper,
  FrontLineImage,
  BackLineImage,
  Image,
} from "./CollaborationRedifined.styled";

const ImageContainer = () => {
  const images = [
    "/thePlatform/img-collaboration01.webp",
    "/thePlatform/img-collaboration02.webp",
    "/thePlatform/img-collaboration03.webp",
    "/thePlatform/img-collaboration04.webp",
    "/thePlatform/img-collaboration05.webp",
    "/thePlatform/img-collaboration06.webp",
    "/thePlatform/img-collaboration07.webp",
    "/thePlatform/img-collaboration08.webp",
    "/thePlatform/img-collaboration09.webp",
    "/thePlatform/img-collaboration10.webp",
    "/thePlatform/img-collaboration11.webp",
  ];
  return (
    <ImageWrapper>
      <FrontLineImage src="thePlatform/img-chainFront.webp" alt="#" />
      {/* <img
        src="thePlatform/img-chainFront.webp"
        alt="#"
        className="frontLine"
      />{" "} */}
      <BackLineImage src="thePlatform/img-chainBack.webp" alt="#" />
      <ImagesContainer>
        {images.map((el, i) => (
          <Image src={el} alt="#" key={i} className={`image${i + 1} image`} />
        ))}
      </ImagesContainer>
    </ImageWrapper>
  );
};

export default ImageContainer;
