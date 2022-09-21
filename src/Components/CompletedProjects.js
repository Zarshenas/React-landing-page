import React, { Component } from 'react';
import styles from './CompletedProjects.module.css';
import Completedproject from './shared/Completedproject';

class CompletedProjects extends Component {
    constructor(){
        super();
        this.state={
            projects:[
                {count:4789 ,name:"PROJECTS", firstColor:"#39aeff", secondColor:"#3cff53" ,shadowColor:"rgb(58 212 173 / 30%)"},
                {count:960 ,name:"SUCCESS", firstColor:"#0db8ff", secondColor:"#f332ff" ,shadowColor:"rgb(141 142 255 / 30%)"},
                {count:6400 ,name:"CUSTOMERS", firstColor:"#ff43c0", secondColor:"#ffa95c" ,shadowColor:"rgb(255 118 142 / 30%)"},
                {count:378 ,name:"AWARDS", firstColor:"#ff703e", secondColor:"#ffec4e" ,shadowColor:"rgb(255 178 71 / 30%)"}
            ]
        }
    }
    render() {
        return (
        <section className={`${styles.projectsContainer} container`}>
            <h1>
                Over 2200 <span>Projects</span> <br /> Completed.
            </h1>
            <div className={styles.projectcontainer}>
                {this.state.projects.map(project => <Completedproject count={project.count}  name={project.name} firstColor={project.firstColor} secondColor={project.secondColor} shadowColor={project.shadowColor}/> )}
            </div>
        </section>
        );
    }
}

export default CompletedProjects;
