import React from "react";

export default function Home() {
  return (
		<div>
			<header class='bg-dark'>
				<div class='container pt-4 pt-xl-5'>
					<div class='row pt-5'>
						<div class='col-md-8 col-xl-6 text-center text-md-start mx-auto'>
							<div class='text-center'>
								<h1 class='fw-bold'>Welcome</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section
				class='py-5'
				id='bioContainer'>
				<p
					class='d-flex'
					style='padding: 5px 5px; font-size: 1.25em'>
					I'm Brahm. I'm a Full-Stack developer with a history in human
					physiology, adventure sports, and skilled trades. I aspire to draw
					from my ever expanding experience as a human on earth to bring you
					polished, responsive web applications.
				</p>
			</section>
		</div>
	);
}