import React from 'react'
import { useState } from 'react';
function Publication({ item }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
      setIsOpen(!isOpen);
    }
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleCollapsible1 = () => {
      setIsOpen1(!isOpen1);
    }
  return (
    
      <div style={{width:"79vw",padding:"10px",margin:"10px 1px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
      <h1 className='xx' >{item.name}</h1>
       <div   className={`faq ${isOpen ? 'active' : ''}`} >
          <h3 className="faq-title" style={{fontSize:"2rem",fontWeight:"600"}}>Conference Publications</h3>

          {isOpen && ( <div  style={{padding:"30px 50px 20px 50px"}} >
            <ul style={{display:"inline-block",textAlign:"left",fontSize:"1.6rem",lineHeight:"1.9"}}>
            {item.Conference_Publications.map((items,index)=>{
              return<li key={index} style={{listStyleType: "disc"}}>{items}</li>
              // console.log(items);
            })}
            </ul>
            </div>)}
          <button className="faq-toggle" onClick={() => {toggleCollapsible()}}>
            <i className="fas fa-angle-down"></i>
          </button>
        </div>
        <div className={`faq ${isOpen1 ? 'active' : ''}`}>
          <h3 className="faq-title" style={{fontSize:"2rem",fontWeight:"600"}}>International Journal</h3>
          {isOpen1 && ( <div  style={{padding:"30px 50px 20px 50px"}} >
            <ul style={{display:"inline-block",textAlign:"left",fontSize:"1.6rem",lineHeight:"1.9"}}>
            {item.International_journals.map((items,index)=>{
              return<li key={index} style={{listStyleType: "disc"}}>{items}</li>
              // console.log(items);
            })}
            </ul>
            </div>)}
          <button className="faq-toggle" onClick={() =>{toggleCollapsible1()}}>
            <i className="fas fa-angle-down"></i>
          </button>
        </div>

       
      </div>
  )
}

export default Publication

