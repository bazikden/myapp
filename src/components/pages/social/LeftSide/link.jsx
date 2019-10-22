import React from 'react'
import {NavLink} from "react-router-dom";

export const SocialLink = ({link})=>{


    return(
        <div className="social-links-block">
            <div className="social-links-logo">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                    alt=""/>
            </div>
            <NavLink to={`/social/${link}`} className='social-links'>{link.split('')[0].toUpperCase()+link.split('').slice(1).join('')}</NavLink>
        </div>
    )
}