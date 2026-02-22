"use client";

import ScrollReveal from "./ScrollReveal";
import { Instagram, Linkedin, Twitter, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-top">
                <div className="footer-col-main">
                    <ScrollReveal>
                        <h2 className="footer-heading">Let's craft your next space.</h2>
                        <a href="mailto:Dbstudios08@gmail.Com" className="footer-email">
                            Dbstudios08@gmail.Com
                        </a>
                    </ScrollReveal>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-col">
                    <span className="footer-label">Location</span>
                    <p>Opp tavargere road near SBI ATM<br />APMC kanakagiri 583283</p>
                </div>

                <div className="footer-col">
                    <span className="footer-label">Contact</span>
                    <ul className="footer-socials">
                        <li><a href="tel:8147646711"><Phone size={18} /> 8147646711</a></li>
                        <li><a href="tel:9535528283"><Phone size={18} /> 9535528283</a></li>
                    </ul>
                </div>

                <div className="footer-col footer-col-copyright">
                    <span className="footer-label">&copy; {new Date().getFullYear()}</span>
                    <p>Design Boxx Studios.<br />All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
