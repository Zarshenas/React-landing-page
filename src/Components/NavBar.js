import React, { Component } from 'react';
import styles from './NavBar.module.css';
import logo from '../Images/Logo.png';
import styled from 'styled-components';

class NavBar extends Component {
    constructor(){
        super()
        this.state={
            isMenuOpen:false,
        }
    }
    
    menueHandler = () => {
        this.setState(prevState => ({
            isMenuOpen : !prevState.isMenuOpen
        }))
    }
    render() {
        return (
            <nav>
                <div className={`${styles.Navigationbar} ${styles.flex} ${styles.container}`}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logoImg} src={logo} alt="logo" />
                    </div>
                    <div onClick={this.menueHandler} className={`${this.state.isMenuOpen ? styles.hamburgerMenuOpen : styles.hamburgerMenuClose}`}>
                            <div></div>
                            <div></div>
                            <div></div>
                    </div>
                    <div className={`${styles.listBtnContainer} ${styles.flex}`}>
                        <ul className={styles.unoOrderdList}>
                            <li><a href="# ">Home</a></li>
                            <li><a href="# ">Features</a></li>
                            <li><a href="# ">Video</a></li>
                            <li><a href="# ">Pricing</a></li>
                            <li><a href="# ">App Screenshots</a></li>
                            <li><a href="# ">News</a></li>
                        </ul>
                        <button>Login</button>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;