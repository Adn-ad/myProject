import React from "react";
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="Company Logo" />
                    <p> Our restaurant is a unique place where traditional and creative dishes from around the world come together.
        We believe in providing an unparalleled dining experience, where guests can enjoy a wonderful atmosphere and delicious dishes that cater to all tastes.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/" >Home</a></li>
                        <li><a href="/" >About</a></li>
                        <li><a href="/" >Menu</a></li>
                        <li><a href="/" >reservation</a></li>
                        <li><a href="/" >Order Online</a></li>
                        <li><a href="/" >Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <li>Address</li> <br/> 567 Sunny Street, California
                </div>
            </section>
        </footer>
    );
}

export default Footer;
