import React from "react";

const HodMsg = () => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className="hodmsgg">Message From Head of the Department</div>
      <div className="msgHod">
        <div className="hodim">
          <img
            alt=""
            style={{
              height: "100%",
              borderRadius: "1px",
              margin: "15px auto",
            }}
            src="	https://finakyrback.onrender.com/faculty/image/642ee8e8986cec83158c8551"
          />
        </div>
        <div className="hodp">
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.5",
              fontFamily: "Montserrat , sans-serif",
              fontStyle: "italic",
              color: "black",
              fontWeight: "300",
            }}
          >
            {/* The Department of Electrical Engineering (EE) at IIT Hyderabad offers a vibrant environment for under graduate, post graduate education and research in many areas of Electrical Engineering. We are a team of 32 faculty (28 fulltime + 4 visiting), 476 students (192 BTech, 122 MTech and 162 PhD) and 4 staff members engaged in cutting edge research and teaching in several frontier areas of Electrical Engineering. */}
            <p
              style={{
                fontSize: "1.4rem",
                lineHeight: "1.3",
                fontFamily: "Montserrat , sans-serif",
                fontStyle: "italic",
                color: "black",
                fontWeight: "900",
              }}
            >
              {" "}
              Welcome to the Department of Electronics and Telecommunication,
              IIIT Bhubaneswar.
            </p>
            Welcome to the Department of Electronics and Telecommunication at
            IIIT Bhubaneswar! We are excited to have you join our community.
            Your enthusiasm for this dynamic field is commendable, and we
            encourage you to stay updated with the latest advancements through
            research papers, online courses, and industry seminars. Our
            well-equipped labs and projects provide practical experience to
            prepare you for real-world challenges. Active participation in
            workshops, conferences, and competitions will broaden your horizons
            and foster networking opportunities. Remember to maintain a healthy
            work-life balance and seek guidance from our supportive faculty and
            seniors. Together, we can achieve great heights and contribute to
            the advancements in electronics and telecommunication.

            <br/>
            Best Regards
          </p>
          <div
            style={{
              fontSize: "1.3rem",
              lineHeight: "30px",
              fontFamily: "Montserrat , sans-serif",
              fontStyle: "italic",
              color: "black",
              fontWeight: "900",
            }}
          > 
            Dr. RAJAT KUMAR GIRI,IIIT Bhubaneswar
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodMsg;
