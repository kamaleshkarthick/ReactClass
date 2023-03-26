export const incrementAction = () => async dispatch => {
    return dispatch({
        type:"INCREMENT",
        payload:null
    })
}

export const decrementAction = () => async dispatch => {
    return dispatch({
        type:"DECREMENT",
        payload:null
    })
}


export const updateValue = value => async dispatch => {
    return dispatch({
        type:"CALCULATOR",
        payload:value
    })
}