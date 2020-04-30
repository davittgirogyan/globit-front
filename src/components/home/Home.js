import React, { useEffect } from 'react';
import Header from '../header/Header';
import { connect } from 'react-redux';
import { editHeaderActiveMode } from '../../store/reducers/HeaderReducer';


const Home = ({editHeaderActiveMode})=>{
    useEffect(()=>{
        editHeaderActiveMode(false);
        return ()=>{
            editHeaderActiveMode(true);
        }
    },[editHeaderActiveMode])
    return(
        <div >
            <Header/>
            <div className="fp-tableCell" style={{height:"920px"}}>
                <div className="section0-text fadeIn animated quick">
                    <h1>WE ARE STUDIO ONE. WORLDWIDE WORKING INFORMATION TECHNOLOGIES CONSULTING STUDIO</h1>
                    <p>STUDIO ONE IS A MIDDLE-SIZED IT CONSULTING COMPANY WITH A FULL AND DIVERSE PROFILE IN ARMENIA. 
                        WE PROVIDE YOU FULL IT SERVICES, INCLUDING WEB DESIGN AND DEVELOPMENT, ONLINE MARKETING, 
                        IT CONSULTING, GRAPHIC DESIGN, MOBILE APPS AND SECURITY AUDIT.</p>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{editHeaderActiveMode})(Home);