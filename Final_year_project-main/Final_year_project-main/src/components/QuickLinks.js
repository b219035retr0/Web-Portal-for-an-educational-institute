import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const QuickLinks = () => {
  return (
    <div style={{border:"solid 1px rgb(219, 218, 218)",borderRadius:"10px",textAligh:"left"}}>
      <p style={{fontSize:"1.8rem",fontWeight:"500",padding:"10px 0px",color:"white",backgroundColor:"rgb(8, 39, 65)" ,borderRadius:"10px 10px 0px 0px"}}>
        QuickLinks
      </p>
      <div className="linkitems">
      <NavLink exact to="https://hib.iiit-bh.ac.in/m-ums-2.0/start/login/?client=" 
                               style={{color:"blue",fontSize:"1.5rem"}}>
                                M.ums 2.0
                            </NavLink>
      </div>
      {/* <div className="linkitems">
        Faculty Profile
      </div> */}
      <div className="linkitems">
      <NavLink to='/Faculties' style={{color:"blue",fontSize:"1.5rem"}}>
                                Faculty Profile
                            </NavLink>
      </div>
       
      <div className="linkitems">
      <NavLink exact to="https://iiit-placement-website-v2.vercel.app/"
                           style={{color:"blue",fontSize:"1.5rem"}}    >
                                  Placement Web Portal
                            </NavLink>
      
      </div>
      <div className="linkitems">
      <NavLink exact to="https://iiit-bh.almaconnect.com/alumni?frm=main_menu"
                         style={{color:"blue",fontSize:"1.5rem"}}      >
                                  Alumni Details
                            </NavLink>
      </div>
      <div className="linkitems">
      <NavLink exact to="http://vlabs.iitkgp.ac.in/vlt/project.html"
                              style={{color:"blue",fontSize:"1.5rem"}} >
                                   IIT KGP VLab 
                            </NavLink>
       
      </div>
      <div className="linkitems">
      <NavLink exact to="https://gate.iitk.ac.in/" style={{color:"blue",fontSize:"1.5rem"}}>
                                  GATE
                            </NavLink>
      </div>
      <li className="linkitems">
                            <NavLink exact to='http://pub12.bravenet.com/forum/static/show.php?usernum=1014563337&frmid=11762&msgid=0' 
                               style={{color:"blue",fontSize:"1.5rem"}}>
                                Forum
                            </NavLink>
                        </li>
    </div>
  )
}

export default QuickLinks