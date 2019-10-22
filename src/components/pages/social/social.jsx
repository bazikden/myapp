import React, {Component} from 'react'
import LeftSide from "./LeftSide/leftSide";
import {Main} from "./Main/main";
import RightSide from "./RightSide/rightSide";
import {connect} from "react-redux";
import {getFriendsThunk} from "../../../redux/reducers/frindsReducer";
import {getUsersThunk} from "../../../redux/reducers/userReducer";
import {authMe} from "../../../redux/reducers/authReducer";

 class Social extends Component{
    componentDidMount() {
        this.props.authMe()
        this.props.getUsersThunk()
        this.props.logined && this.props.getFriendsThunk()


    }

    render() {

        return(
            <div  className='social'>
                <LeftSide/>
                <Main/>
                <RightSide/>
            </div>
        )
    }


}

const mapStateToProps = state =>({
    logined:state.auth.logined
})

export default connect(mapStateToProps,{getUsersThunk,getFriendsThunk,authMe})(Social)