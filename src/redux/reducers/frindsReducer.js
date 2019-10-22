import {usersAPI} from "../../components/pages/social/api/usersApi";

const ADD_FRIENDS = "ADD_FRIENDS"
const NULL_FRINDS = "NULL_FRINDS"
const FOLLOW_FRIEND = "FOLLOW_FRIEND"
const UNFOLLOW_FRIEND = "UNFOLLOW_FRIEND"


let initialState = {
    friends: []
}


export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, ...action.friends.filter(f => f.followed === true)]
            }

        case NULL_FRINDS:
            return {
                friends: []
            }

        case FOLLOW_FRIEND:
            return{
                ...state,

            }

        case UNFOLLOW_FRIEND:
            return{
                ...state,
                friends:[...state.friends.filter(f=>f.id !== action.id)]
            }

        default:
            return state

    }
}



export const getFriends = (friends) => ({type: ADD_FRIENDS, friends})

export const nullFriends = () => ({type: NULL_FRINDS})

export const unfollowFriendAC = (id) =>({type:UNFOLLOW_FRIEND,id})

export const getFriendsThunk = () => async dispatch => {
    let totalCount = await usersAPI.getUsers()
    let allPAges = Math.ceil(totalCount.data.totalCount / 100)
    dispatch(nullFriends())
    let friends = []
    for (let i = 1; i <=allPAges; i++) {
        let users = await usersAPI.getUsers(100, i)
        friends = friends.concat(users.data.items.filter(f => f.followed === true))


    }
    dispatch(getFriends(friends))

}

export const followFriendAC = () =>({type:FOLLOW_FRIEND})

export const unfollowFriend = (id) => dispatch => {
    dispatch(unfollowFriendAC(id))
    usersAPI.unfollowCurrentUser(id)

}