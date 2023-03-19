const initiaState = {
    errorMessage:"",
    successMessage:""
};

function NotificationRedurecer(state = initiaState, action) {
    console.log(action, "action")
    switch (action.type) {

        case 'INCREMENT':
            return {
                ...state,
                
            }
        case "DECREMENT":
            return {
                ...state,
               
            }
        default:
            return state;
    }
};
export default NotificationRedurecer;