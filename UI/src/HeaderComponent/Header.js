import './Header.css';
import React , { useState , useEffect } from 'react';

function Header() {

    const [ HeaderContent , setHeaderContent ] = useState();  
    // const[trackID,setTrackID]=useState();                    
  

  useEffect(()=>{
    setInterval(()=>{
       if(localStorage.getItem("role")=="admin")
       {
        setHeaderContent(<div>
            {/* Topbar Start */}
            <div class="container-fluid px-5 d-none d-lg-block">
          <div class="row gx-5">
              <div class="col-lg-12">
                  <div class="d-inline-flex align-items-center">
                      <div class="text-start">
                          <h6 class="text-uppercase fw-bold">Welcome Admin</h6>
                          <h1>welcome to admin page</h1>
                          <span>{localStorage.getItem("email")}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Topbar End */}
      </div>);    
       }
       else if(localStorage.getItem("role")=="user")
       {
        setHeaderContent(<div>
            {/* Topbar Start */}
            <div class="container-fluid px-5 d-none d-lg-block">
          <div class="row gx-5">
              <div class="col-lg-12">
                  <div class="d-inline-flex align-items-center">
                      <div class="text-start">
                          <h6 class="text-uppercase fw-bold">Welcome User</h6>
                          <span>{localStorage.getItem("email")}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Topbar End */}
      </div>);    
       }                     
       else
       {
        setHeaderContent();    
       }
    },2000);  
   },[]);

  return(<div>
      { HeaderContent }
  </div>);
}

export default Header;
