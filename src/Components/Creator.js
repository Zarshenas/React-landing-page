import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './Creator.module.css';

class Creator extends Component {
    render() {
        return ReactDom.createPortal(
            <div className={styles.creatorCon}>
                <h6>Made with <span>♥</span> by <strong><span>S</span>iza</strong></h6>
            </div>
        ,document.getElementById("footer"));
    }
}

export default Creator;
