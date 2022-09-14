import React, { Component } from 'react';
import styles from './ProvidedTools.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import toolImage from '../Images/tools.png'
class ProvidedTools extends Component {
    render() {
        return (
            <section className={` ${styles.toolsSection} flexcolumn container`}>
                <div className={styles.toolsImageCon}><img className={styles.toolsImage} src={toolImage} alt="" /></div>
                <div className={styles.toolsDescriptionCon}>
                    <h1>Powerful <span>Tools</span> for Your Customers.</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ul className={styles.toolsList}>
                        <li> <FontAwesomeIcon icon={faCheckSquare}/> Refresing to get such a personal touch.</li>
                        <li> <FontAwesomeIcon icon={faCheckSquare}/> Duis aute irure dolor in reprehenderit in voluptate.</li>
                        <li> <FontAwesomeIcon icon={faCheckSquare}/> Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <a className={`${styles.startBtn} btnTheme`} href="# "><span>Get Started</span></a>
                </div>
            </section>
        );
    }
}

export default ProvidedTools;
