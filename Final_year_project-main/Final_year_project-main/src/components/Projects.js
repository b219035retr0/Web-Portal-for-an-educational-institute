import React from 'react'
import Base from './Base'

const Projects = () => {
  return (
    
      <Base>
      <div style={{ fontSize: "4rem", width: "80vw",margin:"auto" }}>
        <div  style={{ fontSize:"4rem", width:"90vw", fontWeight:"500", textAlign:"left"}}>Research Projects</div>
      <div className='table-container'>  <table  style={{ borderCollapse: "collapse", width: "90vw" }}>
          <tbody>
            <tr style={{ borderBottom: "none" }}>
              <td style={{ fontWeight: "bold", padding: "5px" }}>Project title</td>
              <td style={{ fontWeight: "bold", padding: "5px" }}>Date Start</td>
              <td style={{ fontWeight: "bold", padding: "5px" }}>Faculties involved</td>
              <td style={{ fontWeight: "bold", padding: "5px" }}>Council/Dept.</td>
              <td style={{ fontWeight: "bold", padding: "5px" }}>Sponsor</td>
            </tr>
            {/* <tr style={{ borderTop: "none" }}>
              <td style={{ padding: "5px" }}>Project 1</td>
              <td style={{ padding: "5px" }}>1/1/2023</td>
              <td style={{ padding: "5px" }}>Faculty A, Faculty B</td>
              <td style={{ padding: "5px" }}>Council X</td>
              <td style={{ padding: "5px" }}>Sponsor 1</td>
            </tr>
            <tr style={{ borderTop: "none" }}>
              <td style={{ padding: "5px" }}>Project 2</td>
              <td style={{ padding: "5px" }}>2/1/2023</td>
              <td style={{ padding: "5px" }}>Faculty C, Faculty D</td>
              <td style={{ padding: "5px" }}>Council Y</td>
              <td style={{ padding: "5px" }}>Sponsor 2</td>
            </tr> */}
            {/* Add more rows of data here */}
          </tbody>
        </table></div>
       
        <div style={{color:"black",font:"21.3333px sans serif",fontWeight:"600",padding:"53.3333px 0px 26.6667px"}}>
                        <header>
                            <h2>To be updated</h2>
                        </header>

                    </div>
                    </div>
      </Base>
    
  )
}

export default Projects
