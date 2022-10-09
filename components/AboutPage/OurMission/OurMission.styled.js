import styled from "styled-components";
export const StyledOurMission = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const StyledOurMissionComponent = styled.div`
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTextStrokeTagline = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 31px;
  /* or 110% */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* Dark/700 */
  color: #000;
  -webkit-text-stroke: 1.5px #c7c9d1;
  text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  padding: 30px 0;
  @media only screen and (max-width: 1024px) {
    text-align: center;
    font-size: 18.46px;
  }
`;
export const StyledImage = styled.img`
  width: 100%;
  @media only screen and (max-width: 1024px) {
    width: 70%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
    margin: 0 auto;
  }
`;
