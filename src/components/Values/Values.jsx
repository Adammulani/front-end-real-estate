import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState

 } from 'react-accessible-accordion';
 import "react-accessible-accordion/dist/fancy-example.css";
 import { MdOutlineArrowDropDown } from "react-icons/md";
 import "./Values.css";
 import data from "../../utils/accordion";

export const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*Left side of values component  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="value" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className='greenText'>Our Promise to You</span>
          <span className='primaryText'>Why Choose Us</span>
          <span className='secondaryText'>Discover the value of partnership with Aaaaam, where our dedicated <br/>
            team works tirelessly to help you achieve your real estate goals with <br/>
            confidence and peace of mind</span>

            <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}   
            > {/*preExpanded={[0]} means first element will be expanded by default */}

            { 
              data.map((item,i)=>{
                const [className,setClassName]=useState(null);
                return (
                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className=' flexCenter accordionButton'>
                                
                                <AccordionItemState>
                                    {({expanded})=> expanded ? setClassName("expanded"):setClassName("collapsed")}
                                </AccordionItemState>
                                <div className="flexCenter icon">
                                    {item.icon}
                                </div>
                                <span className='primaryText'>
                                    {item.heading}
                                </span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20}/>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>

                    </AccordionItem>
                )
              })
                
            }
            </Accordion>
        </div>
      </div>
    </section>
  );
}
