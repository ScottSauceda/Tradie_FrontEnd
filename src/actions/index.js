import { ADD_USER_TRADE, GET_CURRENT_USER_LOCATION , SHOW_TRADIE_MAP,  SIGN_USER_UP, GET_ERRORS, SET_CURRENT_USER, TRADE_NAME } from '../constants';
import authToken from '../utils/authToken'
import jwt from 'jwt-decode'

import { getCurrentLocation } from '../utils'
import axios from 'axios'


// this call loads the users geolocation based on their ip address
export const getUserCurrentLocation = () => dispatch => {

    getCurrentLocation()
        .then( location => {
            dispatch({
                type: GET_CURRENT_USER_LOCATION,
                payload: location
            })
        })
        .catch(err => {
            console.log(err);
        })

}

const Axios = axios.create({
    baseURL: 'http://localhost:8080', 
    timeout: 10000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});


export const createUser = (userData, history) => dispatch => {
    Axios
        .post('/users/register', userData) //*******  MAKE SURE THIS MATCH *******
        .then(res => {
            history.push('/')
            return res;
        })
        .then(user => {
            console.log('39-------')
            console.log(user)
            dispatch({
                type: SIGN_USER_UP,
                data: user
            })
        })
        .catch(err => {     
            console.log(err)       
            dispatch({
                type: GET_ERRORS,
                data: err
            })
        });

}

export const loginUser = userInfo => dispatch => {
    Axios.post('/users/login', userInfo)
    .then(res => {
        const { token } = res.data
        localStorage.setItem('jwtToken', token)
        authToken(token)
        const decode = jwt(token)
        dispatch(setCurrentUser(decode))
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })

}

export const setCurrentUser = decode => {
    return {
        type: SET_CURRENT_USER,
        payload: decode
    }
}

export const addTrade = (tradeData) => dispatch => {
    Axios
        .post('/trades/addtrade', tradeData) //*******  MAKE SURE THIS MATCH *******
        .then(trade => {
            console.log('From action addTrade')
            console.log(trade)
            dispatch({
                type: ADD_USER_TRADE,
                data: trade
            })
        })
        .catch(err => {     
            console.log(err)       
            dispatch({
                type: GET_ERRORS,
                data: err
            })
        });

}

export const fetchSelectedTradie = (trade) => dispatch => {
    Axios
    .get(`/trades/findtradies?job=${trade}`)
    .then(trade => {
        console.log('From action fetchSelectedTradie')
        console.log(trade)
        dispatch({
            type: TRADE_NAME,
            data: trade
        })
        dispatch({
            type: SHOW_TRADIE_MAP,
            payload: trade
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: GET_ERRORS,
            data: err
        })
    });
}