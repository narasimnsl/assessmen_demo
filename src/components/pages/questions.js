import React, {Component}from 'react'
import{connect} from 'react-redux';
import Aux from '../../hoc/aux';
import Image_1 from "../../images/assessment-icon-png-11.png";
import Quiz from '../qdisplay_fns/q_main'
import shuffle from '../qdisplay_fns/a_shuffle'
import quizQuestions from '../../api/quizQuestions';
import { withRouter } from "react-router";



class Question extends Component{
    
    state = {
         counter: 0,
         questionId: 1,
         question: '',
         answerOptions: [],
         showFeedback:{val:false,status:"",txt:""},
         lockChoices:false,
         userAnswerChoice:{answer:"",choice:""},
         questionList:[]
    }
    
  
    componentWillMount() {
       let newQuestionList = [...quizQuestions]
       shuffle(newQuestionList);
       newQuestionList.map(element => shuffle(element.answers));  
       this.setState({
          question: newQuestionList[0].question,
          answerOptions: newQuestionList[0].answers,
          questionList:newQuestionList
        });
        this.props.onAssessmentLoad();
      }
     
      /* Function to set Next Question */
      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        const newQuestionList = this.state.questionList;
        this.setState({
          counter: counter,
          questionId: questionId,
          question: newQuestionList[counter].question,
          answerOptions: newQuestionList[counter].answers,
          showFeedback:{val:false,status:"",txt:""},
          lockChoices:false,
          userAnswerChoice:{answer:"",choice:""}
        });
      }

      handleNextSelected() {
        if (this.state.questionId < quizQuestions.length) {
          setTimeout(() => this.setNextQuestion(), 300);
        } else {
          this.props.history.push("/results"); 
        }
      }
       /* set user Answer to store for the results page*/
       setUserAnswer(an,ch) {
        this.props.onChoiceSelected(an)
        this.setState({
          showFeedback:{val:true,stat:an,txt:quizQuestions[this.state.counter].fbTxt},
          lockChoices:true,
          userAnswerChoice:{answer:an,choice:ch}
        });
      }
      
      handleAnswerSelected(event) {
        let checAns = event.target.value;
        let checSel = event.target.id;
        this.setUserAnswer(checAns,checSel );
      }
 
      
    render(){    

        return(
        <Aux>
          
            <div className="leftCol">
                <Quiz
                  answerOptions={this.state.answerOptions}
                  questionId={this.state.questionId}
                  question={this.state.question}
                  questionTotal={quizQuestions.length}
                  lockAnswer= {this.state.lockChoices}
                  selectedAnswer = {this.state.userAnswerChoice}
                  onAnswerSelected={(event) => this.handleAnswerSelected(event)}
                  feedbackStat = {this.state.showFeedback}
                  feedbackNextHandler = {()=>this.handleNextSelected()}
                  />

            </div>
            <div className="rightCol">
                <img src={Image_1} alt="Assessment Question"/>
            </div>
        </Aux>
        )

    }
    
}


const mapDispatchToProps = dispatch => {
  return {
    onChoiceSelected: (value) =>
      dispatch({
        type: "UPDATE_Results",
        payLoad: value
      }),
      onAssessmentLoad: () =>
      dispatch({
        type: "RESET_Results",
       
      })
  };
};

export default withRouter(connect(null,mapDispatchToProps)(Question)); 