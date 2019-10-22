import {instance} from './instance'


export const profileAPI = {
    getUserProfile:(id = 1069) =>{
        return instance.get(`profile/${id}`)
    },
    getUserStatus:(id) => instance.get(`profile/status/${id}`),
    setUserStatus:(status) => instance.put('profile/status',{status}),
    setUserPhoto:(data) => instance.put('profile/photo',data,{headers:{'Content-Type':'multipart/form-data'}})
}

