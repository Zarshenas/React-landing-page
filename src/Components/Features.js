import React, { Component } from 'react';
import Feacher from './shared/Feacher'
import styles from './Features.module.css';
import feacherIcon1 from "../Images/1-feacherIcon.svg";
import feacherIcon2 from "../Images/2-feacherIcon.svg";
import feacherIcon3 from "../Images/3-feacherIcon.png";
import feacherIcon4 from "../Images/4-feacherIcon.svg";

class Features extends Component {
    constructor(){
        super();
        this.state = {
            feachers:[
                {index:0,icon:feacherIcon1,title:"Speed Optimization",describtion:"We use the best speed optimization tool for our app.",shadowColor:"#ff768ecc" ,firsgradient:"#ff43c0",secondgradient:"#ffa95c"},
                {index:1,icon:feacherIcon2,title:"Marketing Analysis",describtion:"We have the best marketing analytics teams working on our app.",shadowColor:"#8d8effcc",firsgradient:"#0db8ff",secondgradient:"#f332ff"},
                {index:2,icon:feacherIcon3,title:"SEO and Backlinks",describtion:"Our App is optimized by SEO and Backlinks managers.",shadowColor:"#3ad4adcc",firsgradient:"#39aeff",secondgradient:"#3cff53"},
                {index:3,icon:feacherIcon4,title:"Content Marketing",describtion:"Content is the present  and future  of marketing.",shadowColor:"#ffb247cc",firsgradient:"#ff703e",secondgradient:"#ffec4e"}
            ],
        }
    }
    render() {
        const {feachers} = this.state
        return (
            <section className={`${styles.feachersSection} container`}>
                <h1>Checkout Our <span>Software</span> <br/> Features Below.</h1>
                <div className={styles.feacherContainer}>
                    {
                        feachers.map(feacher =>  <Feacher key={feacher.index} icon={feacher.icon} title={feacher.title} describtion={feacher.describtion} shadowColor={feacher.shadowColor} firsgradient={feacher.firsgradient} secondgradient={feacher.secondgradient} />)
                    }                
                </div>
            </section>
        );
    }
}

export default Features;
