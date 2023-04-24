import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../../public/images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../../public/images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../../public/images/My_Notepad_screenshot';

function Creations() {
	return (
		<div style={{ display: 'block', width: 700, padding: 30 }}>
			<h4>My Creations</h4>
			<Carousel>
				<Carousel.Item interval={1500}>
					<img
						className='d-block w-100'
						src={weatherNowScreenshot}
						alt='weather now web application screenshot'
					/>
					<Carousel.Caption>
						<h3>WEATHERNOW.</h3>
						<p>A sleek, easy to use weather application.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className='d-block w-100'
						src={myNotepadScreenshot}
						alt='my notepad web application screenshot'
					/>
					<Carousel.Caption>
						<h3>My Notepad</h3>
						<p>A simple note taking application.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className='d-block w-100'
						src={recipeMeScreenshot}
						alt='my notepad web application screenshot'
					/>
					<Carousel.Caption>
						<h3>RecipeMe</h3>
						<p>A customizable, web-based recipe book.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Creations;