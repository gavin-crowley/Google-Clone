import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../assets/google-logo.gif';
import { Search } from './Search';
import './Navbar.css';

export const Navbar = () => (
  <header>
    <img src={Logo} alt="google-logo" />
    <Search />
  </header>
);
