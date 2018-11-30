const initialState = {
    /*DefaultValue*/    
    results: [],
    quizAtempted:false 

}

const reducer = (state = initialState, action ) => {
    
    if(action.type === "UPDATE_Results"){
        const newState = {...state}
        newState.results= newState.results.concat(action.payLoad)
        newState.quizAtempted = true;
        return newState;
    }
    if(action.type === "RESET_Results"){     
        const newState = initialState;
        return newState;
    }
    return state;
};

export default reducer;