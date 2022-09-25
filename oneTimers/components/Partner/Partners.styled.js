import styled from "styled-components";

export const PartnersWrapper = styled.div`
  background: url("/partnerbg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const PartnersContainer = styled.div`
  max-width: 1250px;
  width: 90%;
  margin: 0 auto;
  padding: 100px 0;
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    gap: 40px;
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const PartnersTitle = styled.div``;

export const OurPartNers = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 1399px) {
    gap: 20px;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;

    gap: 40px;
  }
  @media only screen and (max-width: 575px) {
    justify-content: center;
    align-items: center;
    gap: 40px;
    display: none;
  }
`;
export const OurPartNers2 = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  display: none;
  @media only screen and (max-width: 1399px) {
    gap: 20px;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;

    gap: 40px;
  }
  @media only screen and (max-width: 575px) {
    display: flex;
  }
`;
export const Partner = styled.img`
  max-width: 200px;
  margin: 18px 0px;

  @media only screen and (max-width: 767px) {
    max-width: 180px;
    min-width: ${({ wide }) => wide && "300px"};
  }
  @media only screen and (max-width: 450px) {
    max-width: 150px;
    min-width: ${({ wide }) => wide && "250px"};
  }
  @media only screen and (max-width: 375px) {
    max-width: 120px;
    min-width: ${({ wide }) => wide && "200px"};
  }
`;
