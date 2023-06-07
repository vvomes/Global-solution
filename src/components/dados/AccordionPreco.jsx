import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import accordionsData from '../../json/accordionsPreco.json';

const AccordionPreco = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    setAccordions(accordionsData);
  }, []);

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
  };

  return (
    <Section>
      {accordions.map((accordion) => {
        const isOpen = accordion.id === openAccordionId;

        return (
          <div className="accordion" key={accordion.id}>
            <h5 className="accordion-title" onClick={() => toggleAccordion(accordion.id)}>
              {accordion.title}
            </h5>
            <div
              className={`accordion-title-plus-minus ${isOpen ? 'open' : ''}`}
              onClick={() => toggleAccordion(accordion.id)}
            ></div>
            {isOpen && (
              <div className="accordion-content">
                <p>{accordion.content1}</p>
                <p>{accordion.content2}</p>
                <p>{accordion.content3}</p>
                <p>{accordion.content4}</p>
                <p>{accordion.content5}</p>
              </div>
            )}
          </div>
        );
      })}
    </Section>
  );
};

export default AccordionPreco;

const Section = styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

  .accordion{
    display: block;
    position: relative;
    background-color: transparent;
    border: 1px solid #a9a9a9;
    width: 100%;
    transition: border .5s;
    margin-bottom: 5px;
  }

  .accordion-title{
    position: relative;
    font-size: 16px;
    padding: 20px 44px 20px 10px;
    outline: none;
    transition: padding .5s;
 
    }

  .accordion-title-plus-minus{
    border: 1px solid #0a0909;
    border-radius: 50%;
    height: 34px;
    top: 13px;
    margin-left: 20px;
    position: absolute;
    width: 34px;
    right: 10px;
    cursor: pointer;
    border: 1px solid #000000;
  }
    
  .accordion-content{
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid #a9a9a9;


    p{
      
      word-wrap: break-word;
      font-weight: 400;
      line-height: 1.5rem;
      padding: 1.5rem;
      font-size: 15px;
      letter-spacing: .1rem;
 
    }
  }
  
`