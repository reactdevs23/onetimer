import styled from "styled-components";

export const ColaborationContainer = styled.div`
  position: relative;
  @media only screen and (max-width: 767px) {
    padding-top: 140px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  min-height: 380px;
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
export const TextContainer = styled.div`
  position: absolute;
  width: 90%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;
