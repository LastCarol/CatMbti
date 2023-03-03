import React from "react";
import styled from "styled-components";
import { Button, ProgressBar } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  console.log(totalScore);

  const handleClickButtonA = (n) => {
    setQuestionNo(questionNo + 1);
  };

  const handleClickButtonB = (n) => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButtonA(1)}
          style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButtonB(0)}
          style={{
            marginLeft: "20px",
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
    height = 100vh;
    width = 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  font-family: "MaplestoryLight";
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items = center;
  justify-content: center;
  font-family: "MaplestoryLight";

`;
