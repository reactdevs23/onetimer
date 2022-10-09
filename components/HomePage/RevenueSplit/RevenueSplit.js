import React from "react";
import {
  Center,
  Tagline,
  TextStrokeColor,
} from "../../../styles/Common.styled";

import {
  GridContainer,
  Image,
  Logo,
  Text,
  TextWrapper,
  Wrapper,
  TextContainer,
} from "./RevenueSplit.styled";

const ReveneuSplit = () => {
  return (
    <Wrapper>
      <GridContainer>
        {" "}
        <TextContainer
          data-aos="fade-up "
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <TextWrapper>
            <Center mobileCenter>
              <Tagline display="inlne-block" alignCenter noPadding>
                Turstless Multi-tier Revenue Split
              </Tagline>
            </Center>

            <TextStrokeColor
              webFontdecrease
              color="#12121A"
              noPadding
              mobileTextCenter
            >
              REVENUE SPLIT
            </TextStrokeColor>

            <Text>Gather is a team wallet.</Text>
            <Text>
              It is a shared wallet and an immutable smart contract for
              trustless revenue split among collaborating creators.
            </Text>
            <Text>
              Share revenue with team members, cocreators and contributors
              through smart contract.
            </Text>
            <Logo src="/thePlatform/icons/gatherLogo.svg" alt="#" />
          </TextWrapper>
        </TextContainer>
        <Image
          data-aos="fade-left"
          src="/thePlatform/img-revenue.webp"
          alt="#"
          className="webImage"
        />
        <Image
          data-aos="fade-left"
          src="/thePlatform/img-revenue_t.webp"
          alt="#"
          className="tabImage"
        />{" "}
        <Image
          data-aos="fade-left"
          src="/thePlatform/img-revenue_m.webp"
          alt="#"
          className="mobileImage"
        />
      </GridContainer>
    </Wrapper>
  );
};

export default ReveneuSplit;
