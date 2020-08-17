import React ,{useEffect, Fragment}from 'react';
import DashNavbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
import img_contactus from '../../Assets/aboutus.jpg'


function Aboutus() {
  // useEffect(()=>{
  //   window.scrollTo(0,0);
  // },[])
   const about_us_info = {
     info:" iipsum, dolor sit amem, libero consequaturetur, adipisicing elit. Rem consequatur doloribus harum officia, modi assumenda enim quod similique itaque accusantium nisi, commodi nam labore sunt, vitae obcaecati perspiciatis. Tenetur, repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta placeat tenetur, autem quos voluptatum eveniet officia aliquam? Facilis, expedita. Nostrum placeat animi vel quos fugit totam eligendi iure necessitatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta placeat tenetur, autem quos voluptatum eveniet officia aliquam? Facilis, expedita. Nostrum placeat animi vel quos fugit totam eligendi iure necessitatibus."
     }
       const team_data = [
      {username:"Nitesh Singh" , teamMemberRole:"Web developer" , teamMemberquotes:"lorem epsumhbh yfhjfjhf jgjdghjdff hjvdhfv bzhdffh", li_link:"" ,insta_link:"",twiter_link:"",email_link:"" }
      ,{username:"Akash Nigam" , teamMemberRole:"Marketing" , teamMemberquotes:"lorem epsumhbh yfhjfjhf jgjdghjdff hjvdhfv bzhdffh", li_link:"" ,insta_link:"",twiter_link:"",email_link:"" }
    ]
    const Skills_data = [
      {type:"React js" , skill:"70%"},
      {type:"React Native" , skill:"80%"},
      {type:"Flutter" , skill:"80%"},
      {type:"Node js" , skill:"90%"},
      {type:"ML/AI" , skill:"70%"},
      {type:"PHP" , skill:"65%"}
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
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ut quasi deleniti in et magnam tenetur doloribus provident nostrum voluptatem iste ratione quis possimus commodi, adipisci magni recusandae perferendis ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias eligendi pariatur sed enim vel rem corporis nesciunt minima harum quo, asperiores provident voluptatibus praesentium aut facere, maxime officiis temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum eligendi dolorum porro laudantium facere aperiam corporis voluptate ipsa expedita asperiores quis impedit culpa doloribus, dignissimos at nostrum exercitationem quo!</p>
               </div>
               <div className="about_us_split_ourskills_we_are_good_in">
                  <h3>We Are Good in</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, voluptates. Aut, doloribus. Dolorum quidem dolores et rem aut consectetur quos non expedita dolore. Voluptate vitae accusamus rem modi aliquam atque!</p>
                  {Skills_data.map((skill_set,index)=>
                   <div key={index} className="about_us_skills_required">
                   <span className="about_type_skills">{skill_set.type}</span>: 
                    <div className="about_skill_back_skills"> 
                    <span className="skills_loader_progress_bar" style={{ paddingLeft: `${skill_set.skill}` }} className="skills_hover_image">{skill_set.skill}</span></div>
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
                  <p className="quotes_for_team">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto minus, tempore quis id itaque a sunt tenetur autem impedit odit dolores quia voluptatum perspiciatis eius quos hic nihil facilis!
                  </p>
            <div className="grid_collection_section_team">
            {team_data.map((data ,index)=>
                <div className="flex_equal_team_card" key={index}>
                     <div className="img_team_card">
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
                            <Link to="/" className="link_social_icon_card"><i class="fa fa-linkedin" ></i></Link>
                            </div>
                            <div className="social_icon_team_card">
                            <Link to="/" className="link_social_icon_card"><i class="fa fa-twitter" ></i></Link>
                            </div>
                            <div className="social_icon_team_card">
                            <Link to="/" className="link_social_icon_card"><i class="fa fa-envelope" ></i></Link>
                            </div>
                            <div className="social_icon_team_card">
                            <Link to="/" className="link_social_icon_card"><i class="fa fa-instagram" ></i></Link>
                            </div>
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
