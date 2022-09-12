import React, { Component } from 'react';
import styles from './Feacher.module.css'
import arrow from "../../Images/arrow.svg";
import styled from 'styled-components';
import addBrToText from './AddBr';

const FeacherContainer =styled.div`
    position: relative;
    width: 100%;
    height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom:40px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 50px;
    background-color: #ffff;

        &:before{
            content: "";
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border-radius: 5px;
            opacity: 0;
            background-image: ${(props) => `linear-gradient(40deg,${props.firsgradient},${props.secondgradient})`};
            transition:all 0.6s ease;
            z-index: -63;
        }
    &:hover{
        border: 1px solid transparent;
    }
    &:hover:before{
        opacity: 1;
    }
`;
const FeacherIconCon = styled.div`
    width: 110px;
    height: 110px;
    box-shadow:${(props) => `0 20px 40px 0 ${props.shadowColor}`};
    background-image: ${(props) => `linear-gradient(40deg,${props.firsgradient},${props.secondgradient})`};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
    width: 70px;
    }
`;
class Feacher extends Component {
    render() {
        const {icon,title,describtion ,shadowColor ,firsgradient ,secondgradient}=this.props;
        console.log(firsgradient)
        return (
            <FeacherContainer firsgradient={firsgradient} secondgradient={secondgradient}>
                <FeacherIconCon shadowColor={shadowColor} firsgradient={firsgradient} secondgradient={secondgradient}>
                    <img src={icon} alt="feacherIcon" />
                </FeacherIconCon>
                <a href="# " className={styles.feacherName}>{addBrToText(title)}</a>
                <p className={styles.feacherDescription}>{describtion}</p>
                <a href="# " className={styles.arrow}><img src={arrow} alt="arrow" /></a>
            </FeacherContainer>
        );
    }
}

export default Feacher;
