import React,{Fragment,useEffect,useState} from 'react';
import DashNavbar from '../Layout/Navbar';
import img_contactus from '../../Assets/services.png'
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
import Trysolution from '../Layout/Trysolution';



function Services() {
    const [opentry, setopentry] = useState(false)
  const opentry_solution=(e)=>{
    e.preventDefault();
    setopentry(!opentry)
  }
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    const service_data=[
      {id:"1",
       servicesicon:"fa fa-cogs" ,
       services_name:"Website Building",
       services_deatils:"A great website should generate qualified leads. When customers aren’t sure which button to click on or what information to read next, it can lead to them bouncing off your site. This leads to one of the most important considerations: is your website guiding your leads toward more meaningful interactions with your brand as soon as they visit your homepage? If you’re not sure, keep reading with your website in mind. That's where we came into picture to provide best of attraction and real time enagagment" ,
       service_img: 'appsoft.png' , 
       service_animation:"fade-left"
      },
      {
       id:"2", 
       servicesicon:"fa fa-cogs" , 
       services_name:"Application development",  
       services_deatils:"we offer full-cycle of mobile app development services including planning, designing, integration, and management. Be it a customer-oriented or enterprise-level application, we provide end-to-end mobile application development solutions across distinctive verticals. Enhance your business growth by developing a simplified & user-friendly app for smartphones, tablets, or both." , 
       service_img:"pcsoft.png", 
       service_animation:"fade-right"},
     {id:"3",
      servicesicon:"fa fa-cogs" ,
      services_name:"SEO optimization" ,  
      services_deatils:"Yes, You'er thinking correct it is important in today world to Optimize your website according to serach engine so your website rank on top.We used our talents, to create our values, structure, process, and custom digital marketing strategies. Creating an in-house culture, that lets these behaviors and actions live and grow. It sounds simple, but it really works.",
      service_img:"seo.png", 
      service_animation:"fade-left"},
     {id:"4", 
      servicesicon:"fa fa-cogs" , 
      services_name:"Software as a Service(SAAS)",   
      services_deatils:"SaaS means Software as a Service. It’s a cloud-based service in which rather than downloading software to a desktop PC or business network, an app is accessed via an internet browser instead. The software app could be anything, ranging from office software to unified communications among an array of other available business applications. In software as a service, a user need not pay for the software itself. It works as a rental, in which users could use it for a specific time and pay for software usage. An offshore outsourcing like Tatvasoft could provide SaaS solutions to organizations.",
      service_img:"saas.png", 
      service_animation:"fade-right"},
     {id:"5", 
     servicesicon:"fa fa-cogs" , 
     services_name:"Digital Marketing",  
     services_deatils:"We provide digital marketing services to all size of businesses with an opportunity to market their brand 24*7 with cost efficacy. From SMEs, startups to enterprises to multiple-location companies, we help you  to expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location. We follows a systematic approach to ensure all our online marketing efforts deliver profitable results. We help you to break through your growth plateau and see profound ROI with a our digital marketing specialists.",
     service_img:"digital.png",
     service_animation:"fade-left"},
    ];
    return (
        <Fragment>
        <div className="services_page_main_section_upper">
        <DashNavbar/>
         <div className="services_page_main_inner_section">
            <div className="services_page_inner_side_contnet">
              <div className="services_contnet_hover_image_content_div">
              <h3>Services We provide</h3>
              <p className="tagline_services">Our professional team try to transform your ideas into a real product and provide 24 * 7 support.</p>
              <p className="tagline_services_det">
                We believe that customer service is not a department ,its an attitude, one must have. We turn your ideas and concepts into real performant website /App . We help you to acheive your goals whatever it takes. Bond your trust wuth us it unites your idea and our hardwork into a reality. I know you have idea that will change the world so be it pass it to us we make it true.
              </p>
              <button className="btn_services_css sol" onClick={opentry_solution}>Start Now <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i> </button> 
              </div>
            </div>
            <div className="services_page_inner_side_image">
             <img src={img_contactus} alt="img" />
            </div>
         </div>

          <div className="services_page_main_content_parallex_effect">
          {
              service_data.map((data, index)=>
             <div className="felx_card_for_services" key={data.id}>
            <div className="flex_card_for_services_top_level_icon">
                <span className="icon_span"><i class={data.servicesicon}  style={{color:"white"}}></i></span>
            </div>
            <div className="flex_card_for_services_heading_title">
                <p className="p_tag_for_heading_style">{data.services_name}</p>
            </div>
            <div className="felx_card_for_services_tagline_bottom">
                <p className="p_tag_for_tagline_style">{data.services_deatils}</p>
            </div>
            {/* <div className="felx_card_for_services_link_to_readmore">
                <Link to="/" className="link_for_read_more_flex_card">Read more <i class="fa fa-arrow-right"></i></Link>
            </div> */}
          </div>
        )
         }
          </div>
          {
         opentry ?  <Trysolution  opentry={opentry} opentry_solution={opentry_solution} />:null
       }
        <Footer/>
        </div>
        </Fragment>
    )
}

export default Services
