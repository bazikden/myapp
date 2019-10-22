import React from 'react'
import RightSideUser from "./RightSideUser/RightSideUser";
import {connect} from "react-redux";
import {addUsers, followUser} from "../../../../redux/reducers/userReducer";

 const RightSide = ({users,logined,followUser}) =>{
    return(
        <div className='right-side'>

            <div className='right-side-user-container'>
                <h2 className='right-side-title'>Who to Follow</h2>
                {   logined?
                    users && users.map(user =>(
                        <RightSideUser  key={user.id}user={user} isFollowed={followUser} />
                    ))
                    :
                    <p style={{textAlign:'center'}}>Please login to see followers</p>
                }

            </div>



        </div>
    )
}
const mapStateToProps = state => ({
    users:state.usersPage.users,
    logined:state.auth.logined,

})
export default connect(mapStateToProps,{addUsers,followUser}) (RightSide)