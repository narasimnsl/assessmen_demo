import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const q_answer = (props) => {
  
  let check_elem = '';
  let listClass = props.lockChoices ? "radioCustomLabel disabled":"radioCustomLabel"
  if(props.userAnswer.choice === props.id ){
    listClass = "radioCustomLabel disabled checked_"+props.userAnswer.answer;
    let ckClass = "checkInd "+props.userAnswer.answer;
    let ckIcon =  props.userAnswer.answer=="incor" ? "times-circle":"check-circle"
    check_elem = <FontAwesomeIcon className ={ckClass} icon={ckIcon} />
  }
  
  return (
    <li className='answerOption'>
    <label className={listClass} htmlFor={props.answerType}>
    
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      id={props.id}
      value={props.answerCorrect}
      onChange={props.onAnswerSelected}
      checked={false}
      disabled={props.lockChoices}
      />
      {props.answerContent}
    </label>
    {check_elem}
  </li>

  )
}

export default q_answer;