import styled from "styled-components";

export const GridContainer = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 120px 0;
  padding-top: 300px;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }
`;
export const ImageContainer = styled.div`
  max-width: 691px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1024px) {
    max-width: 414px;
    margin-top: 70px;
  }
  @media only screen and (max-width: 520px) {
    width: 110%;
  }
`;
export const TopImage = styled.img`
  width: 100%;
  position: absolute;
  top: -28%;
`;
export const BottomImage = styled.img`
  width: 100%;
`;
export const TextWrapper = styled.div`
  max-width: 622px;
  .text {
    padding: 10px 0;
  }
  @media only screen and (max-width: 1024px) {
    order: -1;
    max-width: 550px;
    .text {
      text-align: center;
    }
  }
`;
export const Info = styled.div`
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
`;
export const Icon = styled.img`
  width: 24px;
  margin-top: 3px;
  @media only screen and (max-width: 1024px) {
    width: 20px;
    margin-top: 1px;
  }
`;
export const AddText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin-top: 8px;
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #f9f9fb;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
