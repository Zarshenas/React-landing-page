import React, { Component } from 'react';
import styles from './Interaction.module.css';
import intractionImage from '../Images/Intractin.png';

class Interaction extends Component {
    render() {
        return (
            <section className={` ${styles.intractionSection} flexcolumn ${styles.container}`}>
                <div className={styles.intractionImageCon}><img className={styles.intractionImage} src={intractionImage} alt="" /></div>
                <div className={styles.intractionDescriptionCon}>
                    <h1> Interact with <span>Customers</span> on Single Platform.</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem Ipsum is simply dummy text of the printing laborum perspiciatis unde.</p>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit lorem ipsum anim id est.</p>
                    <a className={`${styles.startBtn} btnTheme`} href="# "><span>Get Started</span></a>
                </div>
            </section>
        );
    }
}

export default Interaction;