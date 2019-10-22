import {authAPI} from "../../components/pages/social/api/authApi";
import {profileAPI} from "../../components/pages/social/api/profileApi";
import {getUserProfile} from "./profileReducer";
import {getFriendsThunk} from "./frindsReducer";


const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const LOGIN_USER_DATA = "LOGIN_USER_DATA"
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"
const REDIRECT = "REDIRECT"
const AUTH_ME = "AUTH_ME"

const initialState = {
    logined: false,
    loginedUser: null,
    redirect: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {}

        case LOGIN:
            return {
                ...state,
                logined: true,
                loginedUser: action.data,
                error: null,


            }

        case REDIRECT:
            return {
                ...state,
                redirect: !state.redirect
            }

        case  LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.error
            }

        case LOGOUT:
            return {
                ...state,
                logined: false,
                loginedUser: null

            }

        case  LOGIN_USER_DATA:
            return {
                ...state,
                loginedUserData: action.data
            }

        default:
            return state
    }

}

export const redirect = () => ({type: REDIRECT})

export const loginUser = (data) => ({type: LOGIN, data})

export const loginUserError = error => ({type: LOGIN_USER_ERROR, error})

export const loginUserData = (data) => ({type: LOGIN_USER_DATA, data})

export const logOutUser = () => ({type: LOGOUT})

export const authMe = () => async dispatch => {
    let res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        let loginUserGetData = await profileAPI.getUserProfile(res.data.data.id)
        dispatch(loginUser(loginUserGetData.data))
        dispatch(loginUserData(loginUserGetData.data))
        dispatch(getFriendsThunk())
        dispatch(getUserProfile(loginUserGetData.data))
    }


}

export const loginUserThunk = (formData) => async dispatch => {
    let loginData = await authAPI.login(formData)
    if (loginData.data.resultCode === 0) {
        let authData = await authAPI.authMe()
        dispatch(loginUser(authData.data.data))
        let loginUserGetData = await profileAPI.getUserProfile(authData.data.data.id)
        dispatch(getUserProfile(loginUserGetData))
        dispatch(loginUserData(loginUserGetData.data))
        dispatch(getFriendsThunk())
        dispatch(getUserProfile(loginUserGetData.data))

    } else dispatch(loginUserError(loginData.data.messages[0]))
}


