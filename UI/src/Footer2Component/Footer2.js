import './Footer2.css';
import  { useState , useEffect } from 'react';

function Footer2() {

 const [ Footer2Content , setFooter2Content ] = useState();                      
  useEffect(()=>{
    setInterval(()=>{
       if(localStorage.getItem("role")=="admin")
       {
        setFooter2Content();    
       }
       else if(localStorage.getItem("role")=="user")
       {
        setFooter2Content();    
       }                     
       else
       {
        setFooter2Content(<div>
    
            {/* <!--Start Contact--> */}
            <section id="contact" class="section parallax">
               <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                    
                          <div class="title-box text-center white">
                             <h2 class="title">Contact</h2>
                          </div>
                      </div>
         
                        {/* <!--Start contact form--> */}
                        <div class="col-md-8 col-md-offset-2 contact-form">
                        
                             <div class="contact-info text-center">
                                <p>942 457 5042</p>
                                <p>123 Pratap ward tikari betul </p>
                                <p>pawan@gmail.com </p>
                             </div>
                              
                              <form method="post">
                                 <div class="row">
                                     <div class="col-md-4">
                                         <input class="form-control" id="name" placeholder="Full Name" type="text"/>
                                     </div>
                                     <div class="col-md-4">
                                         <input class="form-control" id="email" placeholder="Your Email" type="email"/>
                                     </div>
                                     <div class="col-md-4">
                                         <input class="form-control" id="subject" placeholder="Subject" type="text"/>
                                     </div>
                                     <div class="col-md-12">
                                         <textarea class="form-control" id="message" rows="7" placeholder="Your Message"></textarea>
                                     </div>
                                     <div class="col-md-12 text-right">
                                         <button type="submit" class="btn btn-green">SEND MESSAGE</button>
                                     </div>
                                 </div>
                             </form>
                        </div>
                       {/* <!--End contact form--> */}
                </div>
                 {/* <!-- /.container--> */}
            </section>
            {/* <!--End Contact--> */}
             </div>);    
       }
    },2000);  
   },[]);
  return(<div>
      {Footer2Content }
  </div>);
}


export default Footer2;
