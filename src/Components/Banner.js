import React, { Component } from 'react';
import styles from './Banner.module.css';
import BannerImage from '../Images/Banner Image.png';

class Banner extends Component {
    render() {
        return (
            <section className={styles.introduceSection}>
                <div id={styles.greenBubble}></div>
                <div id={styles.purpleBubble}></div>
                <div id={styles.orangeBubble}></div>
                <div id={styles.pinkBubble}></div>
                <div className={`${styles.con} container flex`}>
                    <div className={styles.introduceTexts}>
                        <h3>We Deliver the <br/> <span>Software</span> you <br/> Need.</h3>
                        <p>We are committed to providing our customers with <br/> exceptional service while offering our employees the <br/> best training.</p>
                        <a className='btnTheme' href="# "><span>Get Started</span></a>
                    </div>
                    <div className={styles.introduceImage}>
                        <img src={BannerImage} alt="Banner" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;