import React, { Component } from 'react';
import styles from './Banner.module.css';
import BannerImage from '../Images/Banner Image.png';

class Banner extends Component {
    render() {
        return (
            <section className={styles.introduceSection}>
                <span id={styles.greenBubble}></span>
                <span id={styles.purpleBubble}></span>
                <span id={styles.orangeBubble}></span>
                <span id={styles.pinkBubble}></span>
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