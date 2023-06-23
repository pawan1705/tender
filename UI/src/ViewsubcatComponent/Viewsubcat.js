import './Viewsubcat.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { _apiURLcategory , _apiURLsubcategory } from '../apiURL';
import {Link,useParams} from 'react-router-dom';


function Viewsubcat() {

    const params =useParams();
    // const [subCatName , setSubCatName] = useState();
    const [ cDetails , setCategoryDetails ] = useState([]);  

    useEffect(()=>{
        axios.get(_apiURLcategory+"fetch").then((result)=>{
          setCategoryDetails(result.data);
        });   
      },[]);  

  return (<div id="sidebar">
    
  {/* <!--Start Services--> */}
   <section id="services" class="section">
        <div class="container">
            <div class="row">
               <div class="col-md-12">
                       <div class="services-desc">
                       <center><h4> sub Category List {params.catnm}</h4>
                          <div id="category_main">
  {
 cDetails.map(
    imgs => {
        const image = '/assets/uploads/caticons/'+imgs.caticonnm;
        const path = '/viewsubcat/'+imgs.catnm;
    return(     
    <Link to={path} >    
    <div class="category_part">
    <img src={image} height="100" width="150" />
    <br/>
    <b>{imgs.catnm}</b>
    </div></Link>)
    } 
 )  
}
                            </div></center>
                       </div>
               </div>
                {/* <!--End services Item--> */}
                
               
            </div>
        </div>
         
   </section> 
   </div>


      );
}
export default Viewsubcat;
