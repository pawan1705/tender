import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiURLuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var userDetails={"email":email,"password":password};
      axios.post(_apiURLuser+"login",userDetails).then((response)=>{

          //to store user details in local storage
          const responseData=response.data.userDetails;
          console.log(responseData);
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",responseData._id);
          localStorage.setItem("username",responseData.name);
          localStorage.setItem("email",responseData.email);
          localStorage.setItem("password",responseData.password);
          localStorage.setItem("mobile",responseData.mobile);
          localStorage.setItem("address",responseData.address);
          localStorage.setItem("city",responseData.city);
          localStorage.setItem("gender",responseData.gender);
          localStorage.setItem("role",responseData.role);
          localStorage.setItem("info",responseData.info);  

          responseData.role=="admin"?navigate("/admin"):navigate("/user");
      }).catch((error)=>{
          setOutput("Invalid user or verify your account....");
          setEmail('');
          setPassword('');
        });
    }
    
  return(<div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-6">
<h2>Login Here!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <br/>
    <button type="submit" class="btn btn-success">Login</button>
  </form>                
</div>

               <div class="col-md-6">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-hotairballoon"></i> </div> 
                       <div class="services-desc">
                          <h4>Login</h4>

                       </div>
                   </div>
               </div>
                {/* <!--End services Item--> */}
              
            </div>
        </div> 



    </div>
  );
}

export default Login;
