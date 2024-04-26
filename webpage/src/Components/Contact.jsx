import { useState } from "react";
const Contact=()=>{
  const[data,setData]=useState({
    userName:"",
    userEmail:"",
    userPhn:"",
  });
  const InputEvent=(event)=>{
    const { name,value}= event.target;
    setData((preval)=>{
      return{...preval,
           [name]:value,}
    })
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`name ${data.userName} phone ${data.userPhn} email${data.userEmail}`);
  };
    return(
      <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
                  <fieldset >
                    <legend>Contact Us</legend>
                    <div className="mb-3">
                      <label  className="form-label">User Name</label>
                      <input type="text" className="form-control" name="userName" value={data.userName} onChange={InputEvent} placeholder="User Name"/>
                    </div>
                    <div className="mb-3">
                      <label  className="form-label">Email</label>
                      <input type="email" className="form-control" name="userEmail" value={data.userEmail} onChange={InputEvent} placeholder="email"/>
                    </div>
                    <div className="mb-3">
                      <label  className="form-label">Phone number</label>
                      <input type="number" className="form-control" name="userPhn" value={data.userPhn} onChange={InputEvent} placeholder="Phone number"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" name="userMsg" value={data.userMsg} onChange={InputEvent} rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                  </fieldset>
                </form>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Contact;