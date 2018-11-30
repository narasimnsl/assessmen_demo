import React from 'react'
import Aux from '../../hoc/aux'



const layout = (props) => (
    <Aux>
        <div className = "moduleWrapper">
            <div className = "moduleContainer">
                <div className = "HeaderContainer">
                    <div className= "HeaderTiltle">
                        <h1>Assessment Demo</h1>
                    </div>
                </div>
                <div className="contentContainer">
                
                     {props.children}
                        
                </div>
            </div>
        
        </div>
       
    </Aux>
    

)

export default layout;