import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../images/My_Notepad_screenshot.svg';
import '../../styles/Creations.css';

function Creations() {
	return (
		<>
		<div id='myCreationsCarousel'>
			<h4>My Creations</h4>
			<Carousel>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100'
						src={weatherNowScreenshot}
						alt='weather now web application screenshot'
					/>
					<Carousel.Caption>
						<div
							style={{
								backgroundColor: 'rgba(128, 128, 128, 0.5)',
								borderRadius: '20',
							}}>
							<h3>WEATHERNOW.</h3>
							<p>A sleek, easy to use weather application.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100'
						src={myNotepadScreenshot}
						alt='my notepad web application screenshot'
					/>
					<Carousel.Caption>
						<div
							style={{
								backgroundColor: 'rgba(128, 128, 128, 0.5)',
								borderRadius: '20',
							}}>
							<h3>My Notepad</h3>
							<p>A simple note taking application.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100'
						src={recipeMeScreenshot}
						alt='my notepad web application screenshot'
					/>
					<Carousel.Caption>
						<div
							style={{
								backgroundColor: 'rgba(128, 128, 128, 0.5)',
								borderRadius: '10%',
							}}>
							<h3>RecipeMe</h3>
							<p>A customizable, web-based recipe book.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
		</>
	);
}

export default Creations;
