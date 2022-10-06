import React, { Fragment, useEffect, useState } from 'react'
import DashNavbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import image from '../../Assets/testimonials_banner.png'
function GiveTestimonial() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [c_name, setCName] = useState("");
  const [thank, setThank] = useState(false)
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const sendMail = () => {
    if (email) {
      const data = {
        name: name,
        email: email,
        message: message,
        c_name: c_name,
        taken: taken
      }
      fetch(
        'https://indinxg-fe16b-default-rtdb.firebaseio.com/testi.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )
        .then((res) => setThank(true))
        .catch((err) => alert("There is some issue"))
        .finally(() => {
          setMessage("");
          setName("");
          setEmail("");
          setCName("");
          setTaken(false)
        })
    }
  }
  return (
    <Fragment>
      <DashNavbar />
      <div className="testi_page_main_section">
        <div className="hover_main_testi_section">
          <div className="flex_box_testi_information">
            <img alt="" src={image} />
          </div>
          <div className="flex_box_contact_form">
            <div className="highlight_dot">
              <h6 className="titleformidheading">Testimonial Form </h6>
            </div>
            {thank && <div>
               <p style={{textAlign:"center", fontSize: "24px", color: "green", fontWeight:"bold"}}>Thank you <br/>Your testimonial is submitted</p>
            </div>}
            <p className="quotes_testi">We all know testimonial carries a lot of important to us.Word of mouth has always been an extremly powerfultool. So we get a better vision to help you far better next time.Thank you for taking time to complete our Testimonial form</p>
            <div className="form_contact_us">
              <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" /><br />
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" /><br />
              <input type="text" name="c_name" value={c_name} onChange={(e) => setCName(e.target.value)} placeholder="Enter Your Company Name" /><br />
              <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Quotes For Testimonails..."></textarea><br />
              <div className="flex_input">
                <input value={taken} onChange={(e) => setTaken(e.target.checked)} type="checkbox" placeholder="Have you taken our services ?" />
                <label>Have you taken our services ?</label>
              </div>
              <button className="btn_services_css expert" onClick={sendMail}> Send Testimonial <i class="fa fa-long-arrow-right" aria-hidden="true" style={{ color: "#17a2b8" }}></i></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />


    </Fragment>
  )
}

export default GiveTestimonial
