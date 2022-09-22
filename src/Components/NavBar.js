import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import styles from "./NavBar.module.css";
import logo from "../Images/Logo.png";
import styled from "styled-components";

const Hamburger = styled.div`
  cursor: pointer;
  z-index: 49;
  @media (min-width: 1200px) {
    display: none;
  }
  div {
    width: 28px;
    height: 4px;
    background-color: #000;
    margin: 3px;
    border-radius: 10px;
    transition: all 0.45s ease-in-out;
    transform-origin: 4px;
    &:nth-child(1) {
      transform: ${(props) =>
        props.isMenuOpen ? `rotate(45deg)` : `rotate(0deg)`};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.isMenuOpen ? `translateX(-30px)` : `translateX(0px)`};
      opacity: ${(props) => (props.isMenuOpen ? `0` : `1`)};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.isMenuOpen ? `rotate(-45deg)` : `rotate(0deg)`};
    }
  }
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isMenuOpen: false,
    };
  }

  componentDidMount = () => {
    document.addEventListener("scroll", this.documentScrolling);
  };
  documentScrolling = () => {
    if (window.scrollY >= 80) {
      this.myRef.current.className = `${styles.stickyNav}`;
      if (window.scrollY >= 90) {
        this.myRef.current.className = `${styles.stickyNav}`;
      }
    } else {
      this.myRef.current.className = "";
    }
  };
  menueHandler = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };
  render() {
    
    return ReactDOM.createPortal(
      <header>
        <nav ref={this.myRef}>
          <div
            className={`${styles.Navigationbar} flex container`}
          >
            <div className={styles.logoContainer}>
              <img
                className={`${styles.logoImg} cursor`}
                src={logo}
                alt="logo"
              />
            </div>
            <div
              id={styles.listBtnContainer}
              className={`${
                this.state.isMenuOpen
                  ? styles.listBtnContainerShow
                  : styles.noneDisplay
              } flexcolumn`}
            >
              <ul className={`${styles.unoOrderdList} flexcolumn`}>
                <li>
                  <a href="# ">Home</a>
                </li>
                <li>
                  <a href="#features ">Features</a>
                </li>
                <li>
                  <a href="#video ">Video</a>
                </li>
                <li>
                  <a href="#pricing ">Pricing</a>
                </li>
                <li>
                  <a href="#app ">App Screenshots</a>
                </li>
                <li>
                  <a href="#subscribe ">Subscribe</a>
                </li>
              </ul>
              <a
                href="# "
                onClick={this.mmd}
                className={`${styles.loginBtn} btnTheme`}
              >
                <span>Login</span>
              </a>
            </div>
            <Hamburger
              onClick={this.menueHandler}
              isMenuOpen={this.state.isMenuOpen}
            >
              <div></div>
              <div></div>
              <div></div>
            </Hamburger>
          </div>
        </nav>
      </header>
     , document.getElementById("navbar"));
  }
}
export default NavBar;
