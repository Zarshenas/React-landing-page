import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import styles from "./Subscribe.module.css";

class Subscribe extends Component {
  render() {
    return (
      <section className={styles.subSection}>
        <h1>
          Subscribe Our <span>Newsletter</span> <br /> to Get New Updates.
        </h1>
        <form action="#" className={styles.inputContainer}>
          <input type="email" />
          <button type="submit">
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </form>
      </section>
    );
  }
}

export default Subscribe;
