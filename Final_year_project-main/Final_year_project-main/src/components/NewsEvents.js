import { Stack } from '@chakra-ui/react'
import React from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks';

function NewsEvents() {

  return (
    <div id='newsevents' class="root1" style={{backgroundColor:'white'}} >
      <Stack
        spacing={100}
        direction={['column', 'column', 'row']} // Change direction to column on small screens and row on larger screens
        style={{
          padding: "30px 0px",
          width: '100%',
        }}
      >
        <div className="newsheil" >
          <div style={{fontSize: '2.5rem', textAlign: 'left',fontWeight:"600" ,marginBottom:"20px"}}>
          Announcements/News/Highlights
          </div>
          <div style={{overflow:"hidden"}}><Events/></div>
        </div>
        <div className="quicklinks" style={{overflow:"hidden"}}><QuickLinks/> </div>
        
      </Stack>
    </div>
  )
}

export default NewsEvents
