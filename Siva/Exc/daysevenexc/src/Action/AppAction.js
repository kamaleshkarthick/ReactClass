
import axios from 'axios';

export const increment = () => async dispatch => {
    console.log("You can Perform INC operation")
    return dispatch({
        type: "INCREMENT",
        payload: null
    })
}

export const decrement = () => async dispatch => {

    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => {
            console.log(response)
            //   if (response.status === 200) {
            //     this.setState({ list: response.data })
            //   }
            return dispatch({
                type: "DECREMENT",
                payload: response.data
            })
        }).catch(function (error) {
            // handle error
            console.log(error);
        })


}