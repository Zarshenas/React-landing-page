import React, { Component } from 'react';
import styles from './AppInterfaces.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import app01 from '../Images/AppUI01.jpg';
import app02 from '../Images/AppUI02.jpg';
import app03 from '../Images/AppUI03.jpg';
import app04 from '../Images/AppUI04.jpg';
import app05 from '../Images/AppUI05.jpg';


const responsiveSettings = [
    {
        breakpoint: 1600,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1
        }
        
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        
    },
    {
        breakpoint: 100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        
    },
];

class AppInterfaces extends Component {
    render() {
        return (
            <section id='app' className={styles.appUISection}>
                <h1>Checkout Our App <br/> <span>Interface</span> Screenshots.</h1>
                <Slide cssClass={styles.slider} responsive={responsiveSettings} slidesToScroll={1} infinite easing='cubic-out' duration={2100} transitionDuration={1700} arrows={false} autoplay={true} canSwipe={true}>
                    <img draggable={false} className={styles.AppUI} src={app01} alt="UIApp" />
                    <img draggable={false} className={styles.AppUI} src={app02} alt="UIApp" />
                    <img draggable={false} className={styles.AppUI} src={app03} alt="UIApp" />
                    <img draggable={false} className={styles.AppUI} src={app04} alt="UIApp" />
                    <img draggable={false} className={styles.AppUI} src={app05} alt="UIApp" />
                </Slide>
            </section>
        );
    }
}

export default AppInterfaces;
