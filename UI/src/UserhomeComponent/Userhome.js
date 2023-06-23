import './Userhome.css';
import {useState} from 'react';


function Userhome() {
  return (<div id="sidebar">
    
  {/* <!--Start Services--> */}
   <section id="services" class="section">
        <div class="container">
            <div class="row">
            
                 <div class="title-box text-center">
                    <h2 class="title">Userhome</h2>
                 </div>
              
               {/* <!--Services Item--> */}
               <div class="col-md-4">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-basket"></i> </div> 
                       <div class="services-desc">
                          <h4>Userhome</h4>
                          <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore adipisicing. </p>
                       </div>
                   </div>
               </div>
                {/* <!--End services Item--> */}
                
               
            </div>
        </div>
         
   </section> 
   </div>


      );
}
export default Userhome;
