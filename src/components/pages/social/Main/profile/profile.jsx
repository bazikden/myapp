import React, {useEffect, useState} from 'react'
import ProfileForm from "../../../../forms/profile/profileForm";
import avatar from '../../images/avatar2.png'
import {profileAPI} from "../../api/profileApi";


const Profile = ({posts, addPost, profile, status, loginedUser,getUserProfile}) => {

    const [editMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(null)
    const [photo, setPhoto] = useState(null)
    const onFormSubmit = formData => {
        console.log(formData)
        addPost(formData.postMessage)

    }

    useEffect(() => {

        profile && setPhoto(profile.photos.small)
    }, [profile])

    useEffect(() => {
        setUserStatus(status)
    }, [status])

    const onChangeInput = (e) => {
        console.log(e.target.files[0])
        let formData = new FormData()
        formData.append("image", e.target.files[0])
        profileAPI.setUserPhoto(formData)
        console.log(profile.userId)
        profileAPI.getUserProfile(profile.userId)
            .then(res =>getUserProfile(res.data))


    }

    const setStatus = () => {
        profileAPI.setUserStatus(userStatus)
        setEditMode(false)
    }

    return (
        <div className='profile'>
            <ProfileForm onSubmit={onFormSubmit}/>
            <div className='main-social-img'></div>
            {
                profile && <div className='profile-avatar'>
                    <div className='profile-avatar-block'>
                        <img className='profile-avatar-img' src={photo ? photo : avatar} alt=""/>
                        <div className='profile-avatar-block-addimage'>
                            <input onChange={onChangeInput} type='file'/>
                            {loginedUser && profile && profile.userId === loginedUser.userId && <button>Change Image</button>}
                        </div>


                    </div>
                    <div className='profile-avatar-info'>
                        <div>Name : {profile.fullName}</div>
                        <div>Status : {editMode ?
                            <input onBlur={setStatus} style={{marginLeft: '5px'}} onClick={() => setUserStatus('')}
                                   onChange={(e) => setUserStatus(e.target.value)}
                                   value={userStatus ? userStatus : ''}/>
                            :
                            <span onClick={() => setEditMode(true)}>{userStatus ? userStatus : '----'}</span>}</div>
                        <div>About: {profile.aboutMe}</div>
                        <div>Description: {profile.lookingForAJob && profile.lookingForAJobDescription}</div>
                        <div className='profile-avatar-contacts'>Contacts:
                            <div className='profile-avatar-contacts-socials'>
                                Facebook: {profile.contacts.facebook}<br/>
                                GitHub: {profile.contacts.github}<br/>
                            </div>


                        </div>


                    </div>
                </div>

            }

            <h3><i>Posts</i></h3>
            {
                posts && posts.map(post => (
                    <div key={post}>
                        <div>Name : {post.name}</div>
                        <div>Post : {post.post}</div>
                    </div>
                ))
            }
        </div>
    )
}


export default Profile