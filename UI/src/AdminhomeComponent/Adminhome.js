import './Adminhome.css';
import {useState} from 'react';
import Auth from '../AuthComponent/Auth';


function Adminhome() {
  return (<div id="Nav">
     <Auth/>
    
  {/* <!--Start Services--> */}
   <section id="services" class="section">
        <div class="container">
            <div class="row">
            
                 <div class="title-box text-center">
                    <h2 class="title">Admin home</h2>
                 </div>
              
            </div>
        </div>
         
   </section> 
   </div>


      );
}
export default Adminhome;
