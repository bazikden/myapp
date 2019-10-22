import {profileAPI} from "../../components/pages/social/api/profileApi";

const ADD_POST = "ADD_POST"
const GET_USER_PROFILE = "GET_USER_PROFILE"
const GET_USER_STATUS = "GET_USER_STATUS"

let initialState = {
    posts: []
}

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            debugger
            return {
                ...state,
                posts: [...state.posts, {id: 1, name: "Denis", likes: 5, post: action.post}]
            }

        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }

        case GET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }

        default:
            return state
    }

}


export const getUserProfileAC = (profile) => ({type: GET_USER_PROFILE, profile})

export const getUserStatus = (status) => ({type: GET_USER_STATUS, status})

export const addPost = (post) => ({type: ADD_POST, post})

export const getUserProfile = (profile) => async dispatch => {
    dispatch(getUserProfileAC(profile))
    const status = await profileAPI.getUserStatus(profile.userId)
    status.status === 200 && dispatch(getUserStatus(status.data))
}