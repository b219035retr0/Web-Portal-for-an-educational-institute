import React from 'react'
import {
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
const Rdcell = () => {

  return (
    <div className='head-text'>
      <div className='head-image'>
        <img src="rd.jpg" style={{ height: '300px' }} alt="" />
      </div>
      <div className='text-on-image' style={{color:'#2d384C'}}>
        <h1><b>Research and Development Cell</b></h1>
      </div>
      <b>Vision:</b>

      The Office of R & D Cell, IIIT Bhubaneswar will create an outstanding ecosystem for research and development that develops knowledge and contribute to the economic growth and societal development of the nation and benefit humanity as a whole.

      <br /><b>Mission:</b>

      To enable the achievement of excellence by the research community, the Office of R & D Cell:

      Develops and expands innovative research programs that align well with institutional mission and vision

      Enhances and encourages faculty members and research scholars to obtain and manage grants

      Supports strong infrastructure for interdisciplinary research

      Promotes the ethical conduct of research, awareness, and compliance

      Partners with the research community

      Creates integrated services, transparent research administration, and streamlined processes

      <br /><b>Expectations:</b>

      The institutional expectations from faculty and research scholars include the following:<br />
      <OrderedList>
        <ListItem>Commitment to Research Quality:
          Creating or associating with a formal research group/ lab/ research centre.

          Documenting the details of projects, members, processes, activities and outcomes.

          Scheduling the activities like periodic seminar talks, research meetings etc.</ListItem>
        <ListItem>Research Ethics:

          Conduct of awareness meetings about research ethics involving but not limited to the following issues: plagiarism, research claims, managing human subjects, privacy
          protection, data security, ethics of online behavior, IPR etc.</ListItem>
        <ListItem><b>Resource Generation:</b>

          Proactively involve yourself in proposing research projects to research centres or external funding agencies.

          Actively collaborate with other faculty members and external agencies to propose research agendas that push the state of the art, and/or addresses relevant social challenges.</ListItem>
        <ListItem><b>Social Outreach:</b>

          Proactively involve in making your research relevant to some stakeholders in the larger interest of the society.</ListItem>
      </OrderedList>
      Contact:  Head, R & D Cell<br />

      # B111, Block B, First Floor<br />

      Email: <p>offrdcell@iiit-bh.ac.in </p>
    </div>
  )
}

export default Rdcell
