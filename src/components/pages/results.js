import React, {Component}from 'react'
import Aux from '../../hoc/aux'
import Image_1 from "../../images/assessment-icon-png-10.png";
import{connect} from 'react-redux';
import { withRouter } from "react-router";
import Conditional from '../../hoc/conditional'

class Results extends Component{

    state = {
        showCorrectFB:false,
        percentage:0
   }

   

   componentDidMount() {
        if(!this.props.resultVal.quizAtempted){  
            this.props.history.push("/");
            return;  
        }
        window.scrollTo(0,0);
        let res_arr = this.props.resultVal.results
        let corCount=0;
        for(let i=0;i<=res_arr.length;i++){
            if(res_arr[i]==="cor"){
                corCount++
            }
        }
        let curPercent = Math.ceil(corCount/res_arr.length*100)
            this.setState({percentage:curPercent})
        if(curPercent >= 75){
            this.setState({showCorrectFB:true})

        }
    }
    
    retryBtnHandler = () => {
        this.props.history.push("/questions"); 
    }
    
    render(){
        
        let fbInfo= this.state.showCorrectFB
        
        
        return(
        <Aux>
            <div className="leftCol">
                 <h2>Results</h2>
                 <p><strong>Your Score is: {this.state.percentage}%</strong></p>
                 <Conditional if={fbInfo}>
                    <p>Well done you have Passed the Assessment.</p>
                </Conditional>
                <Conditional if={!fbInfo}>
                <p>Unfortunately you did not pass as you must get atleast 75% or above.</p>
                <center>
                <button className="submitButton" onClick={this.retryBtnHandler}>RETRY</button>
                </center>
                
                </Conditional>
                
            </div>
            <div className="rightCol">
                <img src={Image_1} alt="Assessment Results"/>
            </div>
        </Aux>
        )

    }
    
}



const mapStateToProps = (state) =>{
    return{
        resultVal:state
        
    }
}

export default withRouter(connect(mapStateToProps)(Results)); 