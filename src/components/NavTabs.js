import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
	return (
		<nav
			class='navbar navbar-dark navbar-expand-md sticky-top py-3'
			id='mainNav'>
			<div class='container'>
				<a
					class='navbar-brand d-flex align-items-center'
					href='/'></a>
				<button
					data-bs-toggle='collapse'
					class='navbar-toggler'>
					<span class='visually-hidden'>Toggle navigation</span>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div
					class='collapse navbar-collapse'
					id='navcol-1'>
					<ul className='navbar-nav mx-auto'>
						<li className='nav-item'>
							<a
								href='#home'
								onClick={handlePageChange('Home')}
								className={
									currentPage === 'Home' ? 'nav-link active' : 'nav-link'
								}>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#creations'
								onClick={handlePageChange('Creations')}
								className={
									currentPage === 'Creations' ? 'nav-link active' : 'nav-link'
								}>
								Creations
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#Contact'
								onClick={handlePageChange('Contact')}
								className={
									currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
								}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavTabs;
