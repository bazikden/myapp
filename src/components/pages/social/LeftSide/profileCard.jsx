import React from 'react'

export const ProfileCard = ({friends,logined,loginedUser}) => {

    return (
        <div className='profile-card'>
            <img
                src={loginedUser && loginedUser.photos?loginedUser.photos.small:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjyRYvuZhMSWJNX-lMIQxeLLAFi1ZP4a5i4SMvTHtHtszhAtzlg"}
                alt=""/>
            <div className="profile-card-block">
                <div>{loginedUser?loginedUser.fullName:'Full Name'}</div>
                <div>friends:{logined?friends.length:0}</div>
            </div>
        </div>
    )
}