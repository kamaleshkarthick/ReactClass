const initiaState = {
    count: 0,
    operation: '',
    answer: '',
    currentValue: ''
};

const opr = ['+', "*", '-', "/"]

function addReducer(state = initiaState, action) {
    console.log(action)
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        case "CALCULATOR":
            let isOp = opr.find(el => el === action.payload);
            let ans = state.answer;
            let curVa = state.currentValue;
            let ope = state.operation
            if (isOp) {
                curVa = state.answer;
                ans = '';
                ope = isOp
            } else if (action.payload === "=" && state.operation.length === 1) {
                ope = '';
                ans = Number(state.currentValue) + Number(state.answer)
            } else {
                ans = `${state.answer}${action.payload}`
            }
            return {
                ...state,
                answer: ans,
                currentValue: curVa,
                operation: ope
            }
        default:
            return state;
    }
}

export default addReducer;