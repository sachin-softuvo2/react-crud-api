import axios from "axios"
import { API_URL } from "../config/config"

export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'

export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'

export const createUser = (firstName, lastName, userName, address, contactNumber) => async (dispatch) => {
    try {
        dispatch({
            type: USER_CREATE_REQUEST
        })
        let config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const { data } = await axios.get(
            API_URL + `user/enroll?fname=${firstName}&lname=${lastName}&uName=${userName}&address=${address}&contact=${contactNumber}`,
            config
        )
        dispatch({
            type: USER_CREATE_SUCCESS
        })
        alert(data.message)
    }
    catch (err) {
        alert(err.response.message)
    }
}
export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_FETCH_REQUEST
        })

        const { data } = await axios.get(
            API_URL + `admin/allUser`
        )
        dispatch({
            type: USER_FETCH_SUCCESS,
            payload: data
        })
    }
    catch (err) {
        alert(err.response.message)
    }
}
export const updateUser = (userName, lName) => async (dispatch) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })

        const { data } = await axios.get(
            API_URL + `user/modify?uName=${userName}&field=lname&value=${lName}`
        )
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: {userName, lName}
        })
        alert(data.message)
    }
    catch (err) {
        alert(err.response.message)
    }
}
export const deleteUser = (userName) => async (dispatch) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST
        })

        const { data } = await axios.get(
            API_URL + `admin/removeUser?uName=${userName}`
        )
        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: userName
        })
        alert(data.message)
    }
    catch (err) {
        alert(err.response.message)
    }
}