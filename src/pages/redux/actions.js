import * as actions from './actionTypes';
import axios from 'axios';

const getUsers = (users) => ({
    type: actions.GET_USERS,
    payload: users,
})

const userDeleted = () => ({
    type: actions.DELETE_USER,
})
const userAdded = () => ({
    type: actions.ADD_USER,
})

export const loadUsers = () => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(getUsers(resp.data))
        })
        .catch(error => console.log(error))
    }
}
export const deleteUsers = (id) => {
    return function (dispatch) {
        axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(userDeleted())
            dispatch(loadUsers())
        })
        .catch(error => console.log(error))
    }
}
export const addUser = (user) => {
    return function (dispatch) {
        axios
        .post(`${process.env.REACT_APP_API}`, user)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(userAdded())
        })
        .catch(error => console.log(error))
    }
}