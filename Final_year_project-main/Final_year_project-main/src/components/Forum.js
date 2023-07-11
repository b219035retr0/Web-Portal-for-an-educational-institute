import React from 'react'

const Forum = () => {
    const forumWidgetURL = 'http://pub12.bravenet.com/forum/static/show.php?usernum=1014563337&frmid=11762&msgid=0';

    const iframeStyle = {
      width: '1000vw',
      height:'100vh',
      border:"none"
    };
  return (
          <div>
         <iframe src={forumWidgetURL} style={{iframeStyle}}></iframe>
    </div> 
    
  )
}

export default Forum
