import web from "../images/Work_7.jpg";

import Comman from "./Comman";
const Home=()=>{
    return(
      <>
       <Comman 
        name="Grow your skills with " 
        line="What you can think, You Can Create.."
       imgsrc={web} 
       visit="/service" 
       btname="Get Started"/>
      </>
    )
  }
  
  export default Home;