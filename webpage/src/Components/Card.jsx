import { NavLink } from "react-router-dom";

const Card=({imgsrc, title,info})=>{
    return(
      <>
               
                <div className="col-md-4 col-10 mx-auto">
                  <div class="card" >
                      <img src={imgsrc} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{info}</p>
                        <NavLink to ="#" className="btn btn-primary somewhere">Add Course</NavLink>
                      </div>
                    </div>
                    
                  </div> 
     </>
    )
  }
  
  export default Card;