import React, {Component}from 'react'
import Aux from '../../hoc/aux'
import Image_1 from "../../images/assessment-icon-png-21.jpg";
import { withRouter } from "react-router";



class intro extends Component{
    

    nextBtnHandler = () => {
        this.props.history.push("/questions"); 
     }

    render(){
        

        return(
            <Aux>
                
                <div className="leftCol">
                    <h2>Introduction</h2>
                    <p>Please click <strong>START ASSESSMENT</strong> button below to answer 2 simple questions.</p>
                    <p>At the end results wil be shown and you need to get <strong>75%</strong> to pass.</p>    
                    <center>
                    <button className="submitButton" onClick={this.nextBtnHandler}>START ASSESSMENT</button>
                    </center>
                </div>
                <div className="rightCol">
                    <img src={Image_1} alt="Assessment Intro"/>
                </div>
            </Aux>
            
        )

    }
    
}




export default withRouter(intro); 