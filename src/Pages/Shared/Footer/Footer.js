import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p>&copy; {year} NS Perfumes. All Right Reserved</p>
        </div>
    );
};

export default Footer;