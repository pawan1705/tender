import './Nav.css';
import  {Link}  from 'react-router-dom';
import  { useState , useEffect } from 'react';

function Nav() {

 const [ NavContent , setNavContent ] = useState();                      
  useEffect(()=>{
    setInterval(()=>{
       if(localStorage.getItem("role")=="admin")
       {
        setNavContent(
			<div id="nav">
     {/* <!--Start Navigation--> */}
		<header id="header">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
								<span class="sr-only">Toggle navigation</span>
								<span class="fa fa-bars"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<div class="clear-toggle"></div>
							<div id="main-menu" class="collapse scroll navbar-right">
								<ul class="nav" id="clr">
<li> <a><Link to="/admin">Admin Home</Link></a> </li>
<li> <a><Link to="/manageusers">Manage Users</Link></a> </li>
<li><a><Link to="/addcategory" >Add Category</Link></a></li>
<li><a><Link to="/addsubcategory" >Add SubCategory</Link></a></li>
<li> <a><Link to="/Logout">Logout</Link></a> </li>		
				</ul>
							</div>
              {/* <!-- end main-menu --> */}
						</div>
					</div>
				</div>
			</header>
    {/* <!--End Navigation--> */}

    </div>
		);    
       }
       else if(localStorage.getItem("role")=="user")
       {
        setNavContent(
			<div id="nav">
     {/* <!--Start Navigation--> */}
		<header id="header">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
								<span class="sr-only">Toggle navigation</span>
								<span class="fa fa-bars"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<div class="clear-toggle"></div>
							<div id="main-menu" class="collapse scroll navbar-right">
								<ul class="nav" id="clr">
                  <li> <a><Link to="/Userhome">User Home</Link></a> </li>
                  <li> <a><Link to="/searchtenders">serach tenders</Link></a> </li>
                  <li> <a><Link to="/Logout">Logout</Link></a> </li>		
								</ul>
							</div>
              {/* <!-- end main-menu --> */}
						</div>
					</div>
				</div>
			</header>
    {/* <!--End Navigation--> */}

    </div>
		);    
       }                     
       else
       {
        setNavContent(
			<div id="nav">
     {/* <!--Start Navigation--> */}
		<header id="header">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
								<span class="sr-only">Toggle navigation</span>
								<span class="fa fa-bars"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
                            {/* <!--Start Logo --> */}
							<div class="logo-nav">
								<a href="index.html">
									<img src="assets/images/logo.png" alt="Company logo"/>
								</a>
							</div>
                            {/* <!--End Logo --> */}
							<div class="clear-toggle"></div>
							<div id="main-menu" class="collapse scroll navbar-right">
								<ul class="nav">
									<li class=""> <a><Link to="/">Home</Link></a> </li>
									<li> <a><Link to="/About">About</Link></a> </li>   
                  <li> <a><Link to="/Service">Service</Link></a> </li>
                  <li> <a><Link to="/Register">Register</Link></a> </li>
                  <li> <a><Link to="/Contact">Contact</Link></a> </li>
								    <li> <a><Link to="/Login">Login</Link></a> </li>		
								</ul>
							</div>
              {/* <!-- end main-menu --> */}
						</div>
					</div>
				</div>
			</header>
    {/* <!--End Navigation--> */}

    </div>
		);    
       }
    },2000);  
   },[]);
  return(<div>
      { NavContent }
  </div>);
}

export default Nav;
