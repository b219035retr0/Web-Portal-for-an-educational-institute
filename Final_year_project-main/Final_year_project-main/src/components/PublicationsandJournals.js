import React, { useState } from 'react';
import { Faculty } from './publicationApi';
import Publication from './Publication';
import './publish.css'
import Base from './Base';
function PublicationsandJournals() {

 
  return (
    <Base>
     <div style={{width:"80vw" ,
            margin:"auto" }} >
         <div className='commonheader' style={{ fontSize:"4rem",fontWeight:"500"}}>Publications</div>
         {/* <div className='main-cardd' style={{textAlign:"center",justifyContent:"center"}}> */}
         <div  className="grid-column" id="column1">{Faculty.map((item, index) => {
            
                return(
                    <Publication  item={item}/>
                    )
            
        
        })}</div>
       

         
     
         {/* </div> */}
       
    </div></Base>
   
  );
        };

export default PublicationsandJournals;

