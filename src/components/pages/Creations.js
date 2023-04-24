// import React from 'react';

// function Creations() {
// 	return (
// 		<div className='container py-5'>
// 			<div className='row mb-5'>
// 				<div className='col-md-8 col-xl-6 text-center mx-auto'>
// 					<h2
// 						className='fw-bold'
// 						id='myCreations'>
// 						My Creations
// 					</h2>
// 					<p className='text-muted'>
// 						A collection of my favorite productions so far.
// 					</p>
// 				</div>
// 			</div>
// 			<div
// 				className='carousel slide'
// 				data-bs-ride='carousel'
// 				id='carousel-1'
// 				style={{ height: '600' }}>
// 				<div className='carousel-inner h-100'>
// 					<div className='carousel-item active h-100'>
// 						<img
// 							className='w-100 d-block position-absolute h-100 fit-cover'
// 							src='./assets/images/weathernow_screenshot.png'
// 							alt='WeatherNow application screenshot in portfolio slider'
// 							style={{ zIndex: '-1' }}></img>
// 						<div className='container d-flex flex-column justify-content-center h-100'>
// 							<div className='row'>
// 								<div className='col-md-6 col-xl-4 offset-md-2'>
// 									<div style={{ maxWidth: '350' }}>
// 										<h1 className='text-uppercase fw-bold'>WEATHERNOW.</h1>
// 										<p className='my-3'>
// 											A sleek, easy to use weather application.
// 										</p>
// 										<a
// 											className='btn btn-lg me-2 application-btns'
// 											role='button'
// 											href='https://brahmvanh.github.io/Weather-Forecast/#about'>
// 											Visit App
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='carousel-item h-100'>
// 						<img
// 							className='w-100 d-block position-absolute h-100 fit-cover'
// 							src='./assets/images/My_Notepad_screenshot.svg'
// 							alt='Slide Image'
// 							style={{ zIndex: '-1' }}></img>
// 						<div
// 							className='container d-flex flex-column justify-content-center h-100'
// 							style={{ color: 'black' }}>
// 							<div className='row'>
// 								<div className='col-md-6 col-xl-4 offset-md-2'>
// 									<div style={{ maxWidth: '350' }}>
// 										<h1 className='text-uppercase fw-bold'>My Notepad</h1>
// 										<p className='my-3'>
// 											A simple and easy-to-use note-taking application.
// 										</p>
// 										<a
// 											className='btn btn-lg me-2 application-btns'
// 											role='button'
// 											href='https://my-notepad.herokuapp.com/'>
// 											Visit App
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='carousel-item h-100'>
// 						<img
// 							className='w-100 d-block position-absolute h-100 fit-cover'
// 							src='./assets/images/RecipeMe_screenshot.svg'
// 							alt='Slide Image'
// 							style={{ zIndex: '-1' }}></img>
// 						<div className='container d-flex flex-column justify-content-center h-100'>
// 							<div className='row'>
// 								<div className='col-md-6 col-xl-4 offset-md-2'>
// 									<div style={{ maxWidth: '350' }}>
// 										<h1 className='text-uppercase fw-bold'>RecipeMe</h1>
// 										<p className='my-3'>
// 											A customizable, web-based recipe book.
// 										</p>
// 										<a
// 											className='btn btn-lg me-2 application-btns'
// 											role='button'
// 											href='https://quiet-forest-61314.herokuapp.com/'>
// 											Visit App
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div>
// 					<a
// 						className='carousel-control-prev'
// 						href='#carousel-1'
// 						role='button'
// 						data-bs-slide='prev'>
// 						<span className='visually-hidden'>Previous</span>
// 					</a>
// 					<a
// 						className='carousel-control-next'
// 						href='#carousel-1'
// 						role='button'
// 						data-bs-slide='next'>
// 						<span className='visually-hidden'>Next</span>
// 					</a>
// 				</div>
// 				<ol className='carousel-indicators'>
// 					<li
// 						data-bs-target='#carousel-1'
// 						data-bs-slide-to='0'
// 						className='active'></li>
// 					<li
// 						data-bs-target='#carousel-1'
// 						data-bs-slide-to='1'></li>
// 					<li
// 						data-bs-target='#carousel-1'
// 						data-bs-slide-to='2'></li>
// 				</ol>
// 			</div>
// 		</div>
// 	);
// }

// export default Creations;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../images/My_Notepad_screenshot.svg';
import '../../styles/Creations.css';

function Creations() {
	return (
		<div id="myCreationsCarousel">
			<h4>My Creations</h4>
			<Carousel>
				<Carousel.Item interval={5000}>
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
				<Carousel.Item interval={5000}>
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
				<Carousel.Item interval={5000}>
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
