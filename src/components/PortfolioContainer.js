import React, { useState } from 'react';
import NavBar from './NavBar';
import Contact from './pages/Contact';
import Creations from './pages/Creations';
import Home from './pages/Home';
import Footer from './Footer';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('Home');

	const renderPage = () => {
		if (currentPage === 'Home') {
			return <Home />;
		}
		if (currentPage === 'Creations') {
			return <Creations />;
		}
		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<NavBar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{renderPage()}
		</div>
	);
}
