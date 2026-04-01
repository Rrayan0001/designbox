"use client";

import { MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-bottom footer-bottom--compact">
                {/* Column 1: Location */}
                <div className="footer-col">
                    <span className="footer-label footer-label--icon">
                        <MapPin size={14} className="footer-icon" />
                        Location
                    </span>
                    <p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Opposite+SBI+ATM+APMC+2nd+gate+Tavargera+Main+Road+Kanakagiri+-+583283"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Opposite SBI ATM, APMC 2nd gate,<br />
                            Tavargera Main Road,<br />
                            Kanakagiri - 583283
                        </a>
                    </p>
                </div>

                {/* Column 2: Contact */}
                <div className="footer-col">
                    <span className="footer-label">Contact</span>
                    <ul className="footer-socials">
                        <li><a href="tel:8147646711"><Phone size={18} /> 8147646711</a></li>
                        <li><a href="tel:9535528283"><Phone size={18} /> 9535528283</a></li>
                    </ul>
                </div>

                {/* Column 3: Logo + Copyright */}
                <div className="footer-col footer-col--brand">
                    <div className="footer-brand">
                        <span className="footer-brand-name">
                            <span className="footer-brand-design">design</span>boxx<br />
                            <span className="footer-brand-studios">— studios —</span>
                        </span>
                    </div>
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Design Boxx Studios.<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
