import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavlist = ({headerMenus})=>{

    return(
        <nav id="nav-main">
        <ul id="menu">
            {headerMenus.map((e)=>{
                return   <li key={e.href} >
                <NavLink to={e.href} activeClassName={'active_nav'}>
                <div className="tooltip">{e.nameEng}
                    <span className="tooltiptext">{e.nameArm}</span>
                </div>
                    <span></span>
                </NavLink>
            </li>
            })}
        </ul>
    </nav>
    )
}

export default HeaderNavlist;