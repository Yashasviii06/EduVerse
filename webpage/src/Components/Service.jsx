
import Card from "./Card";
import Sdata from "../Sdata";
const Service=()=>{
  console.log(Sdata);
    return(
      <>
         <div className="my-5 container ">
          <h1 className="serviceHead text-center">Our Service</h1>
         </div>
         <div className="container-fliud mb-5">
          <div className="row m-auto">
          <div className="col-1"></div>
            <div className="col-10">
                 <div className="row gy-4">
                
                  {
                    
                  Array.isArray(Sdata) && Sdata.map((val,ind)=>{
                    return(<Card 
                                key={ind} 
                                imgsrc={val.imgsrc}
                                 title={val.title}
                                 info={val.info}
                    />)
                   })
                 }
                  
                 </div>
            </div>
          </div>
         </div>
      </>
    )
  }
  
  export default Service;