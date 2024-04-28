import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS Modules
import { Typography } from '@mui/material';
import { Link, usePage } from '@inertiajs/react'


const Navbar = () => {
    // State for managing dropdown visibility∏
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            {/* Brand logo */}
            <div className={styles.navbarBrand}>
                <img src="/assets/img/CatLogo-2.svg" />
            </div>

            {/* Links */}
            <div className={styles.navbarLinks}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>

            {/* Dropdown menu */}
            <div className={styles.dropdown}>
                <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                    Menu
                </button>
                {dropdownOpen && (
                    <div className={`${styles.dropdownMenu} ${styles.dropdownMenuActive}`}>
                        <a href="/profile">Profile</a>
                        <a href="/settings">Settings</a>
                        <a href="/logout">Logout</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
