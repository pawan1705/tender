import './Footer.css';
{/*// start
import './Header.css';
import  { useState , useEffect } from 'react';

function Header() {

 const [ HeaderContent , setHeaderContent ] = useState();                      
  useEffect(()=>{
    setInterval(()=>{
       if(localStorage.getItem("role")=="admin")
       {
        setHeaderContent(<div>   
      </div>);    
       }
       else if(localStorage.getItem("role")=="user")
       {
        setHeaderContent(<div>   
      </div>);    
       }                     
       else
       {
        setHeaderContent(<div>   
      </div>);    
       }
    },2000);  
   },[]);
  return(<div>
      { HeaderContent }
  </div>);
}

// end*/}

function Footer() {
  return (<div id="footer">
   {/* <!--Start Footer--> */}
   <footer>
       <div class="container">
           <div class="row">
               {/* <!--Start copyright--> */}
               <div class="col-md-6 col-sm-6 col-xs-6">
                   <div class="copyright"><p>Copyright © 2016 All Rights reserved by:pawan 
                 </p></div>
               </div>
               {/* <!--End copyright--> */}
               
               {/* <!--start social icons--> */}
               <div class="col-md-6 col-sm-6 col-xs-6">
                   <div class="social-icons">
                       <ul>
                        <li><a href=""><i class="fa fa-facebook"></i></a></li>
                        <li> <a href="https://twitter.com/pawansangare"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="https://www.instagram.com/pawan_sangare_/"><i class="fa fa-instagram"></i></a></li>
                       </ul>
                    </div>
               </div>
               {/* <!--End social icons--> */}
           </div> 
           {/* <!-- /.row--> */}
       </div>
        {/* <!-- /.container--> */}
   </footer>
   {/* <!--End Footer--> */}
   

    </div>
  );
}
export default Footer;
