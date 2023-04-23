import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='navbar-nav mx-auto'>
      <li className='nav-item'>
        <a
          href="#home"
          onClick={() = handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
      </li>
      <li className='nav-item'>
        <a
        href='#creations'
        onClick={() = handlePageChange('Creations')}
        className={currentPage === 'Creations' ? 'nav-link active' : 'nav-link'}
        >
          Creations
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Contact'
          onClick={() = handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
      </li>
    </ul>
  )
}