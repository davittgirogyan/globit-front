import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import Slide from './Slide';

const TrainingSlider = (props)=>{
    const BulletComponent = ({onClick, isActive}) => (
		<li
			style={{
				width: '15px',
				height: '15px',
				backgroundColor: '#459153',
				margin: '0 2px',
                opacity: isActive && '0.5',
                borderRadius: '50%'

			}}
			onClick={onClick}
		/>
    );
	const ArrowComponent = ({onClick, direction}) => {
		return (
			<div
				style={{
					border: '1px solid black',
					padding: '1em',
					backgroundColor: 'white'
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
    };
    
    return(
        <Slider 
			auto={5000}
            activeIndex={0} 
            hasBullets 
            BulletComponent={BulletComponent}
            ArrowComponent={ArrowComponent}
            >
				{props.slider.map((e)=>{
					return <Slide key={e.nameArm} {...e} />
				})}
            
        </Slider>
)
}
export default TrainingSlider;