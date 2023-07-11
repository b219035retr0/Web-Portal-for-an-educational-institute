import React from 'react'

const Welcome = () => {
    return (
        <div style={{marginBottom:"30px"}}>
            <div 
                className="commonheader"
                style={
                {
                    marginLeft: "35px",
                    fontSize: "4rem",
                    fontWeight: "500",
                    margin: "10px 90px",
                    // textAlign: "left",
                  
                }
                
            }>

                Welcome
            </div>
            <div className="welcomepara" 
            >
                <div className="welp" 
                >


                    <p style={
                        {fontSize: "1.8rem",lineHeight:"1.7",fontWeight:"400"}
                    }>
                       The department of Electronics and Telecommunication Engineering has been one of the key departments of the institute started in the year 2009. The department is offering a Bachelor in Technology program in Electronics and Telecommunication Engineering and a Master in Technology program with the specialization in Electronics and Communication Engineering (ECE). The Master program is started in the year 2015. The department has also started offering doctoral program in the year 2015. The faculty members are involved in teaching as well as qualitative research. The graduating students are well placed in leading industries. Some students are also pursuing higher studies in reputed national and international institutes.
                    </p>

                </div>
                <div className="welim" >

                    <img alt=""  style={
                    {
                         width: "400px",
                        height: "300px",
                        margin:"auto"
                    }} src="/images/Ece.jpg"/>

                </div>
            </div>
        </div>

    )
}

export default Welcome
