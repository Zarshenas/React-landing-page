import React, { Component } from 'react';
import styles from './Slide.module.css';
import styled from 'styled-components';
const SlideDiv = styled.div`
    width: 100%;
    background-color: #ffff;
    padding: 20px 5px;
    border-radius: 10px;
    border:2px solid #ff4eb5;
    position: absolute;
    transform: ${(props)=> props.id=== 2 ?"rotate(5deg)":""};
    transform: ${(props)=> props.id=== 1 ?"rotate(10deg)":""};
    animation: ${(props)=> props.slideNumber=== props.id?"comeOver 1s ease 0s 1 normal forwards":"goBehind 1s ease 0s 1 normal forwards running"};
    @media (min-width:768px){
        padding: 50px 15px;
    }
    @media (min-width:1200px){
        width: 60%;
        padding: 50px 70px !important;
    }
    @keyframes comeOver {
    0% {
        z-index: 1;
        transform: rotate(5deg);
    }
    25% {
        z-index: 2;
        transform: rotate(-30deg);
    }
    50% {
        z-index: 3;
        transform: translateY(-300px);
    }
    100% {
        z-index: 4;
        transform: translateY(0px);
    }
    
}
    @keyframes goBehind {
    0% {
        z-index: 4;
        transform: rotate(0deg);
    }
    25% {
        z-index: 3;
        transform: rotate(0deg);
    }
    50% {
        z-index: 2;
        transform: translateY(200px);
    }

    100% {
        z-index: 1;
        transform: rotate(5deg);
    }
}
`

class Slide extends Component {
    render() {
        return (
            <SlideDiv className={styles.slide} slideNumber={this.props.slideNumber} id={this.props.id}>
                <p>{this.props.description}</p>
                <h3>{this.props.customerName}</h3>
                <h6>OUR CUSTOMERS</h6>
                <img draggable="false" src={this.props.customerImage} alt=" Customer Profile" />
            </SlideDiv>
        );
    }
}

export default Slide;
