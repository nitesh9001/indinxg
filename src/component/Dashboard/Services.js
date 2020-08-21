import React,{Fragment,useEffect,useState} from 'react';
import DashNavbar from '../Layout/Navbar';
import img_contactus from '../../Assets/services.svg'
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
    const services_data=[
        {id:"1", servicesicon:"fa fa-cogs" , services_name:"Service_one" ,  services_deatils:"sdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbgdsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
       {id:"2", servicesicon:"fa fa-cogs" , services_name:"Service_one" ,  services_deatils:"dsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbgsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
       {id:"3", servicesicon:"fa fa-cogs" , services_name:"Service_one",   services_deatils:"dsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg sdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
       {id:"4", servicesicon:"fa fa-cogs" , services_name:"Service_one",  services_deatils:"dsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg sfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjm sfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjm"},
       {id:"5", servicesicon:"fa fa-cogs" , services_name:"Service_one",  services_deatils:"dsdnjd dbfjbfj hjbthjbs hbsfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjmvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
       {id:"6", servicesicon:"fa fa-cogs" , services_name:"Service_one",  services_deatils:"dsdnjd dbfjbfj hjbthjbs hbsfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjmvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
       {id:"7", servicesicon:"fa fa-cogs" , services_name:"Service_one",  services_deatils:"dsdnjd dbfjbfj hjbthjbs hbsfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjmvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
       {id:"8", servicesicon:"fa fa-cogs" , services_name:"Service_one",  services_deatils:"dsdnjd dbfjbfj hjbthjbs hbsfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjmvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg"},
    ]
    return (
        <Fragment>
        <div className="services_page_main_section_upper">
        <DashNavbar/>
         <div className="services_page_main_inner_section">
          <div className="services_page_inner_side_contnet">
              <div className="services_contnet_hover_image_content_div">
              <h3>Services We provide</h3>
              <p className="tagline_services">Our professional team try to transform your ideas into a real product and provide 24 * 7 support.</p>
              <p className="tagline_services_det">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum architecto omnis iusto unde velit assumenda consequuntur ullam quod cupiditate, deserunt, optio modi ea sapiente tenetur ipsam vero quis dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore enim, alias, aperiam dolores sunt consectetur delectus id natus quidem eum ipsam, consequatur sint incidunt! Laboriosam natus non perferendis voluptas quos?</p>
              <button className="btn_services_css sol" onClick={opentry_solution}>Start Now <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i> </button> 
              </div>
              </div>
              <div className="services_page_inner_side_image">
             <img src={img_contactus} alt="img" />
          </div>
         </div>

          <div className="services_page_main_content_parallex_effect">
          {
              services_data.map((data, index)=>
             <div className="felx_card_for_services" key={data.id}>
            <div className="flex_card_for_services_top_level_icon">
                <span className="icon_span"><i class={data.servicesicon}  style={{color:"white"}}></i></span>
            </div>
            <div className="flex_card_for_services_heading_title">
                <p className="p_tag_for_heading_style">{data.services_name}</p>
            </div>
            <div className="felx_card_for_services_tagline_bottom">
                <p className="p_tag_for_tagline_style">{data.services_deatils.slice(0,220)}</p>
            </div>
            <div className="felx_card_for_services_link_to_readmore">
                <Link to="/" className="link_for_read_more_flex_card">Read more <i class="fa fa-arrow-right"></i></Link>
            </div>
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
