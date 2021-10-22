import axios from "axios";


export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})


export const fetchPhones = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/phones?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => {
            dispatch(setPhones(data))
        })
}


export const setPhones = (items) => ({type: 'SET_PHONES', payload: items})

