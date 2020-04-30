import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { editHeaderMobileMenuOpened } from './../../../store/reducers/HeaderReducer';
const HeaderNavlistMobile = ({headerMobileMenuOpened,editHeaderMobileMenuOpened})=>{
    let styles;
    if(headerMobileMenuOpened){
        styles={display:"block"}
    }else{
        styles={display:"none"}
    }
    return(
        <nav id="nav-mobile" >
        <ul id="menu" style={styles}  onClick={()=>{editHeaderMobileMenuOpened()}} >
            <li data-menuanchor="about" id="aboutId"><NavLink activeClassName={'active_nav'} to="/about">About</NavLink></li>
            <li data-menuanchor="services" id="servicesId"><NavLink activeClassName={'active_nav'} to="/services">Services</NavLink></li>
            <li data-menuanchor="clients" id="clientsId"><NavLink activeClassName={'active_nav'} to="/clients">Clients <span>/</span> Sectors</NavLink></li>
            <li data-menuanchor="works" id="worksId"><NavLink activeClassName={'active_nav'} to="/works">Works</NavLink></li>
            <li data-menuanchor="contact" id="contactId"><NavLink activeClassName={'active_nav'} to="/contact">Contact</NavLink></li>
            <li data-menuanchor="training" id="trainingId"><NavLink activeClassName={'active_nav'} to="/training">Training Center</NavLink></li>
        </ul>
    </nav>
    )
}

let mapStateToProps = (state)=>({
    headerMobileMenuOpened:state.header.headerMobileMenuOpened
})
export default connect(mapStateToProps,{editHeaderMobileMenuOpened})(HeaderNavlistMobile);