import React, { useState } from "react";

import { StyledText, Title, StyledContainer } from "../../styles/Common.styled";
import {
  Id,
  IdAndQuestionWrapper,
  QuestionWrapper,
  Question,
  IconContainer,
  Icon,
  FaqContainer,
  FaqWrapper,
  QustionAndAnswer,
  List,
  StyledAnswer,
} from "./Faq.styled";
const Faq = () => {
  const [active, setActive] = useState(0);
  const faqArray = [
    {
      question: "What can you do with the Ark ticket?",
      answer: {
        text: "It's a free token and it does not give you immediate access to the pioneer club. But that does not mean it has no value. But there are two utilities that only the Ark key can unlock:",
        list: [
          "WL to the first moment card presale with exclusive Tier A Price",
          "Special discount in public sale of all other moment cards: 3% off per each moment card type you own.",
        ],
      },
    },
    {
      question: "Is there a lock period for the Ark key?",
      answer: {
        text: "It's a free token and it does not give you immediate access to the pioneer club. But that does not mean it has no value. But there are two utilities that only the Ark key can unlock:",
      },
    },
    {
      question: "When can I mint moment cards?",
      answer: {
        text: "It's a free token and it does not give you immediate access to the pioneer club. But that does not mean it has no value. But there are two utilities that only the Ark key can unlock:",
      },
    },
    {
      question: "Who can mint in the presale?",
      answer: {
        text: "It's a free token and it does not give you immediate access to the pioneer club. But that does not mean it has no value. But there are two utilities that only the Ark key can unlock:",
      },
    },
    {
      question:
        "What is the difference between Tier A and Tier B prices for presale?",
      answer: {
        text: "It's a free token and it does not give you immediate access to the pioneer club. But that does not mean it has no value. But there are two utilities that only the Ark key can unlock:",
      },
    },
  ];
  return (
    <FaqContainer>
      <StyledContainer>
        <FaqWrapper>
          <div>
            {faqArray.map((el, i) => (
              <div key={i}>
                <IdAndQuestionWrapper>
                  <Id>{i + 1 !== 0 && i < 10 ? `0${i + 1}` : i + 1}</Id>
                  <QustionAndAnswer>
                    <QuestionWrapper>
                      <Question>{el.question}</Question>
                      <IconContainer onClick={() => setActive(i)}>
                        <Icon
                          src={active === i ? "/Minus.svg" : "/Add.svg"}
                        ></Icon>
                      </IconContainer>
                    </QuestionWrapper>
                    {active === i && (
                      <>
                        <StyledAnswer color="#191919">
                          {el.answer.text}
                        </StyledAnswer>
                        <StyledAnswer color="#191919">
                          {" "}
                          {el.answer.list && (
                            <List>
                              <ul>
                                {el.answer.list.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </List>
                          )}
                        </StyledAnswer>
                      </>
                    )}
                  </QustionAndAnswer>
                </IdAndQuestionWrapper>
              </div>
            ))}
          </div>
          <Title color="#191919" faqTitle="48px">
            Frequently Asked Questions
          </Title>
        </FaqWrapper>
      </StyledContainer>
    </FaqContainer>
  );
};

export default Faq;
