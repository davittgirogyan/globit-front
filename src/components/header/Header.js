import React, { useEffect,useState} from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { editHeaderModeMobileMode,editHeaderMobileMenuOpened } from './../../store/reducers/HeaderReducer';
import HeaderNavlist from './header-navlist/HeaderNavlist';
import HeaderNavlistMobile from './header-navlist-mobile/HeaderNavlistMobile';
import HeaderNavTrigger from './header-nav-trigger/HeaderNavTrigger';
import HeaderLogoSection from './header-logo-section/HeaderLogoSection';
import { Redirect, useLocation } from 'react-router-dom';

const Header = (props)=>{
    const {headerActive,editHeaderMobileMenuOpened,editHeaderModeMobileMode,
        headerAnimationSeconds,headerAnimationDelay,headerMenus} = props;
    const [redirect,setRedirect]= useState(false);
    let location = useLocation();
    const [path,setPath]= useState(location.pathname)
    useEffect(()=>{
        const reSize = (e)=>{
            if(e.srcElement.innerWidth>900){
                editHeaderModeMobileMode(false);
            }else{
                editHeaderModeMobileMode(true);
            }
        }
        const wheel = (e)=>{
            let paths = ['/','/about','/services','/clients','/works','/contact','/training'];
                for(let i=0;i<paths.length;i++){
                    if(e.deltaY===100 && paths[i]===path){
                        !paths[i+1]?setPath(paths[0]):setPath(paths[i+1])
                    }else if(e.deltaY===-100 && paths[i]===path ){
                        !paths[i-1]?setPath(paths[paths.length-1]):setPath(paths[i-1])
                        
                    }
                }
                setRedirect(true)
        }
        window.addEventListener("resize",reSize );
        window.addEventListener("wheel",wheel);
        return ()=>{
            window.removeEventListener("resize",reSize);
            window.removeEventListener("wheel",wheel)
        }
        
    })
    let st;
    headerActive?st='active':st="fadeIn";
    return(
        <div id="header" className={' animated '+st} style={{animationDuration:headerAnimationSeconds+"s",animationDelay:headerAnimationDelay+'s'}}>
            {redirect && <Redirect to={path}/>}

            <HeaderLogoSection headerActive={headerActive}/>
            <HeaderNavTrigger editHeaderMobileMenuOpened={editHeaderMobileMenuOpened} />
            <HeaderNavlist headerMenus={headerMenus}/>
            <HeaderNavlistMobile/>
        </div>
    )
}

let mapStateToProps =(state)=>({
    headerActive:state.header.headerActive,
    headerMobile:state.header.headerMobile,
    headerMobileMenuOpened:state.header.headerMobileMenuOpened,
    headerAnimationSeconds:state.header.headerAnimationSeconds,
    headerAnimationDelay:state.header.headerAnimationDelay,
    headerMenus:state.header.headerMenus,
})
export default connect(mapStateToProps,{editHeaderModeMobileMode,editHeaderMobileMenuOpened})(Header);