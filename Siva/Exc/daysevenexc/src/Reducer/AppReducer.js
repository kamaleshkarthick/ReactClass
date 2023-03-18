const initiaState = {
    count: 0,
    operation:"ADD",
    loader:false,
    listOfMenu:[]

    
};

function addReducer(state = initiaState, action) {
    console.log(action,"action")    
    switch (action.type) {

        case 'INCREMENT':
            return {
                ...state,
                count : state.count + 1,
                operation:action.type
            }
        case "DECREMENT":
            return {
                ...state,
                count : state.count - 1,
                operation:action.type,
                listOfMenu : action.payload.meals
            }
        default:
            return state;
    }
};
export default addReducer;