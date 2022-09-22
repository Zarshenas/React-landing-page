import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import styles from './Footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook ,faInstagram , faTwitter , faTelegram} from "@fortawesome/free-brands-svg-icons";
import logo from '../Images/Logo.png';
class Footer extends Component {
    render() {
        return ReactDOM.createPortal(
            <section className={`${styles.footerCon} container`}>
                <ul className={styles.listCon}>
                    <li><img src={logo} alt='logo'/></li>
                    <li><a href="tel:999-555-1234">999-555-1234</a></li>
                    <li><a href="mailto:ali.zarshenas.2018@gmail.com">ali.zarshenas.2018@gmail.com</a></li>
                    <li><p>855 road, broklyn street <br/> new york 600</p></li>
                </ul>
                <ul className={styles.listCon}>
                    <li><h1>Explore</h1></li>
                    <li><a href="# ">About</a></li>
                    <li><a href="# ">Our Team</a></li>
                    <li><a href="# ">Features</a></li>
                    <li><a href="# ">Blog</a></li>
                    <li><a href="# ">How It Works</a></li>
                </ul>
                <ul className={styles.listCon}>
                    <li><h1>Services</h1></li>
                    <li><a href="# ">Speed Optimization</a></li>
                    <li><a href="# ">Marketing Analysis</a></li>
                    <li><a href="# ">SEO and Backlinks</a></li>
                    <li><a href="# ">Content Marketing</a></li>
                </ul>
                <ul className={styles.listCon}>
                    <li><h1>Links</h1></li>
                    <li><a href="# ">Help</a></li>
                    <li><a href="# ">Support</a></li>
                    <li><a href="# ">Clients</a></li>
                    <li><a href="# ">Contact</a></li>
                </ul>
                <div className={styles.socialCon}>
                    <a href="# " style={{color:"#4267B2"}}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a href="# " style={{color:"#E1306C"}}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    <a href="# " style={{color:"#1DA1F2"}}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a href="# " style={{color:"#1DA1F2"}}  ><FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon></a>
                </div>
            </section>
        ,document.getElementById("footer"));
    }
}

export default Footer;
