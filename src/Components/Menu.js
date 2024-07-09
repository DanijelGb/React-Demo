import styles from './Card.module.css'

import React, { useRef } from 'react';

export default function Menu() {
    // Create refs for the sections
    const startRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    // Scroll handler
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <ul className={styles.menu}>
                <li>
                    <a href="#start" onClick={(e) => { e.preventDefault(); scrollToRef(startRef); }}>
                        Start
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToRef(aboutRef); }}>
                        Om mig
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToRef(contactRef); }}>
                        Contact
                    </a>
                </li>
            </ul>

            <div>
                <section id="start" ref={startRef} style={{ height: '90vh'}}>
                </section>
                <section id="about" ref={aboutRef} style={{ height: '100vh'}}>
                </section>
                <section id="contact" ref={contactRef} style={{ height: '100vh'}}>
                </section>
            </div>
        </>
    );
}
