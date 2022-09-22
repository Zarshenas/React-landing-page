import React, { Component } from 'react';
import styles from './Video.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

class Video extends Component {
        constructor(){
            super();
            this.state={
                isOpen:false
            }
        }
        openModal = () =>{
            this.setState({
                isOpen:true
            })
        }
    render() {
        return (
                <section id='video' className={`${styles.videoSection} container flexcolumn`}>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='eBGIQ7ZuuiU' h1="dadadada" onClose={() => this.setState({isOpen: false})} />
                <div className={styles.videoContainer}>
                        <div className={styles.titlecon} >
                            <div onClick={this.openModal} className={styles.playButtonCon}><FontAwesomeIcon fade={true} icon={faPlay} /></div>
                            <h1 className={styles.title}>Watch Our <span>Tutorial</span> <br/> Videos.</h1>
                        </div>
                </div>
                </section>
        );
    }
}

export default Video;