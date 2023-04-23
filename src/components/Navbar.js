import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav>
			<ul>
				<li>
					<a
						href='#home'
						onClick={() => handlePageChange('Home')}>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a
						href='#Creations'
						onClick={() => handlePageChange('Creations')}>
						<span>Creations</span>
					</a>
				</li>
				<li>
					<a
						href='#Contact'
						onClick={() => handlePageChange('Contact')}>
						<span>Contact</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
