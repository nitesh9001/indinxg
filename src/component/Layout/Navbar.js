import React,{useState} from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../../Assets/logo.png';

export default function DashNavbar() {
   
  const [dropdown, setdropdown] = useState(false);
  const openDropdown =(e)=>{
    e.preventDefault();
    setdropdown(!dropdown)
  }
    return (
        <div className="nav_bar_pages">
          <div className="nav_bar_pages_parts">
          <div className="nav_bar_logo">
           <img src={logo} alt="Logo" className="logo_header" />
           </div>
          </div>
          <div className="nav_bar_pages_parts" >
          
          <div className="nav_navbar">
            <NavLink to="/indinxg" className="navlink_pages" id="active">Home</NavLink>
            <NavLink to="/services" className="navlink_pages" >Services</NavLink>
            <NavLink to="/blog" className="navlink_pages">Blog</NavLink>
            <NavLink to="/about_us_and_our_team" className="navlink_pages">About Us</NavLink>
            <NavLink to="/contact_us"  className="navlink_pages">Contact Us</NavLink>
          </div>
           </div>
            {
              dropdown ?<div className="nav_bar_humberger">
              <i class="fa fa-close" onClick={openDropdown}></i>
               <div className="menu_drop_down_list">
            <NavLink to="/indinxg" className="navlink_pages_dropdown" id="active">Home</NavLink>
            <NavLink to="/services" className="navlink_pages_dropdown" >Services</NavLink>
            <NavLink to="/blog" className="navlink_pages_dropdown">Blog</NavLink>
            <NavLink to="/about_us_and_our_team" className="navlink_pages_dropdown">About Us</NavLink>
            <NavLink to="/contact_us"  className="navlink_pages_dropdown">Contact Us</NavLink>
            <NavLink to="/try_a_solution"  className="navlink_pages_dropdown"> Try Solution</NavLink>   
            <NavLink to="/contact_us"  className="navlink_pages_dropdown">Support</NavLink>   
            </div> 
            </div>
            : 
            <div className="nav_bar_humberger">
            <i class="fa fa-bars" onClick={openDropdown}></i>
            </div>}
          </div>
        
    )
}
