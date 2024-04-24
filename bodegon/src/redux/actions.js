import axios from 'axios'

export const GET_FOOD = 'GET_FOOD'
export const GET_CATEGORY = 'GET_CATEGORY'
export const RANDOM_FOOD = 'RANDOM_FOOD'

const URL_FOOD = 'api/food/'
const URL_CATEGORY = 'api/category/'

export const getFood = () => {
    return async function (dispatch) {
        const serverData = await axios.get(`${URL_FOOD}`)
        const data = serverData.data
        dispatch({type: GET_FOOD, payload: data})
    }
}

export const getCategory = () => {
    return async function (dispatch) {
        const {data} = await axios(`${URL_CATEGORY}`)
        dispatch({type: GET_CATEGORY, payload: data})
    }
}

export const randomFood = () => {
    return function (dispatch) {
        dispatch({type: RANDOM_FOOD})
    }
}