import styled from "styled-components";

export const NotDoingAloneWrapper = styled.div`
  /* background: url("/tm.png");
  background-repeat: no-repeat;
  background-position: center !important;
  background-size: cover; */
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  object-position: center;
`;
export const TitleContainer = styled.div`
  padding: 15px 0;
`;
export const Logo = styled.img`
  margin: 0 auto;
  display: block;
  width: 240px;
  @media only screen and (max-width: 1024px) {
    width: 205px;
  }
  @media only screen and (max-width: 575px) {
    width: 144px;
  }
`;
