import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editHeaderBackgroundVideoMode,editHeaderAnimationSeconds, editHeaderAnimationDelay } from '../../store/reducers/HeaderReducer';
import Video1 from './video1/Video1';
import Video2 from './video2/Video2';



class VideoBackgorund extends Component {
    componentDidMount(){
        let pr = new Promise((resolve)=>{
            setTimeout(()=>{
                this.props.editHeaderBackgroundVideoMode(false);
                resolve(1);
            },7000)
        })
        pr.then(()=>{
            setTimeout(()=>{
                this.props.editHeaderAnimationSeconds()
                this.props.editHeaderAnimationDelay()
            },2000)
        })

    }
    render(){
        return(
            <div>
                {this.props.first?<Video1/>:<Video2/>}
            </div>
        )
    }            
}

let mapStateToProps = (state)=>({
    first:state.header.backgroundVideoMode
})

export default connect(mapStateToProps,{editHeaderBackgroundVideoMode,editHeaderAnimationSeconds,editHeaderAnimationDelay})(VideoBackgorund);