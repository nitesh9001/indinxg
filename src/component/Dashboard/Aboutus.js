import React ,{useEffect, Fragment}from 'react';
import DashNavbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
import img_contactus from '../../Assets/aboutus.jpg'


function Aboutus() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
   const about_us_info = {
      info:"We are professional developer and software engineer, Our developer have minimum 2 years of experience. We have seperate developer for each stack they are very dedicated to work and manage code like a pro. We follow agile method where we and client can tack work progress and can question about product. We know how to write code with optimization and well structured code based."
      }
       const team_data = [
        {
          img: "https://secure.gravatar.com/avatar/76dc2fa94ce9d14fa281a56335875f77?s=64&d=404", 
          username:"Nitesh Singh" , 
          teamMemberRole:"Full stack developer" , 
          teamMemberquotes:"Have +2 years of experience as full stack (React + Nodejs).", 
          li_link:"https://www.linkedin.com/in/nitesh9001/" ,
          insta_link:"",
          twiter_link:"",
          email_link:"indinxg@gmail.com" 
        },{
          img: "https://avatars.githubusercontent.com/u/72046474?v=4", 
          username:"Saurabh Singh" , 
          teamMemberRole:"Mobile developer" , 
          teamMemberquotes:"Have +3 years of experience as full stack (Flutter + Nodejs).", 
          li_link:"" ,
          insta_link:"",
          twiter_link:"",
          email_link:"indinxg@gmail.com" 
        },{
          img: "https://avatars.githubusercontent.com/u/72046474?v=4", 
          username:"Deepak Yadav",
          teamMemberRole:"Mobile developer" , 
          teamMemberquotes:"Have +2 years of experience as full stack (Flutter + Native) .", 
          li_link:"" ,
          insta_link:"",
          twiter_link:"",
          email_link:"indinxg@gmail.com" 
        },{
          img: "https://lh3.googleusercontent.com/a-/ACNPEu8_Hk85F_KPIwXbbJfRAQZfvpZG_8xpcEn92Ho2jA=s128-p-k-rw-no", username:"Rahul Gupta" , teamMemberRole:"Angular developer" , teamMemberquotes:"Have +2 years of experience as full stack (Angular).", 
          li_link:"" ,
          insta_link:"",
          twiter_link:"",
          email_link:"indinxg@gmail.com" 
        }
      ]
    const Skills_data = [
      {type:"React js" , skill:"90%"},
      {type:"React Native" , skill:"80%"},
      {type:"Flutter" , skill:"90%"},
      {type:"Node js" , skill:"80%"},
      {type:"Angular" , skill:"80%"},
    ]
    return (
        <Fragment>
         <div className="about_us_page_section">
        <DashNavbar/>
          <div className="services_page_main_inner_section">
          <div className="services_page_inner_side_contnet">
              <div className="services_contnet_hover_image_content_div">
              <h3>Who We Are</h3>
              <p className="tagline_services">Our professional team try to transform your ideas into a real product and provide 24 * 7 support.</p>
              <p className="tagline_services_det">{about_us_info.info}</p>
              <button className="btn_services_css sol">Start Now <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i> </button> 
              </div>
              </div>
              <div className="services_page_inner_side_image">
             <img src={img_contactus} alt="img" />
          </div>
           </div>
           <div className="about_us_page_section_inner_for_ourskills">
           <div className="our_team_section">
                 <span className="our_word_design">Our</span><span className="team_word_design">Skills</span>
             </div>
             <div className="about_us_split_ourskills">
               <div className="about_us_split_ourskills_why_people_like_us">
                   <h3>Why People Like Us</h3>
                   <p>People like us because we deliver what we say or bound, our team believe in timely delivery and high code quality which easy to manage. We also provide 1 year free service* and client have freedom to make wish while development process. </p>
                   <p>People like us because we always feel a compassion in other's dream to convert into reality. </p>
               </div>
               <div className="about_us_split_ourskills_we_are_good_in">
                  <h3>We Are Good in</h3>
                  <p>We are good in stacks like React, Nodejs , MongoDB, Flutter, Redux, Angular, Recat native, SEO etc.</p>
                  {Skills_data.map((skill_set,index)=>
                   <div key={index} className="about_us_skills_required">
                   <span className="about_type_skills">{skill_set.type}</span>: 
                    <div className="about_skill_back_skills"> 
                    <span style={{ paddingLeft: `${skill_set.skill}` }} className="skills_hover_image">{skill_set.skill}</span></div>
                  </div>
                  )}
               </div>
             </div>
           </div>
           <div className="about_us_page_section_inner_for_team">
             <div className="our_team_section">
                 <span className="our_word_design">Our</span><span className="team_word_design">Team</span>
             </div>
            <div className="meet_our_talented_team">
             <span className="heading_for_team">Meet Our Qualified Team </span>
                  
            <div className="grid_collection_section_team">
            {team_data.map((data ,index)=>
                <div className="flex_equal_team_card" key={index}>
                     <div className="img_team_card">
                       <img src={data?.img}/>
                     </div>
                     <div className="content_team_card">
                       <span className="head_team_card">
                         {data.username}     
                       </span>
                     <span className="role_team_card">
                     {data.teamMemberRole}
                     </span>
                     <span className="quotes_team_card">
                     {data.teamMemberquotes}
                     </span>
                     </div>
                     <div className="social_icon_team_card_group">
                            <div className="social_icon_team_card">
                               <a className="link_social_icon_card" onClick={() => window.open(data?.li_link, "_blank") }><i class="fa fa-linkedin" ></i></a>
                            </div>
                            {/* <div className="social_icon_team_card">
                            <Link to="/" className="link_social_icon_card"><i class="fa fa-twitter" ></i></Link>
                            </div> */}
                            <div className="social_icon_team_card">
                            <a href='mailto:indinxg@gmail.com' className="link_social_icon_card"><i class="fa fa-envelope" ></i></a>
                            </div>
                            {/* <div className="social_icon_team_card">
                            <Link to="/" className="link_social_icon_card"><i class="fa fa-instagram" ></i></Link>
                            </div> */}
                     </div>
                </div>
                )}
                </div>
            </div>
           </div>
        <Footer/>
          </div>
        </Fragment> 
    )
 }

export default Aboutus
