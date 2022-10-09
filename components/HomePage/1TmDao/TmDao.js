import React from "react";
import {
  GridContainer,
  TextWrapper,
  Text,
  Info,
  AddText,
  Icon,
  ImageContainer,
  TopImage,
  BottomImage,
} from "./TmDao.styled";
import {
  TextStrokeColor,
  Tagline,
  Center,
} from "../../../styles/Common.styled";

const TmDao = () => {
  const data = [
    "Staking",
    "Official Challenges",
    "Marketing & Partnership",
    "Creator Grants",
  ];
  return (
    <div>
      <GridContainer>
        <TextWrapper>
          <Center mobileCenter>
            <Tagline mobileTextCenter display="inline-block" noPadding>
              Decentralized Autonomous Organizatopm
            </Tagline>
          </Center>
          <TextStrokeColor
            mobileTextCenter
            color="#12121A
"
            noPadding
          >
            1TM DAO
          </TextStrokeColor>
          <Text className="text">
            1CUC holders can vote over decisions that impact on the ecosystem
            development and the operation of the platform.
          </Text>
          <Info>
            {data.map((el, i) => (
              <AddText key={i}>
                <Icon src="/thePlatform/icons/add.svg" alt="#" />
                <Text>{el}</Text>
              </AddText>
            ))}
          </Info>
        </TextWrapper>
        <ImageContainer>
          <TopImage
            data-aos="fade-down"
            src="thePlatform/img-daoDiamond.webp"
          />{" "}
          <BottomImage src="thePlatform/img-daoFloor.webp" />
        </ImageContainer>
      </GridContainer>
    </div>
  );
};

export default TmDao;
