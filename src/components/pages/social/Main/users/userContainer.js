import React, {Component} from 'react';
import Users from "./users";
import {followUser, getUsersThunk, isFollowed} from "../../../../../redux/reducers/userReducer";
import {connect} from "react-redux";


class UserContainer extends Component {

    componentDidMount() {
        this.getUserPage()

    }


    getUserPage = (page) => {
        this.props.getUsersThunk(this.props.count, page && page)
    }

    onBtnClick = (id) => {
        this.props.followUser(id)
    }

    render() {
        return (
            <div>
                <Users
                    onBtnClick={this.onBtnClick}
                    getUsers={this.getUserPage}
                    pageCount={this.props.pageCount}
                    {...this.props}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        loading: state.usersPage.isLoading,
        totalCount: state.usersPage.totalCount,
        followed: state.usersPage.users && state.usersPage.users.followed,
        count: state.usersPage.count,
        pageCount: state.usersPage.pageCount
    }
}

const mapDispatchToProps = () => ({

    isFollowed,
    followUser,
    getUsersThunk
})

export default connect(mapStateToProps, mapDispatchToProps())(UserContainer)