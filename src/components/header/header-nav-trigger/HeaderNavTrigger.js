import React from 'react';


const HeaderNavTrigger = (props)=>{
    return(
        <div id="nav-trigger" onClick={()=>{props.editHeaderMobileMenuOpened()}} >
            <span></span>
        </div>
    )
}

export default HeaderNavTrigger;