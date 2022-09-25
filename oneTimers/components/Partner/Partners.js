import React from "react";
import { Title } from "../../styles/Common.styled";

import {
  PartnersContainer,
  OurPartNers,
  OurPartNers2,
  Partner,
  PartnersWrapper,
} from "./Partners.styled";

const Partners = () => {
  const partners = [
    [
      "/partners/aws.svg",
      "/partners/startupstadium.svg",
      "/partners/flyingvest.svg",
    ],

    ["/partners/nft.svg", "/partners/gatler.svg", "/partners/themverse.svg"],
    [
      "/partners/thns.svg",
      "/partners/doersAndDreamers.svg",
      "/partners/geo.svg",
    ],
  ];
  const partners2 = [
    ["/partners/aws.svg", "/partners/startupstadium.svg"],

    ["/partners/flyingvest.svg", , "/partners/nft.svg"],
    ["/partners/gatler.svg", "/partners/themverse.svg"],
    ["/partners/thns.svg", "/partners/doersAndDreamers.svg"],
    ["/partners/geo.svg"],
  ];
  return (
    <PartnersWrapper>
      <PartnersContainer>
        <Title>Partners</Title>
        <div>
          {partners.map((el, i) => (
            <OurPartNers key={i}>
              {el.map((image, index) => (
                <Partner key={index} src={image}></Partner>
              ))}
            </OurPartNers>
          ))}
        </div>
        <div>
          {partners2.map((el, i) => (
            <OurPartNers2 key={i}>
              {el.map((image, index) => (
                <Partner
                  key={index}
                  src={image}
                  wide={i === partners2.length - 1 && "200px"}
                ></Partner>
              ))}
            </OurPartNers2>
          ))}
        </div>
      </PartnersContainer>
    </PartnersWrapper>
  );
};

export default Partners;
