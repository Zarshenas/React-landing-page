import React, { Component } from 'react';
import styles from './PricingPlans.module.css';

class PricingPlans extends Component {
    render() {
        return (
            <section className={`${styles.plansSection} container`}>
                <h1>Choose <span>Pricing Plans</span> Which <br/> Suits Your Needs.</h1>
                <ul className='flex'>
                    <li>Monthly</li>
                    <li>
                        <div role='button' className={styles.switch}></div>
                    </li>
                    <li>Yearly</li>
                </ul>
            </section>
        );
    }
}

export default PricingPlans;
