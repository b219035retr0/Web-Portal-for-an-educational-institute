import react from 'react';
import { useState } from 'react';
// import { Button, ButtonGroup } from '@chakra-ui/react'
const ComponentOne=(props)=>{
  // const [showDetails, setShowDetails] = useState(false);
  // const [ids,setIds]=useState(null);
    // const [showComponent, setShowComponent] = useState(false);
const {img,title,profession,Qualification,email,Phone,description,url,id,showDetails,setShowDetails}=props;
    const handleClick = () => {
      // setIds(id);
      setShowDetails(true);
    };
   
    return(
        <div className="card">
          
          <div className="card-body">
          <img src={img} onClick={()=>window.location.href=url}/>
            <h2>{title}</h2>
            <div>{profession}</div>
            <div><p>Qualification:<br/>{Qualification}</p></div>
            <div> <p>Email:{email}</p></div>
            <div> <p>Phone-No:{Phone}</p></div>
           {/* <a href={this.props.url}>{this.props.url}</a> */}
           {/* <button type="submit" >More Details</button> */}
           <Button type="submit" onClick={handleClick}>
    More Details
  </Button>
 
          </div>
        </div>
    )
}
export default ComponentOne