import web from "../images/img1.jpg";

import Comman from "./Comman";
const About=()=>{
    return(
      <>
       <Comman  
       name="Welcome to About" 
       line="Unlock your potential through the gateway of new technology."
       imgsrc={web} 
       visit="/contact" 
       btname="Contact us"
      />
      </>
    )
  }
  
  export default About;