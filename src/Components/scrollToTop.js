import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import styles from './scrollToTop.module.css';

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
    componentDidMount = () => {
        document.addEventListener("scroll", this.documentScrolling);
      };
      documentScrolling = () => {
          if (window.scrollY >= 90) {
            this.myRef.current.className = `${styles.show}`;
        } else {
          this.myRef.current.className = `${styles.con}`;
        }
      };
      goToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    render() {
        return ReactDOM.createPortal(
            <div ref={this.myRef} className={styles.con}>
                <span onClick={this.goToTop} className={styles.icon} ><FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon></span>
            </div>
        ,document.getElementById("scrollToTop"));
    }
}

export default ScrollToTop;
