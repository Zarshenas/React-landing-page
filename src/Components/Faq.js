import React, { Component } from 'react';
import styles from './Faq.module.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import './accordion.css';

class FAQ extends Component {
    constructor(){
        super();
        this.state={
            FAQ:[
                {id:0,heading:"Pre and post launch mobile app marketing pitfalls to avoid",content:"There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."},
                {id:2,heading:"Boostup your application traffic is just a step away",content:"There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."},
                {id:3,heading:"How to update application new features",content:"There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."},
                {id:4,heading:"How to connect with the support to improve app experience",content:"There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."},
                {id:5,heading:"How to connect with the support to improve app experience",content:"There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."},
            ]
        }
    }
    render() {
        return (
            <section className={`${styles.faqSection} container`}>
                <h1>Want to <span>Ask Something</span> <br/> From Us?</h1>
                <Accordion Pre-expanded>
                    {this.state.FAQ.map((item) => (
                        <AccordionItem key={item.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.heading}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.content}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        );
    }
}

export default FAQ;
