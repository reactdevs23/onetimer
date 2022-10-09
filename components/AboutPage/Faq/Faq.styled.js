import styled from "styled-components";
export const FaqWrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  gap: 30px;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const FaqContainer = styled.div`
  background: #cfcfcf;
`;
export const Id = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: #b869f7;
  margin-right: 40px;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`;
export const IdAndQuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;
export const QustionAndAnswer = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #191919;
  width: 100%;
`;
export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 100%;
`;

export const Question = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 122%;
  color: #191919;
  width: 90%;
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 20px;
    width: 92%;
  }
`;
export const StyledAnswer = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #191919;
  padding: 12px 0;
  margin-right: 60px;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
export const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #b861fd;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    width: 36px;
    height: 36px;
  }
  @media only screen and (max-width: 575px) {
    width: 30px;
    height: 30px;
    margin-left: 0px;
  }
`;
export const Icon = styled.img`
  @media only screen and (max-width: 1024px) {
    width: 18px;
  }
  @media only screen and (max-width: 575px) {
    width: 16px;
  }
`;
export const List = styled.div`
  padding-left: 40px;
  @media only screena and (max-width: 1024px) {
    font-size: 24px;
    padding-left: 35px;
  }
  @media only screena and (max-width: 575px) {
    font-size: 24px;
    padding-left: 20px;
  }
`;
