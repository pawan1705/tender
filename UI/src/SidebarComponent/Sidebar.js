import './Sidebar.css';


function Sidebar() {
  return (<div id="sidebar">
    
  {/* <!--Start Services--> */}
   <section id="services" class="section">
        <div class="container">
            <div class="row">
            
                 <div class="title-box text-center">
                    <h2 class="title">Services</h2>
                 </div>
              
               {/* <!--Services Item--> */}
               <div class="col-md-4">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-basket"></i> </div> 
                       <div class="services-desc">
                          <h4>Development</h4>
                          <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore adipisicing. </p>
                       </div>
                   </div>
               </div>
                {/* <!--End services Item--> */}
                
                {/* <!--Services Item--> */}
               <div class="col-md-4">
                   <div class="services-box">
                       <div class="services-icon"> <i class="icon-shield"></i> </div> 
                       <div class="services-desc">
                          <h4>Web Design</h4>
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
                          <h4>SEO</h4>
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
export default Sidebar;
