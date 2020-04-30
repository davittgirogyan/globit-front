import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './WithAnimate.css';


const WithHeaderAndAnimate = (Component)=>{

     const WithComponent =  (props)=>{
        const [animate,setAnimate]= useState(false);
        useEffect(()=>{
            setAnimate(true);
            return()=>{
                setAnimate(false)
            }
        },[])

        return( 
            <>
                <Header/>
                <div className="section" style={{height: "937px",paddingTop:"70px",overflow:'hidden'}}>
                <TransitionGroup component={null}>
                    {animate && 
                    <CSSTransition classNames="clients" timeout={3000}>
                    <div className="clients--overlay" >
                        <div>
                            <Component {...props} />
                        </div>
                    </div>
                    </CSSTransition>
                    }
                </TransitionGroup>
                </div>
            </>
            )
        }
        return WithComponent;
}

export default WithHeaderAndAnimate;