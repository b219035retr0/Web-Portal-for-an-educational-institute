import React from 'react'
import Base from './Base'
import './contact.css'

const Contact = () => {
  
  return (
    <Base>
     <div
        style={{
          width: "90vw",
          margin:"auto"
        }}
      >
    <div className="responsive" style={{width:"80vw",margin:"30px auto",display:"flex",minHeight:"100px",maxHeight:"300px"}}>
      <div className="contact-address">
        <h2>Contact Us</h2>
        <p>
        Department of Electronics and TeleCommunication Engineering,IIIT Bhubaneswar, Gothapatna<br />
          PO: Malipada<br />
          Bhubaneswar<br />
          Odisha - 751003<br />
          India
        </p>
      </div>
      <div className="contact-map" style={{width:"90xw",height:"400px"}}>
        <h2>IIIT BBSR Location Map</h2>
        <iframe title="IIIT BBSR Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.133214540848!2d85.74120761395196!3d20.2947524178073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1679574773498!5m2!1sen!2sin" 
        style={{border:0}} allowfullscreen="" loading="lazy" 
        ></iframe>
        {/* <iframe
          title="IIIT BBSR Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.873323675491!2d85.10109111440845!3d20.29534828639605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19aafa097e685b%3A0xb8a61f6f89d6a2d6!2sIIIT%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1645481428155!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
      </div>
      </div>
      </div>
    </Base>
  )
}

export default Contact
