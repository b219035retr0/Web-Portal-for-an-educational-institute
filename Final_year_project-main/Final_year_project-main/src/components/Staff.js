import React from 'react'
import Base from './Base';
import { Staffs } from './StaffApi';
const Staff = () => {
  
   return (
    <Base>
    <div style={{textAlign:"center" }}>
      <div style={{ marginLeft:"35px" ,fontSize:"4rem",width:"90vw",fontWeight:"500",margin:"15px 40px",textAlign:"left"}}>Staffs</div>
       <div className='main-cardd'>
      {
    Staffs.map((curElem)=>{
          // const {batch,name,email,profession,image}=curElem;
            const {name,profession,email,description,image,url,Qualification,Phone}=curElem;
            return (
              <div>
              <div className="card">
          
          <div className="card-body">
          <div style={{width:"50%",textAlign:"left"}}>
          <img  src={image} onClick={()=> window.location.href =url} />
          </div>
            <div style={{ marginLeft:"20px" ,fontSize:"1.3rem"}}>
            <h2 style={{ textAlign:"left",marginBottom:"14px"}}>{name}</h2>
            <div style={{ textAlign:"left",fontSize:"1.5rem"}}>Profession: {profession}</div>
            <div style={{textAlign:"left", fontSize:"1.5rem"}}>Qualification: {Qualification}</div>
            <div style={{ textAlign:"left",fontSize:"1.5rem"}}><p>Email:  {email}</p></div>
            <div style={{ textAlign:"left",fontSize:"1.5rem"}}><p>About:  {description}</p></div>
            <div style={{ textAlign:"left",fontSize:"1.5rem"}}><p>Phone:  {Phone}</p></div>
            </div>
          
          </div>
        </div>
        </div>);
       
      }
      
        )}
    
    </div>
    </div>
    </Base>
    
  )
}
export default Staff






