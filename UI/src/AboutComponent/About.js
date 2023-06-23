import './About.css';
import axios from 'axios';
function About() {
    const test=()=>{
        axios.get("http://localhost:3001/user/").then((result)=>{
            console.log(result);
        })
    }
  return (<div id="sidebar">
    
    
  {/* <!--Start Services--> */}
   <section id="services" class="section">
        <div class="container">
            <div class="row">
            
                 <div class="title-box text-center">
                    <h2 class="title">About</h2>
                 </div>
              
               {/* <!--Services Item--> */}
               <div class="col-md-4">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-basket"></i> </div> 
                       <div class="services-desc">
                          <h4>About</h4>
                          <p>API TEST</p>
                          <button onClick={test}>click here to make api work</button>
                       </div>
                   </div>
               </div>
                {/* <!--End services Item--> */}
                
                {/* <!--Services Item--> */}
               <div class="col-md-4">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-shield"></i> </div> 
                       <div class="services-desc">
                          <h4>About1</h4>
                          <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore adipisicing. </p>
                       </div>
                   </div>
               </div>
               {/* <!--End services Item--> */}
               
               {/* <!--Services Item--> */}
               <div class="col-md-4">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-hotairballoon"></i> </div> 
                       <div class="services-desc">
                          <h4>About2</h4>
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
export default About;
