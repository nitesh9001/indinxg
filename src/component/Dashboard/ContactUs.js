import React, { Fragment } from 'react'
import DashNavbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
function ContactUs() {
    // const phone_no = "+91 7905985350";
    // function copy_number(e){
    //     e.preventDefault();
    //     navigator.clipboard.writeText(phone_no)    
    // }
    return (
        <Fragment>
        <DashNavbar/>
        <div className="conatct_us_page_main_section">
          <div className="hover_main_contact_us_section">
             <div className="flex_box_conatct_information">
             <div className="inner_box_container">
             <div className="highlight_dot">
       <h6 className="titleformidheading" style={{color:"white"}}>Contact Details</h6>
       </div>
             <p className="p_tag_for_heading">Our Contact Memo</p>
              <p className="p_tag_for_content">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
              </p>
              <div className="list_of_contact_type">
                <div className="icon_of_contact_type">
                 <i class="fa fa-globe" style={{color:"#FAAD3B"}}></i>
                </div>
                <div className="details__of_contact_details">
                    <div className="upper_part_of_contcat_details">
                    <span className="our_list_text">OUR ADDRESS:</span>
                    </div>
                    <div className="lower_part_of_contcat_details">
                       <span className="our_list_text_info">Noaida , UttarPradesh India</span>
                    </div>
                </div>
              </div>
              <div className="list_of_contact_type">
                <div className="icon_of_contact_type">
                 <i class="fa fa-envelope" style={{color:"#FAAD3B"}}></i>
                </div>
                <div className="details__of_contact_details">
                    <div className="upper_part_of_contcat_details">
                    <span className="our_list_text">OUR Mail:</span>
                    </div>
                    <div className="lower_part_of_contcat_details">
                       <span className="our_list_text_info">info@indinxg.com</span>
                    </div>
                </div>
              </div>
              <div className="list_of_contact_type">
                <div className="icon_of_contact_type">
                 <i class="fa fa-phone" style={{color:"#FAAD3B"}}></i>
                </div>
                <div className="details__of_contact_details">
                    <div className="upper_part_of_contcat_details">
                    <span className="our_list_text">OUR PHONES:</span>
                    </div>
                    <div className="lower_part_of_contcat_details">
                       <span className="our_list_text_info">
                           7905985350,8009778069
                       </span>
                    </div>
                </div>
              </div>
             </div>
             </div>
             <div className="flex_box_contact_form">
             <div className="highlight_dot">
       <h6 className="titleformidheading">Get in Touch </h6>
       </div>
       <h1>Ready to Get Started</h1>
                   <form className="form_contact_us">
                      <input type="text" placeholder="Enter Your Name" /><br/>
                      <input type="email" placeholder="Enter Your Email" /><br/>
                      <textarea placeholder="Message..."></textarea>
                 <button className="btn_services_css expert"> Send Message <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#17a2b8"}}></i></button>
                   </form>
             </div>
          </div>
        </div>
        <Footer/>
       

        </Fragment> 
    )
}

export default ContactUs
