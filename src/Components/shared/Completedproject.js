import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import styles from './Completedproject.module.css'

const CountUpContainer = styled.div`
    width: 220px;
    height: 220px;
    box-shadow: 0 20px 60px 0 rgba(47, 46, 49, 0.05);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    &:before{
        content: "";
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
        border-radius: 50%;
        background-image: ${(props) => `linear-gradient(40deg,${props.firstColor},${props.secondColor})`};
    }
`;
const InnerDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: inset 0 20px 40px 0 ${props => props.shadowColor};
`;

const Completedproject = (props) => {

    const [State ,setState] = useState({visible: false });

    const onChangeVisibility = isActive => {
        setState({ ...State, visible: isActive });
    }

  return (
    <VisibilitySensor  onChange={e => onChangeVisibility(e)} active={!State.visible} partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
            <CountUpContainer className={styles.container} firstColor={props.firstColor} secondColor={props.secondColor}>
                <InnerDiv shadowColor={props.shadowColor}>
                    {
                    isVisible &&
                    <div>
                        <CountUp className={styles.count} end={props.count}>
                            
                        </CountUp>
                        <h3 className={styles.name}>{props.name}</h3>
                    </div>
                    }
                </InnerDiv>
            </CountUpContainer>
            )}
        </VisibilitySensor>
  )
}

export default Completedproject