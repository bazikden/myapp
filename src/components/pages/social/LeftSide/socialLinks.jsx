import React from 'react'
import {NavLink} from "react-router-dom";
import {SocialLink} from "./link";

export const SocialLinks = ({logined}) => {
    const links =[
        {name:'profile'},
        // {name:'messages'},
        {name:'users'},
        {name:'friends'},
        {name:'video'},
        // {name:'settings'},
    ]
    return (
        <nav>
            {
                links.map((e,i) =>(
                    <SocialLink key={e.name +i} link={e.name}/>
                ))
            }


            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/login' className='social-links'>{logined?'Log Out':'Login'}</NavLink>
            </div>
        </nav>
    )
}