import React from 'react'
import './Fotter.css'
export default function Fotter() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">

                    {/* Column 1: About */}
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            We are a team dedicated to building great React applications.
                            Simple, clean, and efficient code is our motto.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Location: New York, USA</p>
                    </div>
                </div>

                {/* Bottom Copyright Area */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} MyCompany Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
