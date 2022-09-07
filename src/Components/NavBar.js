import React, { Component } from 'react';
import styles from './NavBar.module.css';
import logo from '../Images/Logo.png';
import styled from 'styled-components';

const Hamburger =styled.div`
    z-index: 49;
    @media (min-width:1200px) {
        display: none;
    }
    div{
        width: 28px;
        height: 4px;
        background-color:#000;
        margin: 3px;
        border-radius: 10px;
        transition: all 0.35s ease-in-out;
        transform-origin: 4px;
        &:nth-child(1) {
            transform:${props => (props.isMenuOpen?`rotate(45deg)`: `rotate(0deg)`)};
        }
        &:nth-child(2) {
            transform:${props => (props.isMenuOpen?`translateX(-30px)`: `translateX(0px)`)};
            opacity:${props => (props.isMenuOpen?`0`: `1`)};
        }
        &:nth-child(3) {
            transform:${props => (props.isMenuOpen?`rotate(-45deg)`: `rotate(0deg)`)};
        }
    }
    
`
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
        }),()=>{
            console.log(this.state.isMenuOpen)
        })
    }
    render() {
        return (
            <nav>
                <div className={`${styles.Navigationbar} ${styles.flex} ${styles.container}`}>
                    <div className={styles.logoContainer}>
                        <img className={`${styles.logoImg} ${styles.cursor}`} src={logo} alt="logo" />
                    </div>
                    <div id={styles.id} className={`${this.state.isMenuOpen ? styles.listBtnContainerShow : styles.noneDisplay} ${styles.flexcolumn}`}>
                        <ul className={`${styles.unoOrderdList} ${styles.flexcolumn}`}>
                            <li><a href="# ">Home</a></li>
                            <li><a href="# ">Features</a></li>
                            <li><a href="# ">Video</a></li>
                            <li><a href="# ">Pricing</a></li>
                            <li><a href="# ">App Screenshots</a></li>
                            <li><a href="# ">News</a></li>
                        </ul>
                        <a href='# ' className={styles.loginBtn}>Login</a>
                    </div>
                    <Hamburger onClick={this.menueHandler} isMenuOpen={this.state.isMenuOpen} >
                            <div></div>
                            <div></div>
                            <div></div>
                    </Hamburger>
                </div>
            </nav>
        );
    }
}
export default NavBar;