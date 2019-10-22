import React from 'react'
import logo from '../../images/logo/logo.svg'
import {withRouter} from "react-router";
import AgencyHeaderMenu from "../../header/agencyHeaderMenu/agencyHeaderMenu";


const AgencyFooterHeader = () =>{
    return(
        <div className='agencyFooterHeader'>
            <div className='agencyFooterHeaderLogo'>
                <img src={logo} alt=""/>
            </div>
            <AgencyHeaderMenu/>
        </div>
    )
}

export default withRouter(AgencyFooterHeader)