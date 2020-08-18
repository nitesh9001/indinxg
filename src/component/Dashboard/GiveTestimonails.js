import React, { Fragment,useEffect } from 'react'
import DashNavbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import image from '../../Assets/testimonials_banner.png'
function GiveTestimonial() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
    return (
        <Fragment>
        <DashNavbar/>
        <div className="testi_page_main_section">
          <div className="hover_main_testi_section">
             <div className="flex_box_testi_information">
             <img alt="" src={image}/>
             </div>
             <div className="flex_box_contact_form">
             <div className="highlight_dot">
       <h6 className="titleformidheading">Testimonial Form </h6>
       </div>
       <p className="quotes_testi">We all know testimonial carries a lot of important to us.Word of mouth has always been an extremly powerfultool. So we get a better vision to help you far better next time.Thank you for taking time to complete our Testimonial form</p>
                   <form className="form_contact_us">
                      <input type="text" placeholder="Enter Your Name" /><br/>
                      <input type="email" placeholder="Enter Your Email" /><br/>
                      <input type="text" placeholder="Enter Your Cpmany Name" /><br/>
                      <textarea placeholder="Quotes For Testimonails..."></textarea><br/>
                      <div className="flex_input">
                      <input type="checkbox" placeholder="Have you taken our services ?" />
                      <label>Have you taken our services ?</label>
                      </div>
                 <button className="btn_services_css expert"> Send Testimonial <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#17a2b8"}}></i></button>
                   </form>
             </div>
          </div>
        </div>
        <Footer/>
       

        </Fragment> 
    )
}

export default GiveTestimonial
