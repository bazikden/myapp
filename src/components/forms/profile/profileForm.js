import React from 'react'
import {Field, reduxForm} from "redux-form";
import {max, required} from "../validator";
import {TextAreaProfile} from "../login/formControl";
import {connect} from "react-redux";

const maxLength = max(100)

const Form = (props) =>{

    return(
        <form onSubmit={props.handleSubmit} className='post-message-container'>
            <img src={props.loginedUser?props.loginedUser.photos.small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjyRYvuZhMSWJNX-lMIQxeLLAFi1ZP4a5i4SMvTHtHtszhAtzlg"} alt=""/>
            <Field name="postMessage" id="post-message"
                validate={[required,maxLength]} component={TextAreaProfile}/>
            {/*<div className="post-message-logo-block">*/}
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>*/}
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>*/}
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>*/}
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>*/}
            {/*</div>*/}
            <button className='post-message-btn'>Publish</button>

        </form>

    )
}


const ProfileForm = reduxForm({form:'profile'})(Form)

const  mapStateToProps = state =>({
    loginedUser:state.auth.loginedUserData
})

export default connect(mapStateToProps)(ProfileForm)