import React from 'react';
import WithHeaderAndAnimate from '../../Hocs/WithHeaderAndAnimate';
import Loader from '../common/loader/Loader';

const About = ()=>{

    return(
        <div className="section" id="section1" data-anchor="about" style={{height: "937px"}}>
            <div className="about-text-block active" style={{opacity:"1"}}>
                <div style={{paddingLeft:"50px"}} className='img_parent_div'>
                    <Loader/>
                </div>
                <div className="about-text anim anim-medium">
                    <h1>CUSTOM WEB DESIGN, PROVEN DEVELOPMENT</h1>
                    <p>We are Studio One – your gateway to success. We craft unique user experiences using 
                        responsive website design, mobile app development and digital marketing strategy.<br/>
                        <a href="/about.html" style={{float:"left"}}>Read more</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default WithHeaderAndAnimate(About);