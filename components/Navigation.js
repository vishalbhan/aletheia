import React from 'react'
import NavLogo from '../components/NavLogo'

export default function Navigation() {
    return (
        <nav data-scroll>
            <div className="nav-left">
                <div className="nav-item">About Us</div>
                <div className="nav-item">Our Services</div>
                <div className="nav-item">Why Aletheia?</div>
            </div>
            <div className="nav-logo">
                <NavLogo />
            </div>
            <div className="nav-right">
                <div className="nav-item">Our Tutors</div>
                <div className="nav-item">Our Process</div>
                <div className="nav-item">Contact Us</div>
            </div>
        </nav>
    )
}
