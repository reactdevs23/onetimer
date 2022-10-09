import React from "react";
import {
  Center,
  Tagline,
  TextStrokeColor,
  Title,
} from "../../../styles/Common.styled";

import {
  GridContainer,
  Image,
  Logo,
  Text,
  TextWrapper,
  TitlesContainer,
  Wrapper,
  ImageContainer,
  NftTopImage,
  NftMobileImage,
  Slash,
} from "./NftCommons.styled";

const NftCommons = () => {
  return (
    <Wrapper>
      <GridContainer>
        {" "}
        <ImageContainer data-aos="fade-right">
          <Image src="/thePlatform/img-nftBg.webp" alt="#" />
          <NftTopImage
            src="/thePlatform/img-nftText_t.webp"
            alt="#"
            className="webImage"
          />
          <NftMobileImage
            src="/thePlatform/img-nftText_m.webp"
            alt="#"
            className="mobileImage"
          />
        </ImageContainer>
        <div>
          <TextWrapper
            data-aos="fade-up "
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <Center mobileCenter>
              <Tagline display="inline-block" alignCenter noPadding>
                WEB3 powered standard license FOR CREators
              </Tagline>
            </Center>
            <TitlesContainer>
              <Title noPadding mobileTextCenter className="title">
                NFT
              </Title>
              <Slash src="thePlatform/icons/ic-slash.svg" alt="#" />

              <TextStrokeColor
                className="title"
                color="#12121A
"
                noPadding
                mobileTextCenter
              >
                Commons
              </TextStrokeColor>
            </TitlesContainer>{" "}
            <Text>
              NFT Commons is a web3 powered license standard that defines the
              copyright license granted to NFT Holders. It is made for creators
              who are sharing their works through NFTs. It is created to help
              creators easily choose the desired license type and imprint the
              license term with their creative assets, without procedural
              complexity and costly legal expenses.
            </Text>
            <Logo src="/thePlatform/icons/nftLogo.svg" alt="#" />
          </TextWrapper>
        </div>
      </GridContainer>
    </Wrapper>
  );
};

export default NftCommons;
