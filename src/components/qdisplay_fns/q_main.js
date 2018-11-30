import React from 'react';
import QuestionCount from './q_count';
import Question from './q_text';
import AnswerOption from './q_answer';
import Feedback from '../qdisplay_fns/q_feedback';
import {VelocityComponent} from 'velocity-react';

const q_main = (props) => {

  function renderAnswerOptions(list) {
    return (
      <AnswerOption
        key= {list.id}
        id={list.id}
        answerCorrect = {list.isCorrect}
        answerContent={list.content}
        onAnswerSelected={props.onAnswerSelected}
        lockChoices = {props.lockAnswer}
        userAnswer = {props.selectedAnswer}
      />
    );
  }
  
  return (
    
      <div  key={props.questionId} className="quiz">
        <VelocityComponent runOnMount animation={"slideDown"} duration={1000}>
          <div>
            <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            />
            <Question content={props.question} />
            <ul className="answerOptionsUL">
              {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <Feedback stat={props.feedbackStat} next={props.feedbackNextHandler}></Feedback>
          </div>
          </VelocityComponent>
        </div>
       

  )
}


export default q_main;