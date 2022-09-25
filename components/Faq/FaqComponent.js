import React, { useState } from "react";

import {
  Id,
  IdAndQuestionWrapper,
  QuestionWrapper,
  Question,
  IconContainer,
  Icon,
  QustionAndAnswer,
  List,
  StyledAnswer,
} from "./Faq.styled";
const FaqComponents = ({ id, question, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <IdAndQuestionWrapper>
        <Id>{id + 1 !== 0 && id < 10 ? `0${id + 1}` : id + 1}</Id>
        <QustionAndAnswer>
          <QuestionWrapper>
            <Question>{question}</Question>
            <IconContainer onClick={() => setToggle((prev) => !prev)}>
              <Icon src={toggle ? "/Minus.svg" : "/Add.svg"}></Icon>
            </IconContainer>
          </QuestionWrapper>

          {toggle && (
            <>
              <StyledAnswer color="#191919">{answer.text}</StyledAnswer>
              {answer.list && (
                <StyledAnswer color="#191919">
                  <List>
                    <ul>
                      {answer.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </List>
                </StyledAnswer>
              )}
            </>
          )}
        </QustionAndAnswer>
      </IdAndQuestionWrapper>
    </div>
  );
};

export default FaqComponents;
