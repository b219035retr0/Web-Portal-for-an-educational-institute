import React from 'react'
// import {Faculty} from './FacultyApi'

import Base from './Base';

import NewsEvents from './NewsEvents';
import Welcome from './welcome';
import HodMsg from './HodMsg';
import VisionMission from './VisionMission';


const MainPage = () => {

    return (
        <Base>
            <div className='mainpage'>


                {/* <NewsEvents/>
                 */}
                <Welcome/>
                <HodMsg/>
                <VisionMission/>
                <NewsEvents/> {/* <Society/> */} </div>


        </Base>
    )
}

export default MainPage
