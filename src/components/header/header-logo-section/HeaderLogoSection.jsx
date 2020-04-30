import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/globit_logo.png'

const HeaderLogoSection = ({headerActive})=>{
    let st;
    headerActive?st={width:"200px",marginTop:"-22px"}:st={width:"100%"}
    return(
        <div itemScope="" itemType="http://schema.org/Organization">
            <div className="logo" id="homeId">
                <NavLink to="/">
                    <img src={logo} style={st}  itemProp="image" alt="Armenian Web Design, Web Development, Graphic Design"/>
                    {/* <h1>Logo</h1> */}
                </NavLink>
                <span itemProp="name" className="dispnone">Studio One</span>
            </div>
        </div>
    )
    
}
export default HeaderLogoSection
