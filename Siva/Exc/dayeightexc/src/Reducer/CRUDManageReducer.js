const initiaState = {
    menuList:[],
    selectedMenu:null
    // modelOpen: false,
    // formValue: {
    //     menuName: '',
    //     menuCat: ''
    // },
    // targetID: null,
    // action: "C"


};

function CRUDManageReducer(state = initiaState, action) {
    switch (action.type) {

        case 'FETCH_MENU_LIST_SUCESS':
            return {
                ...state,
                menuList:action.payload.meals
            }
        case "CREATE_NEW_MENU":
            let _menulist  = [...state.menuList]
            _menulist.push(action.payload)
            return {
                ...state,
                menuList: _menulist
            }
        case "SET_SELECTED_DATA":
            return {
                ...state,
                selectedMenu: action.payload
            }
        case "UPDATE_MENU":
            let _ml = [...state.menuList]
            let index = _ml.findIndex(el => el.idMeal === action.payload.id);
            _ml[index].strCategory =action.payload.data.strCategory;
            _ml[index].strMeal =action.payload.data.strMeal;
            return {
                ...state,
                menuList: _ml,
                selectedMenu:null
            }
        default:
            return state;
    }
};
export default CRUDManageReducer;