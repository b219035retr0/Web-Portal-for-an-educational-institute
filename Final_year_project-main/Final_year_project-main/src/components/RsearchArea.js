import React, { useState } from "react";
import Base from "./Base";
import "./researchArea.css";

function RsearchArea() {
  const [active, setActive] = useState(false);

  const toggleActive = (index) => {
    const faqElements = document.querySelectorAll(".faq");
    const element = faqElements[index];
    element.classList.toggle("active");
  };

  return (
    <Base>
      <div
        style={{
          marginLeft: "35px",
          fontSize: "4rem",
          width: "80vw",
          fontWeight: "500",
          margin: "15px auto",
          textAlign: "left",
        }}
      >
        <div
         className="commonheader"
          style={{
            fontSize: "4rem",

            fontWeight: "500",

          
          }}
        >
          Research Areas
        </div>
        <div
          style={{
            width: "80vw",
            padding: "10px",
            margin: "10px 0",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <div style={{cursor:"pointer"}}    onClick={
                            () => toggleActive(0)
                    } className={`faq ${active ? "active" : ""}`}>
            <h3 className="faq-title">Advanced Signal Processing</h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the
              processing of signals that carry information. Advanced signal
              processing techniques include adaptive filtering, wavelet
              transforms, and compressed sensing, which are used to extract
              useful information from noisy or complex signals.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(0)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>

          <div style={{cursor:"pointer"}}    
            onClick={() => toggleActive(1)}
            className={`faq ${active ? "active" : ""}`}
          >
            <h3 className="faq-title">Digital and Wireless Communication</h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the
              transmission of digital signals over wireless communication
              channels. Digital and wireless communication technologies include
              cellular networks, Wi-Fi, Bluetooth, and satellite communication,
              which are used to transmit data, voice, and video over long
              distances.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(1)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>

          <div style={{cursor:"pointer"}}    
            onClick={() => toggleActive(2)}
            className={`faq ${active ? "active" : ""}`}
          >
            <h3 className="faq-title">
              Optical communication and Optical Signal Processing
            </h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the
              transmission of information using light. Optical communication
              technologies include fiber-optic communication systems, which use
              optical fibers to transmit data at high speeds over long
              distances. Optical signal processing techniques include wavelength
              division multiplexing, optical amplification, and optical
              switching, which are used to enhance the performance of optical
              communication systems.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(2)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>

          <div style={{cursor:"pointer"}}    
            onClick={() => toggleActive(3)}
            className={`faq ${active ? "active" : ""}`}
          >
            <h3 className="faq-title">Estimation and Detection</h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the
              extraction of useful information from noisy signals. Estimation
              and detection techniques include maximum likelihood estimation,
              Bayesian estimation, and signal detection theory, which are used
              to improve the accuracy and reliability of electronic systems.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(3)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>

          <div style={{cursor:"pointer"}}    
            onClick={() => toggleActive(4)}
            className={`faq ${active ? "active" : ""}`}
          >
            <h3 className="faq-title">Array Signal Processing</h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the
              processing of signals received by an array of sensors. Array
              signal processing techniques include beamforming, direction of
              arrival estimation, and spatial filtering, which are used to
              improve the performance of communication and sensing systems.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(4)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
          <div style={{cursor:"pointer"}}    
            onClick={() => toggleActive(5)}
            className={`faq ${active ? "active" : ""}`}
          >
            <h3 className="faq-title">Digital VLSI architecture design</h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the design
              of integrated circuits (ICs) that contain millions of transistors.
              Digital VLSI architecture design involves the design of complex
              digital systems using hardware description languages (HDLs) and
              computer-aided design (CAD) tools.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(5)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
          <div style={{cursor:"pointer"}}    
            onClick={() => toggleActive(6)}
            className={`faq ${active ? "active" : ""}`}
          >
            <h3 className="faq-title">Image and Video Processing</h3>
            <p
              className="faq-text"
              style={{
                textAlign: "left",
                fontSize: "1.9rem",
                lineHeight: "1.5",
              }}
            >
              It is a field of electrical engineering that deals with the
              processing of images and videos using digital signal processing
              techniques. Image and video processing techniques include image
              and video compression, filtering, and enhancement, which are used
              to improve the quality and reduce the size of digital images and
              videos.
            </p>
            <button className="faq-toggle" onClick={() => toggleActive(6)}>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default RsearchArea;
