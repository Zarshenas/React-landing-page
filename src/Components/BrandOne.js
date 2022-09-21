import React, { Component } from 'react';
import styles from './BrandOne.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import brandImage from '../Images/brand one.png';

const responsiveSettings = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
        
    },
    {
        breakpoint: 100,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        
    },
];

class BrandOne extends Component {
    render() {
        return (
            <section className={styles.brandOneSection}>
                <Slide responsive={responsiveSettings} cssClass={styles.slider} infinite easing='cubic-out' duration={2100} transitionDuration={1700} arrows={false} autoplay={true} canSwipe={false}>
                    <img draggable={false} className={styles.brandImage} src={brandImage} alt="brand" />
                    <img draggable={false} className={styles.brandImage} src={brandImage} alt="brand" />
                    <img draggable={false} className={styles.brandImage} src={brandImage} alt="brand" />
                    <img draggable={false} className={styles.brandImage} src={brandImage} alt="brand" />
                    <img draggable={false} className={styles.brandImage} src={brandImage} alt="brand" />
                </Slide>
            </section>
        );
    }
}

export default BrandOne;