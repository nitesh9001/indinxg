import React ,{useEffect}from 'react'
import DashNavbar from '../Layout/Navbar'
import notfound from '../../Assets/notfound.png' 
import { Link } from 'react-router-dom'

function Notfound() {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    return (
        <div className="main_section_page_not_found">
        <DashNavbar/>
            <div className="not_found_main_section_page">
                <div className="section_not_found_content">
                <div className="manage_inner_content_of_pagenotfound">
                  <p className="title_of_page_not_found">Oops ! Page not found.</p>
                  <p className="info_of_page_not_found">Sorry for trouble, link might get break ,return back to home page. We are trying to fix it.</p>
                 <Link to="/indinxg">
                 <button className="btn_services_css sol">Return Home <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i> </button>
                 </Link>
                </div>
                </div>
                <div className="section_not_found_img">
                <img src={notfound} alt="not found error"/>
                </div>
            </div>
        </div>
    )
}

export default Notfound
