import React, { Component } from 'react';
import styles from './Plan.module.css';
import styled from 'styled-components';
const PlanButton = styled.a`
  border: none;
  display: inline-block;
  color: #2a2833;
  padding: 25px 60px;
  border-radius: 5px;
  background-image: ${(props) =>`linear-gradient(90deg, ${props.firstcolor}, ${props.secondcolor}) !important;`};
  position: relative;
  z-index: 36;
`

class Plan extends Component {
    render() {
        return (
            <div className={`${styles.planContainer} fadeUp`}>
                <h1 className={styles.planPrice}>{this.props.planPrice}</h1>
                <h3 className={styles.type} >{this.props.planType}</h3>
                <div className={styles.line}></div>
                <ul className={styles.planOptions}>
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                </ul>
                <PlanButton firstcolor={this.props.firstColor} secondcolor={this.props.secondColor} href="# " className='btnTheme'><span>Choose Plan</span></PlanButton>
                <p>NO HIDDEN CHARGES!</p>
            </div>
        );
    }
}

export default Plan;
