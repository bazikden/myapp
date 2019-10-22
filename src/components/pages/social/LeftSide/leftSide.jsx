import React from 'react'
import {SocialChat} from "./socialChat"
import {SocialLinks} from "./socialLinks"
import {ProfileCard} from "./profileCard"
import {connect} from "react-redux";


const LeftSide = ({logined,friends,loginedUser}) => {
    return (
        <div className='left-side'>
            <div className="left-side-block">
                <ProfileCard loginedUser={loginedUser} logined ={logined} friends={friends}/>
                <SocialLinks logined={logined}/>
                <SocialChat logined ={logined} friends={friends}/>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    logined: state.auth.logined,
    loginedUser:state.auth.loginedUser,
    friends: state.friends.friends
})

export default connect(mapStateToProps)(LeftSide)