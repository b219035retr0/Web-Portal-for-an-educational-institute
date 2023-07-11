import React from 'react';
import './contact.css'; // import your custom stylesheet

function Footers() {
    return (
        <div className="contact-container"
            style={
                {
                    backgroundColor: "rgb(8, 39, 65)",
                    color: "white",
                    padding: "50px 80px"
                }
        }>
            <div className="contact-address">
                <h2 style={
                    {color: "#f8b003"}
                }>Contact Us</h2>
                <hr/>
                <p>
                    IIIT Bhubaneswar, Gothapatna<br/>
                    PO: Malipada<br/>
                    Bhubaneswar<br/>
                    Odisha - 751003<br/>
                    India
                </p>
                <br/><br/>


                <h2 style={
                    {color: "#f8b003"}
                }>Social Links</h2>
                <hr/>


                <div style={
                    {
                        display: "flex",
                        // justifyContent: "space-between"
                    }
                }>

                    <a href="https://www.facebook.com/pages/IIIT-Bhubaneswar/109892865707135" className="sociall"
                        style={
                            {backgroundColor: "#3b5998"}
                    }>
                        <i className="fab fa-2x fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/iiit_bbsr_official" 
                        style={
                            {backgroundColor: "#ec4a89"}
                        }
                        className="sociall">
                        <i className=" fab fa-2x fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/iiit-bhubaneswar"
                        style={
                            {backgroundColor: "#0082ca"}
                        }
                        className="sociall">
                        <i className=" fab fa-2x fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9pQ_-lE-rzk"
                        style={
                            {backgroundColor: "red"}
                        }
                        className="sociall">
                        <i className=" fab fa-2x fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com/IIIT_Bh?t=RRgsT9gh7eKbA94nqUYGWw&s=35"
                        style={
                            {backgroundColor: "#55acee"}
                        }
                        className="sociall">
                        <i className=" fab fa-2x fa-twitter"></i>
                    </a>
                    <br/><br/>


                </div>
            </div>


            <div className="contact-address">
                <h2 style={
                    {color: "#f8b003"}
                }>IIIT Bhubaneswar</h2>
                <hr/>
                <p>
                    <a className="links1" href="https://www.iiit-bh.ac.in/">IIIT Homepage</a>
                    <br/>
                    <a className="links1" href="https://www.iiit-bh.ac.in/university/about">About IIIT-Bh</a>
                    <br/>
                    <a className="links1" href="/faculty.pdf">Click Here-Download Faculty Profile</a>
                    <br/>
                    <a className="links1" href="https://sites.google.com/iiit-bh.ac.in/alumni">Alumni Network</a>
                    <br/>

                </p>
                <br/><br/>


            


            </div>
            <div className="contact-map">
                <h2 style={
                    {color: "#f8b003"}
                }>IIIT BBSR Location Map</h2>
                <hr/>
                <iframe title="IIIT BBSR Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.133214540848!2d85.74120761395196!3d20.2947524178073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1679574773498!5m2!1sen!2sin" width="200" height="200"
                    style={
                        {border: 0}
                    }
                    allowfullscreen=""
                    loading="lazy"></iframe>

            </div>

        </div>

    );
}

export default Footers;
