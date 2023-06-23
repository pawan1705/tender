import './Header.css';
import  { useState , useEffect } from 'react';

function Header() {

 const [ HeaderContent , setHeaderContent ] = useState();                      
  useEffect(()=>{
    setInterval(()=>{
       if(localStorage.getItem("role")=="admin")
       {
        setHeaderContent();    
       }
       else if(localStorage.getItem("role")=="user")
       {
        setHeaderContent();    
       }                     
       else
       {
        setHeaderContent();    
       }
    },2000);  
   },[]);
  return(<div>
      { HeaderContent }
  </div>);
}
