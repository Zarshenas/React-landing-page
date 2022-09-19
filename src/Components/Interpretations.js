import React, { Component } from 'react';
import Slide from './shared/Slide';
import styles from './Interpretations.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong , faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

class Interpretations extends Component {
    constructor(){
        super();
        this.state = {
            slideNumber:0,
            slidesContent:[
                {id:0,customerName:"Samanta Smith",customerImage:"https://picsum.photos/300",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste porro commodi, est id et ut ipsam omnis impedit quam pariatur blanditiis velit, sint ipsa exercitationem."},
                {id :1,customerName:"Sara Jacjson",customerImage:"https://picsum.photos/400",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste porro commodi, est id et ut ipsam omnis impedit quam pariatur blanditiis velit, sint ipsa exercitationem."},
                {id :2,customerName:"Ashly stochers",customerImage:"https://picsum.photos/250",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste porro commodi, est id et ut ipsam omnis impedit quam pariatur blanditiis velit, sint ipsa exercitationem."}
            ]
        }
    }

    leftSlideHandler = () => {
        if (this.state.slideNumber === 0) {
            this.setState({
                slideNumber:3
            })
        }
        this.setState( prevState =>({
            slideNumber:prevState.slideNumber-1
        }),()=>{
            console.log(this.state.slideNumber)
        })
    }

    rightSlideHandler = () => {
        if (this.state.slideNumber === 2) {
            this.setState({
                slideNumber:-1
            })
        }
        this.setState( prevState =>({
            slideNumber:prevState.slideNumber+1
        }),()=>{
            console.log(this.state.slideNumber)
        })
    }

    render() {
        return (
            <section className={` ${styles.interpretationsSection} flexcolumn ${styles.container}`}>
                <div className={styles.interpretationsDescriptionCon}>
                    <h1> What Our <span>Clients</span> Say <br/> About Us.</h1>
                    <div className={styles.sliderCon}>
                        <div className={styles.slides}>
                        {
                            this.state.slidesContent.map(slide => <Slide slideNumber={this.state.slideNumber} id={slide.id} key={slide.id} description={slide.description} customerName={slide.customerName}  customerImage={slide.customerImage}/>)
                        }
                        </div>
                        <div className={styles.allArrowsCon}>
                            <span onClick={this.leftSlideHandler} className={`${styles.arrowCon} ${styles.left}`}><FontAwesomeIcon className={styles.arrow} icon={faArrowLeftLong}/></span>
                            <span onClick={this.rightSlideHandler} className={`${styles.arrowCon} ${styles.right}`}><FontAwesomeIcon className={styles.arrow} icon={faArrowRightLong}/></span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Interpretations;
