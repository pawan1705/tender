import './Banner.css';
import  { useState , useEffect } from 'react';

function Banner() {

 const [ BannerContent , setBannerContent ] = useState();                      
  useEffect(()=>{
    setInterval(()=>{
       if(localStorage.getItem("role")=="admin")
       {
        setBannerContent();    
       }
       else if(localStorage.getItem("role")=="user")
       {
        setBannerContent();    
       }                     
       else
       {
        setBannerContent(<div>
            {/* <!-- Start Slider  --> */}
        <section id="home" class="home">
             <div class="slider-overlay"></div>
            <div class="flexslider">
                <ul class="slides scroll">
                    <li class="first">
                        <div class="slider-text-wrapper">  
                            <div class="container">
                                <div class="big">Bid Here </div>          
                                <div class="small">Are you ready to buy this </div>
                                <a href="#works" class="middle btn btn-white">VIEW Detail</a>
                            </div>       
                        </div>
                        <img src="assets/images/slider/1.jpg" alt="" />
                    </li>
                    
                    <li class="secondary">
                        <div class="slider-text-wrapper"> 
                            <div class="container">                       
                                <div class="big">Start BID</div>          
                                <div class="small">Are you ready to buy this </div>
                                <a href="#works" class=" middle btn btn-white">VIEW Details</a>
                            </div>
                         </div>
                        <img src="assets/images/slider/2.jpg" alt="" />
                    </li>
                    
                    <li class="third">
                        <div class="slider-text-wrapper"> 
                            <div class="container">                              
                                <div class="big">Start BId </div>          
                                <div class="small">Are you ready to buy this</div>
                                <a href="#works" class="middle btn btn-white">VIEW Detail</a>
                             </div>
                        </div>
                        <img src="assets/images/slider/3.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </section>
          {/* <!-- End Slider  --> */}
    </div>);    
       }
    },2000);  
   },[]);
  return(<div>
      { BannerContent }
  </div>);
}


export default Banner;
