import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS Modules
import { Typography } from '@mui/material';

const Navbar = () => {
    // State for managing dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={styles.navbar}> {/* Use CSS Modules class */}
            {/* Brand logo */}
            <div className={styles.navbarBrand}> {/* Use CSS Modules class */}
                <Typography variant="h3">Big purrs</Typography>
            </div>

            {/* Links */}
            <div className={styles.navbarLinks}> {/* Use CSS Modules class */}
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>

            {/* Dropdown menu */}
            <div className={styles.dropdown}> {/* Use CSS Modules class */}
                <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                    Menu
                </button>
                {dropdownOpen && (
                    <div className={`${styles.dropdownMenu} ${styles.dropdownMenuActive}`}> {/* Use CSS Modules class */}
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
