import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from '../../Assets/logo.svg';
  
const Footer= () => {
    return (        
             <div className="footer">
              <div className="footer_container">
                 <div className="footer_content">
                   <img className="footer_para_img" src={logo} alt="Loading..." />
                   <p className="footer_para">Trust us we make you ahead !!</p>
                   <h3 className="footer_heading">About us</h3>
                   <p className="footer_para">Our talent, your results– this is the premise behind indinxg Solutions.Get your optimized solution .Our team follow AGILE .Our commitment to service and quality is reflected in our work</p>
                 </div> 
                 <div className="Information">
                 <h3 className="footer_heading">Information</h3>
                 <ul>
                  <li className="footer_list">
                    <NavLink className="footer_link" to="/about_us_and_our_team">About us</NavLink>
                  </li>
                  <li className="footer_list">
                    <NavLink  className="footer_link"  to="/notfound">Blog</NavLink>
                  </li>
                  <li className="footer_list">
                   <NavLink  className="footer_link"  to="/give_testimonails">Testinomials</NavLink>
                  </li>
                  <li className="footer_list">
                   <NavLink  className="footer_link"  to="/notfound">Events</NavLink>
                  </li>
                </ul>
               </div>
                 <div className="helpfulLinks">
                  <h3 className="footer_heading">Helpful Links</h3>
                <ul>
                  <li className="footer_list">
                   <NavLink  className="footer_link"  to="/services">Services</NavLink>
                  </li>
                  <li className="footer_list">
                   <NavLink  className="footer_link"  to="/contact_us">Support</NavLink>
                  </li>
                  <li className="footer_list">
                   <NavLink  className="footer_link"  to="/terms_and_condition">Terms & Conditions</NavLink>
                  </li>
                  <li className="footer_list">
                   <NavLink  className="footer_link"  to="/privacy_policy">Privacy Policy</NavLink>
                  </li>
                </ul>
               </div>
                 <div className="Subcribe">
                    <h3 className="footer_heading">Subscribe more info</h3>
                   <form className="footer_form">
                   <input className="footer_input" type="email" placeholder="Enter Your Email"/>
                     <button className="btn_services_css sol">Subscribe</button>
                   </form>
                   <ul className="footer_contact">
                   <h3 className="footer_heading">Contact Us</h3>
                      <li className="footer_list">
                        <p className="footer_contact"><i class="fa fa-phone" style={{color:"white", margin:"0 10px"}}></i>+91 7905985350</p>
                      </li>
                      <li className="footer_list">
                        <p className="footer_contact"><i class="fa fa-envelope" style={{color:"white", margin:"0 10px"}}></i>indinxg@gmail.com</p>
                      </li>
                   </ul>
               </div>
           </div>
           <hr className="footer_line"/>
           <div className="footer_social_icon_container">
           <div  className="list_of_social_accounts">
            <a href='indinxg@gmail.com'>
            <i class="fa fa-envelope" aria-hidden="true" ></i>
            </a>
           </div>
           <div  className="list_of_social_accounts">
             <i class="fa fa-instagram" aria-hidden="true" ></i>
           </div>
           <div  className="list_of_social_accounts">
             <i class="fa fa-linkedin" aria-hidden="true" ></i>
           </div>
            </div>
            <div className="bottom_privacy_foter">© 2020 indinxg Solutions,<span style={{color:"#FAAD3B"}}> All Rights Reserved </span> &nbsp; | <Link to="https://indinxg_solution.com/terms-and-policies/" style={{color:"",textDecoration:"none"}}> T&amp;C | Privacy Policy&nbsp;</Link></div>
          </div>
          );
      }
export default Footer;