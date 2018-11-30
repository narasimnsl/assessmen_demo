import React from 'react';
import Aux from '../../hoc/aux'
import {VelocityComponent} from 'velocity-react';

const q_feedback = (props) => {

function Feedbackbox(props) {
    const fbMessages = props.feedbackMessages;
    const fbTxt =  fbMessages.stat ==="cor" ? fbMessages.txt.correctFB:fbMessages.txt.incorrectFB
    return (
        <Aux>
        {fbMessages.val &&
             <VelocityComponent runOnMount animation={"slideDown"} duration={1000}>
                <div className={"feedback "+fbMessages.stat}>
                    <h4 className="titleTxt">Feedback</h4>
                    <p>{fbTxt}</p>
                    <center>
                    <button className="submitButton" onClick={props.nextFnc}>Next</button> 
                    </center>
                
                </div>
             </VelocityComponent>
        }
        </Aux>
    );
}

  return (
   
        <Feedbackbox feedbackMessages={props.stat} nextFnc={props.next}/>
   

  )
}

export default q_feedback;