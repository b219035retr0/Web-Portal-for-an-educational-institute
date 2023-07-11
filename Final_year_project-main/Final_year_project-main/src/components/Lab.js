import React from 'react'
import Base from './Base'
import { students } from './LabApi'
import { Imghelper } from '../auth/helper/admin'

const Lab = () => {
  return (
    <Base>
      <div className="commonheader" style={{  fontSize: "4rem", width: "90vw", fontWeight: "500" ,margin:"auto"}}>Laboratories</div>
      <hr style={{ marginTop: "1rem", marginBottom: "1rem", border: "0", borderTop: "1px solid rgba(0,0,0,.1)" }} />
      <div>
        {students.map((curElem, index) => {
          const { name, about, image,software,hardware } = curElem;
          const isEven = index % 2 === 0;
          const img=Imghelper(image);
          return (
            <div key={name} style={{ marginBottom: "5rem" }}>
              <div className='card' style={{ display: "flex", flexDirection: isEven ? "row" : "row-reverse", width: "90vw", margin: "0 auto" }}>
                <div style={{ width: '200px', height: "200px" }}>
                  <img src={img} style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "1.25rem" }} />
                </div>
                <div style={{ position: "relative", width: "100%", paddingLeft: isEven ? '1rem' : '0', paddingRight: isEven ? '0' : '1rem' ,textAlign: "left"}}>
                  
                  <h2 style={{ textAlign: "left",fontWeight: "700", marginBottom: "14px", fontSize: "1.5rem" }}>{name}</h2>
                  <div style={{ position: "absolute", left: 0, bottom: "-1rem" }}>
                    <hr style={{ width: "25%", backgroundColor: "rgb(8, 39, 65)", height: "0.3vh" }} />
                  </div>
                  <div style={{ fontSize: "1.25rem" }}>{about}</div>
                  <h2 style={{ textAlign: "left",fontWeight: "700", marginBottom: "14px", fontSize: "1.25rem" }}>Major Resources Used</h2>
                  <div style={{ fontSize: "1rem" }}>Softwares: {software}</div>
                  <div style={{ fontSize: "1rem" }}>Hardwares: {hardware}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Base>
  )
}

export default Lab
