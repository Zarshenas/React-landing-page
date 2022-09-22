import React, { Component } from 'react';
import styles from './PricingPlans.module.css';
import styled from 'styled-components';
import Plan from './shared/Plan';

const Switch = styled.div`
    width: 90px;
    height: 38px;
    border: 1px solid #efefef;
    border-radius: 34px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    &:after{
        content: "";
        position: absolute;
        width: 26px;
        height: 26px;
        left: 6px;
        border-radius: 50%;
        background-image:linear-gradient(40deg,#3cff53, #39aeff);
        transform: ${(props)=>props.isMonthly?"translateX(0px)" : "translateX(50px)" };
        transition: transform 0.4s ease-out;
    }
`;

class PricingPlans extends Component {
    constructor(){
        super();
        this.state = {
            monthly:true,
            yearly:false,
            plansMonthly:[
                {id:1,planPrice:"$20.00",planType:"BASIC PACK",firstColor:"#ff4eb5",secondColor:"#ffa065" ,showAnimation:"fadeDown"},
                {id:2,planPrice:"$30.00",planType:"MEDIUM PACK",firstColor:"#39aefe",secondColor:"#3cff53" ,showAnimation:"fadeUp"},
                {id:3,planPrice:"$40.00",planType:"PREMIUM PACK",firstColor:"#0db8ff",secondColor:"#f033ff" ,showAnimation:"fadeDown"}
            ],
            plansYearly:[
                {id:4,planPrice:"$120.00",planType:"BASIC PACK",firstColor:"#ff4eb5",secondColor:"#ffa065" ,showAnimation:"fadeDown"},
                {id:5,planPrice:"$230.00",planType:"MEDIUM PACK",firstColor:"#39aefe",secondColor:"#3cff53" ,showAnimation:"fadeUp"},
                {id:6,planPrice:"$340.00",planType:"PREMIUM PACK",firstColor:"#0db8ff",secondColor:"#f033ff" ,showAnimation:"fadeDown"}
            ]
        }
    }
    switchHandler = () =>{
        this.setState(prevState =>({
            monthly:!prevState.monthly
        }))
        this.setState(prevState =>({
            yearly:!prevState.yearly
        }))
    }
    render() {
        return (
            <section className={`${styles.plansSection} container`}>
                <h1>Choose <span>Pricing Plans</span> Which <br/> Suits Your Needs.</h1>
                <ul className='flex'>
                    <li className={this.state.monthly ? styles.On : ""}>Monthly</li>
                    <li>
                        <Switch onClick={this.switchHandler} isMonthly = {this.state.monthly} role='button' className={styles.switch}></Switch>
                    </li>
                    <li className={this.state.yearly ? styles.On : ""}>Yearly</li>
                </ul>
                <div className={styles.plansCon}>
                {
                    this.state.monthly?this.state.plansMonthly.map( plan  => <Plan key={plan.id} planPrice={plan.planPrice} planType={plan.planType} firstColor={plan.firstColor} secondColor={plan.secondColor} animation={plan.showAnimation}/>)
                    :
                    this.state.plansYearly.map( plan  => <Plan  key={plan.id} planPrice={plan.planPrice} planType={plan.planType} firstColor={plan.firstColor} secondColor={plan.secondColor} animation={plan.showAnimation}/>)
                    }
                </div>
            </section>
        );
    }
}

export default PricingPlans;
