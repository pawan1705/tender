
import './App.css';
import React from 'react';
import Nav from './NavComponent/Nav';
import Footer from './FooterComponent/Footer';
import Footer2 from './Footer2Component/Footer2';
import Banner from './BannerComponent/Banner';
import Main from './MainComponent/Main';
import Sidebar from './SidebarComponent/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Header from './HeaderComponent/Header';
import About from './AboutComponent/About';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Adminhome from './AdminhomeComponent/Adminhome';
import Userhome from './UserhomeComponent/Userhome';
import Searchtenders from './SearchtendersComponent/Searchtenders';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddcategoryComponent/Addcategory';
import Addsubcategory from './AddsubcategoryComponent/Addsubcategory';
import Viewsubcat from './ViewsubcatComponent/Viewsubcat';

function App() {
  return (
    <div>
    <Header/>
   <Nav/>
  <Banner/>
  {/* <Main/> */}
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Service" element={<Service/>}></Route>
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/admin" element={<Adminhome/>}></Route>
    <Route path="/manageusers" element={<Manageusers/>}></Route>
    <Route path="/addcategory" element={<Addcategory/>}></Route>
    <Route path="/addsubcategory" element={<Addsubcategory/>}></Route>
    <Route path="/user" element={<Userhome/>}></Route>
    <Route path="/searchtenders" element={<Searchtenders/>}></Route>
    <Route path="/viewsubcat/:catname
    " element={<Viewsubcat/>}></Route>
    <Route path="/Logout" element={<Logout/>}></Route>
  </Routes>
  
  {/* <Sidebar/> */}
  <Footer2/>
<Footer/>

</div>
  );
}



export default App;
