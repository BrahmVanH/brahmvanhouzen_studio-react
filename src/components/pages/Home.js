import React from "react";

export default function Home() {
  return (
		<div>
			<header className='bg-dark'>
				<div className='container pt-4 pt-xl-5'>
					<div className='row pt-5'>
						<div className='col-md-8 col-xl-6 text-center text-md-start mx-auto'>
							<div className='text-center'>
								<h1 className='fw-bold'>Welcome</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section
				className='py-5'
				id='bioContainer'>
				<p
					className='d-flex'
>
  					I'm Brahm. I'm a Full-Stack developer with a history in human
					physiology, adventure sports, and skilled trades. I aspire to draw
					from my ever expanding experience as a human on earth to bring you
					polished, responsive web applications.
				</p>
			</section>
		</div>
	);
}