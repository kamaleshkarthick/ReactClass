
import axios from "axios"

export const fetchMenulist = () => async dispatch => {

    // return dispatch({
    //     type: "FETCH_MENU_LIST",
    //     payload: response.data
    // })

    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => {
            return dispatch({
                type: "FETCH_MENU_LIST_SUCESS",
                payload: response.data
            })
        }).catch(function (error) {
            return dispatch({
                type: "FETCH_MENU_LIST_FAILED",
                payload: error
            })
        })

}


export const createMenuList = (data) => async dispatch => {
    return dispatch({
        type: "CREATE_NEW_MENU",
        payload: data
    })
}

export const updateMenuList = (id, data) => async dispatch => {
    return dispatch({
        type: "UPDATE_MENU",
        payload: { id, data }
    })
}

export const setSelectedMenu = data => async dispatch => {
    return dispatch({
        type: "SET_SELECTED_DATA",
        payload: data || null
    })
}