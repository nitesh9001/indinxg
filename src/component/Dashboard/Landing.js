import React ,{Fragment,useEffect,useState } from 'react';
import DashNavbar from '../Layout/Navbar';
import img_landing from '../../Assets/landingImg.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import method from '../../Assets/agile.png';
import technology from '../../Assets/technology.svg';
import system from '../../Assets/systemsIntegration.svg';
import inovative from '../../Assets/inovation.png';
import ScrollToTop from '../Layout/scrollToTop';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Aos from 'aos';
import Footer from '../Layout/Footer'
import "aos/dist/aos.css";
import '../../slider-Animation.css';
import ProgreeBarPage from '../Layout/ProgreeBarPage';
import { Link } from 'react-router-dom';
import Trysolution from '../Layout/Trysolution';
 
function Landing() {
  const [opentry, setopentry] = useState(false)
  const opentry_solution=(e)=>{
    e.preventDefault();
    setopentry(!opentry)
  }
    useEffect(()=>{
      Aos.init({duration:1000,
        offset: 100,
        easing: 'ease-in-sine',
        delay: 1,
        disable: 'mobile'})
    },[]);
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
    const service_data=[
      {id:"1",
       servicesicon:"fa fa-cogs" ,
       services_name:"Service_one",
       services_deatils:"sdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbgdsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg" ,
       service_img: 'appsoft.png' , 
       service_animation:"fade-left"},
     {id:"2",
      servicesicon:"fa fa-cogs" ,
      services_name:"Service_one" ,  
      services_deatils:"dsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbgsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg",
      service_img:"seo.png", 
      service_animation:"fade-right"},
     {id:"3", 
      servicesicon:"fa fa-cogs" , 
      services_name:"Service_one",   
      services_deatils:"dsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg sdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg",
      service_img:"saas.png", 
      service_animation:"fade-left"},
     {id:"4", 
     servicesicon:"fa fa-cogs" , 
     services_name:"Service_one",  
     services_deatils:"dsdnjd dbfjbfj hjbthjbs hbvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg sfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs hfbsfbkjf fbhfbsjnf snfbuisbsmnbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjm" , 
     service_img:"pcsoft.png", 
     service_animation:"fade-right"},
     {id:"5", 
     servicesicon:"fa fa-cogs" , 
     services_name:"Service_one",  
     services_deatils:"dsdnjd dbfjbfj hjbthjbs hbsfbshfbhjf nf jhfbsfbkjf fbhfbsjnf snfbuisbsmnf jhfbjf skfnsjk msfnisfbskmf skjfbjs fjskfbjhsfn, fsjkfbshf sm,fui  f hfvjsf snfbusifbskf mnbfuidsbfmnsfbuisf nmbfuzygfsnf nmbfuisbf smnf hsgfsf sn nhsvfusdbfhjmvxbcvjbxjbvs bgsbjbggbs ghbfgbhd hsbhbhgbdg hbhjbghdg jjhbghdbdh arbhrrhuttbhfu hfithigt  ahsrright jaifr  ffh nitesh skimt thinghah gfbg",
     service_img:"digital.png",
     service_animation:"fade-left"},
  ]

      const content = [
        {
          title: "Vulputate Mollis Ultricies Fermentum Parturient",
          description:"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
          image: "https://i.imgur.com/ZXBtVw7.jpg",
          user: "Luan Gjokaj",
          userProfile: "https://i.imgur.com/JSW6mEk.png"
        },
        {
          title: "Tortor Dapibus Commodo Aenean Quam",
          description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
          image: "https://i.imgur.com/DCdBXcq.jpg",
          user: "Erich Behrens",
          userProfile: "https://i.imgur.com/0Clfnu7.png"
        },
        {
          title: "Phasellus volutpat metus",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
          image: "https://i.imgur.com/DvmN8Hx.jpg",
          user: "Bruno Vizovskyy",
          userProfile: "https://i.imgur.com/4KeKvtH.png"
        }
      ];
       return (
       <Fragment>
       <ProgreeBarPage />
       <DashNavbar />
       <div className="full_display_screen_windows"  >
         <div className="Inner_body_landing">
           <div className="img_text width_30" >
             <div className="one"></div>
              <div className="content_landing">
               <h1 className="taglines_up" data-aos="fade-down">
                   An Idea <br/> For Better Advice
               </h1>
               <h1 className="taglines_down" data-aos="fade-right">
                   Software Solutions
               </h1>
               <br/>
              <div className="quotes_under_tagline">
               <p className="quotes_line">Our talent, your results– this is the premise behind indinxg Solutions.Get your optimized solution .Our team follow AGILE .Our commitment to service and quality is reflected in our work</p>
              </div>
              <br/>
              <div className="btn_services">
                 <button className="btn_services_css sol" onClick={opentry_solution}>Try a solution <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i> </button>
                 <Link to="/contact_us">
                 <button className="btn_services_css expert"> Get Broucher <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#17a2b8"}}></i></button>
                 </Link>
              </div>
              </div>
           </div>
           <div className="img_text width_50" >
           <img src={img_landing} alt="loading.."/>
          </div>
         </div>
        <div className="innerbody_highlight_services">
       <div class="flip_card">
            <img src="https://img.icons8.com/nolan/64/door-to-door-delivery.png" alt="img" />
            <br/>
            <div className="title_flipcard">
                <p className="title_info">We offer services at your location</p>
            </div>
        </div>           
       
        <div class="flip_card">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 172 172"
            style={{fill:"#000000"}}><defs><linearGradient x1="45.6875" y1="25.53125" x2="45.6875" y2="65.84913" gradientUnits="userSpaceOnUse" id="color-1_43597_gr1"><stop offset="0" stop-color="#8ab4ff"></stop><stop offset="1" stop-color="#e492ff"></stop></linearGradient><linearGradient x1="91.375" y1="9.40625" x2="91.375" y2="159.90894" gradientUnits="userSpaceOnUse" id="color-2_43597_gr2"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="91.375" y1="9.40625" x2="91.375" y2="159.90625" gradientUnits="userSpaceOnUse" id="color-3_43597_gr3"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="86" y1="9.40625" x2="86" y2="159.90894" gradientUnits="userSpaceOnUse" id="color-4_43597_gr4"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="91.375" y1="9.40625" x2="91.375" y2="159.90894" gradientUnits="userSpaceOnUse" id="color-5_43597_gr5"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="45.6875" y1="25.53125" x2="45.6875" y2="65.84913" gradientUnits="userSpaceOnUse" id="color-6_43597_gr6"><stop offset="0" stop-color="#8ab4ff"></stop><stop offset="1" stop-color="#e492ff"></stop></linearGradient><linearGradient x1="91.375" y1="9.40625" x2="91.375" y2="159.90894" gradientUnits="userSpaceOnUse" id="color-7_43597_gr7"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="91.375" y1="9.40625" x2="91.375" y2="159.90625" gradientUnits="userSpaceOnUse" id="color-8_43597_gr8"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="86" y1="9.40625" x2="86" y2="159.90894" gradientUnits="userSpaceOnUse" id="color-9_43597_gr9"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="91.375" y1="9.40625" x2="91.375" y2="159.90894" gradientUnits="userSpaceOnUse" id="color-10_43597_gr10"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><linearGradient x1="49.84375" y1="31.0625" x2="49.84375" y2="44.5" gradientUnits="userSpaceOnUse" id="color-11_43597_gr11"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><linearGradient x1="43.125" y1="18.96875" x2="43.125" y2="107.83981" gradientUnits="userSpaceOnUse" id="color-12_43597_gr12"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172.00002v-172.00002h172.00002v172.00002z" fill="none" stroke="none"></path><g id="original-icon" stroke="none" opacity="0" visibility="hidden"><path d="M45.6875,26.875c-10.38986,0 -18.8125,8.42264 -18.8125,18.8125c0,10.38986 8.42264,18.8125 18.8125,18.8125c10.38986,0 18.8125,-8.42264 18.8125,-18.8125c0,-10.38986 -8.42264,-18.8125 -18.8125,-18.8125z" fill="url(#color-1_43597_gr1)"></path><path d="M88.6875,59.125h5.375v43h-5.375z" fill="url(#color-2_43597_gr2)"></path><path d="M91.375,112.875c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-3_43597_gr3)"></path><path d="M91.375,26.875c-7.04125,0 -13.94006,1.12337 -20.52444,3.3325c-5.36425,-8.74244 -14.80544,-14.0825 -25.16306,-14.0825c-16.29969,0 -29.5625,13.26281 -29.5625,29.5625c0,10.37375 5.3535,19.823 14.12012,25.18725c-2.236,6.64619 -3.37012,13.52887 -3.37012,20.50025c0,35.56369 28.93631,64.5 64.5,64.5c35.56369,0 64.5,-28.93631 64.5,-64.5c0,-35.56369 -28.93631,-64.5 -64.5,-64.5zM91.375,150.5c-32.60206,0 -59.125,-26.52294 -59.125,-59.125c0,-7.08694 1.28194,-14.07981 3.80281,-20.78781l0.84656,-2.25213l-2.14463,-1.09112c-8.17269,-4.15756 -13.25475,-12.41894 -13.25475,-21.55644c0,-13.33806 10.84944,-24.1875 24.1875,-24.1875c9.12675,0 17.38275,5.07131 21.543,13.23056l1.30881,2.08819l2.27094,-0.89494c6.56825,-2.43756 13.48588,-3.67381 20.56475,-3.67381c32.60206,0 59.125,26.52294 59.125,59.125c0,32.60206 -26.52294,59.125 -59.125,59.125z" fill="url(#color-4_43597_gr4)"></path><path d="M91.375,37.625c-6.83969,0 -13.502,1.2685 -19.80419,3.76519l1.978,4.99606c5.67063,-2.24675 11.66644,-3.38625 17.82619,-3.38625c26.67344,0 48.375,21.70156 48.375,48.375c0,26.67344 -21.70156,48.375 -48.375,48.375c-26.67344,0 -48.375,-21.70156 -48.375,-48.375c0,-6.15706 1.1395,-12.15287 3.38894,-17.8235l-4.99606,-1.978c-2.49938,6.30219 -3.76787,12.96181 -3.76787,19.8015c0,29.63775 24.11225,53.75 53.75,53.75c29.63775,0 53.75,-24.11225 53.75,-53.75c0,-29.63775 -24.11225,-53.75 -53.75,-53.75z" fill="url(#color-5_43597_gr5)"></path></g><g id="subtracted-icon" stroke="none"><path d="" fill="url(#color-6_43597_gr6)"></path><path d="M88.6875,102.125h5.375v-43h-5.375z" fill="url(#color-7_43597_gr7)"></path><path d="M91.375,112.875c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-8_43597_gr8)"></path><path d="M155.875,91.375c0,35.56369 -28.93631,64.5 -64.5,64.5c-29.7757,0 -54.90569,-20.284 -62.29682,-47.75884c1.73325,2.73562 4.42726,4.8032 7.60638,5.72707c8.86154,21.4915 30.03803,36.65677 54.69043,36.65677c32.60206,0 59.125,-26.52294 59.125,-59.125c0,-32.60206 -26.52294,-59.125 -59.125,-59.125c-5.97459,0 -11.83432,0.88063 -17.46608,2.62089c-0.54248,-1.73224 -1.22736,-3.40193 -2.04087,-4.99533c6.27626,-1.98966 12.82752,-3.00056 19.50695,-3.00056c35.56369,0 64.5,28.93631 64.5,64.5zM26.875,91.375c0,-1.33745 0.04174,-2.67164 0.125,-4.00151v8.03991c-0.08292,-1.33567 -0.125,-2.68222 -0.125,-4.0384z" fill="url(#color-9_43597_gr9)"></path><path d="M145.125,91.375c0,29.63775 -24.11225,53.75 -53.75,53.75c-21.41318,0 -39.94203,-12.58663 -48.57668,-30.75h3.01418c0.97792,0 1.93156,-0.10464 2.85031,-0.30332c8.1448,15.2654 24.23569,25.67832 42.71219,25.67832c26.67344,0 48.375,-21.70156 48.375,-48.375c0,-26.67344 -21.70156,-48.375 -48.375,-48.375c-5.51037,0 -10.88955,0.91191 -16.02209,2.71263c0.01469,-0.40241 0.02209,-0.80666 0.02209,-1.21263c0,-1.47913 -0.09994,-2.93522 -0.29342,-4.36188c5.24674,-1.66811 10.711,-2.51312 16.29342,-2.51312c29.63775,0 53.75,24.11225 53.75,53.75z" fill="url(#color-10_43597_gr10)"></path></g><g stroke="none"><g id="Layer_1"><path d="M56.5625,44.5h-13.4375v-13.4375c7.42019,0 13.4375,6.01731 13.4375,13.4375z" fill="url(#color-11_43597_gr11)"></path><path d="M70,44.5c0,-14.81888 -12.05613,-26.875 -26.875,-26.875c-14.81887,0 -26.875,12.05612 -26.875,26.875c0,13.9105 10.62637,25.38612 24.1875,26.73794v5.51206h-8.0625v24.1875c0,4.44512 3.61737,8.0625 8.0625,8.0625h5.375c4.44512,0 8.0625,-3.61738 8.0625,-8.0625v-24.1875h-8.0625v-5.51206c13.56113,-1.35181 24.1875,-12.82744 24.1875,-26.73794zM45.8125,103.625h-5.375c-1.48081,0 -2.6875,-1.204 -2.6875,-2.6875v-8.0625h10.75v8.0625c0,1.4835 -1.20669,2.6875 -2.6875,2.6875zM48.5,82.125v5.375h-10.75v-5.375zM21.625,44.5c0,-11.85456 9.64544,-21.5 21.5,-21.5c11.85456,0 21.5,9.64544 21.5,21.5c0,11.85456 -9.64544,21.5 -21.5,21.5c-11.85456,0 -21.5,-9.64544 -21.5,-21.5z" fill="url(#color-12_43597_gr12)"></path></g><g id="Layer_1" fill="#000000" opacity="0"><path d="M75.375,44.5c0,11.9325 -6.39625,22.38688 -16.125,27.97688v28.46062c0,7.4175 -6.02,13.4375 -13.4375,13.4375h-5.375c-7.4175,0 -13.4375,-6.02 -13.4375,-13.4375v-28.46062c-9.72875,-5.59 -16.125,-16.04438 -16.125,-27.97688c0,-17.79125 14.45875,-32.25 32.25,-32.25c17.79125,0 32.25,14.45875 32.25,32.25z"></path></g></g><path d="M16.25,109v-91.375h53.75v91.375z" id="overlay-drag" fill="#ff0000" stroke="none" opacity="0"></path></g></svg>
       <br/>
            <div className="title_flipcard">
            <p className="title_info">Get your personalized solution</p>
          </div>
        </div>           
        <div class="flip_card">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 64 64"
            style={{fill:"#000000"}}><linearGradient id="SVGID_1__Tryih3K8bK4H_gr1" x1="10" x2="10" y1="124.255" y2="115.571" gradientTransform="matrix(1 0 0 -1 0 149)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#SVGID_1__Tryih3K8bK4H_gr1)" points="10,24 4,33 16,33"></polygon><linearGradient id="SVGID_2__Tryih3K8bK4H_gr2" x1="54" x2="54" y1="121" y2="111.101" gradientTransform="matrix(1 0 0 -1 0 149)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#SVGID_2__Tryih3K8bK4H_gr2)" points="54,40 48,31 60,31"></polygon><linearGradient id="SVGID_3__Tryih3K8bK4H_gr3" x1="38.15" x2="38.15" y1="8.362" y2="55.178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_3__Tryih3K8bK4H_gr3)" d="M60.7,30.1c-0.4-0.7-1.1-1.1-1.8-1.1H55C54.4,16.8,44.3,7,32,7c-6.4,0-12.3,2.6-16.7,7.2l1.5,1.4 C20.7,11.3,26.2,9,32,9c11.2,0,20.4,8.9,20.9,20h-3.8c-0.8,0-1.4,0.4-1.8,1.1c-0.4,0.7-0.4,1.6,0,2.3l3.9,6.9 c0.6,1.1,1.7,1.7,2.8,1.7c1.2,0,2.2-0.6,2.8-1.7l3.9-6.9C61.1,31.6,61.1,30.8,60.7,30.1z M55.1,38.3C54.9,38.8,54.5,39,54,39 s-0.9-0.3-1.1-0.7L49,31.4c-0.1-0.1,0-0.3,0-0.3c0-0.1,0.1-0.1,0.1-0.1h9.7c0,0,0.1,0,0.1,0.1c0.1,0,0.1,0.1,0.1,0.3L55.1,38.3z"></path><linearGradient id="SVGID_4__Tryih3K8bK4H_gr4" x1="25.85" x2="25.85" y1="8.362" y2="55.178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_4__Tryih3K8bK4H_gr4)" d="M32,55c-11.2,0-20.4-8.9-20.9-20h3.8c0.8,0,1.4-0.4,1.8-1.1c0.4-0.7,0.4-1.6,0-2.3l-3.9-6.9 C12.2,23.6,11.2,23,10,23s-2.2,0.6-2.8,1.7l-3.9,6.9c-0.4,0.7-0.4,1.6,0,2.3C3.7,34.6,4.4,35,5.2,35H9c0.5,12.2,10.6,22,23,22 c6.4,0,12.3-2.6,16.7-7.2l-1.5-1.4C43.3,52.7,37.8,55,32,55z M5.2,33c0,0-0.1,0-0.1-0.1c0,0-0.1-0.2,0-0.3L9,25.7 c0.1-0.4,0.5-0.7,1-0.7s0.9,0.3,1.1,0.7l3.9,6.9c0.1,0.1,0,0.3,0,0.3c0,0.1-0.1,0.1-0.1,0.1H5.2z"></path><linearGradient id="SVGID_5__Tryih3K8bK4H_gr5" x1="32" x2="32" y1="8.362" y2="55.178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_5__Tryih3K8bK4H_gr5)" d="M42,45c1.7,0,3-1.3,3-3V24.6c0-0.5-0.1-1.1-0.4-1.5l-2.1-3.6c-0.5-0.9-1.5-1.5-2.6-1.5H24.1 c-1,0-2,0.6-2.6,1.5L19.4,23c-0.3,0.5-0.4,1-0.4,1.5V42c0,1.7,1.3,3,3,3H42z M37,20h2.9c0.3,0,0.7,0.2,0.9,0.5l1.5,2.5H37V20z M29,20h2v3h2v-3h2l0,5h-6V20z M23.3,20.5c0.2-0.3,0.5-0.5,0.9-0.5H27v3h-5.2L23.3,20.5z M21,42V25h6c0,1.1,0.9,2,2,2h6 c1.1,0,2-0.9,2-2h6v17c0,0.6-0.4,1-1,1H22C21.4,43,21,42.6,21,42z"></path><linearGradient id="SVGID_6__Tryih3K8bK4H_gr6" x1="27" x2="27" y1="8.362" y2="55.178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><rect width="8" height="2" x="23" y="35" fill="url(#SVGID_6__Tryih3K8bK4H_gr6)"></rect><linearGradient id="SVGID_7__Tryih3K8bK4H_gr7" x1="25.5" x2="25.5" y1="8.362" y2="55.178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><rect width="5" height="2" x="23" y="39" fill="url(#SVGID_7__Tryih3K8bK4H_gr7)"></rect></svg>
             <br/>
            <div className="title_flipcard">
                <p className="title_info">We follow AGILE methodology</p>
            </div>
        </div>
        <div class="flip_card">
            <img src="https://img.icons8.com/nolan/64/delivery-time.png" alt="img"/> 
            <br/>
            <div className="title_flipcard">
                <p className="title_info">Support Is on Your Hand Watch</p>
            </div>
            </div>
     </div>
       <div className="innerbody_highlight_aboutus">
       
       <div className="highlight_dot">
       <h6 className="titleformidheading">WE WORK</h6>
       </div>
          <div className="innerbody_highlight_aboutus_content">
              <h1>We<br/> Make Your work better</h1>
          </div> 
          <div className="innerbody_highlight_aboutus_content_info_data">
            <div className="innerbody_highlight_aboutus_content_data_flex" data-aos="fade-up">
            <div className="innerbody_highlight_aboutus_content_data_flex_number" data-aos="fade-left">
            <span>+ 12</span>
              </div>
              <div className="innerbody_highlight_aboutus_content_data_flex_head" data-aos="fade-right">
              <h4>Active Clients</h4>   
              </div>
            </div>
            <div className="innerbody_highlight_aboutus_content_data_flex" data-aos="fade-up">
            <div className="innerbody_highlight_aboutus_content_data_flex_number" data-aos="fade-left">
            <span>+ 12</span>
              </div>
              <div className="innerbody_highlight_aboutus_content_data_flex_head" data-aos="fade-right">
              <h4>Projects Done</h4>   
              </div>
            </div>
            <div className="innerbody_highlight_aboutus_content_data_flex"  data-aos="fade-up">
            <div className="innerbody_highlight_aboutus_content_data_flex_number" data-aos="fade-left">
            <span>+ 12</span>
              </div>
              <div className="innerbody_highlight_aboutus_content_data_flex_head" data-aos="fade-right">
              <h4>Satisfied Clients</h4>   
              </div>
            </div>
          </div>
        <Tabs className="slide_tablist_items">
        <TabList className="slide_tablist_items_tablist" data-aos="fade-left">
            <Tab className="slide_tablist_items_tablist_tabitem" >Agile Methodology</Tab>
            <Tab className="slide_tablist_items_tablist_tabitem" >Adapting to Latest Technology</Tab>
            <Tab className="slide_tablist_items_tablist_tabitem" >Simplify System Integration</Tab>
            <Tab className="slide_tablist_items_tablist_tabitem" >Innovating and Unique Solution</Tab>
        </TabList>
        <TabPanel className="slide_tablist_items_tablist_tabcontent">
            <img src={method} alt="img" />
        </TabPanel>
        <TabPanel className="slide_tablist_items_tablist_tabcontent" >
           <img src={technology} alt="img" />
        </TabPanel>
        <TabPanel className="slide_tablist_items_tablist_tabcontent">
           <img src={system} alt="img" />
        </TabPanel>
        <TabPanel className="slide_tablist_items_tablist_tabcontent">
           <img src={inovative} alt="img" />
        </TabPanel>
        </Tabs>
        </div>
       <div className="innerbody_highlight_keypoints">
       <div className="highlight_dot">
       <h6 className="titleformidheading">Key Feature</h6>
       </div>
       <div className="innerbody_highlight_keypoints_head">
           <p>Chill !<br/> With your Problem</p> 
       </div>
       <div className="innerbody_highlight_keypoints_flex">
       <div className="innerbody_highlight_keypoints_flex_item">
          <div className="innerbody_highlight_keypoints_img">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="150" height="150"
            viewBox="0 0 172 172"
            style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172.00002v-172.00002h172.00002v172.00002z" fill="none"></path><g><circle cx="78" cy="14" transform="scale(1.72,1.72)" r="1" fill="#e67e22"></circle><circle cx="50" cy="50" transform="scale(1.72,1.72)" r="38" fill="#e67e22"></circle><circle cx="84" cy="16" transform="scale(1.72,1.72)" r="4" fill="#e67e22"></circle><circle cx="14" cy="26" transform="scale(1.72,1.72)" r="2" fill="#ee3e54"></circle><circle cx="78" cy="77" transform="scale(1.72,1.72)" r="2" fill="#fbcd59"></circle><circle cx="17" cy="78" transform="scale(1.72,1.72)" r="4" fill="#fbcd59"></circle><circle cx="24" cy="83" transform="scale(1.72,1.72)" r="2" fill="#ee3e54"></circle><circle cx="64.483" cy="78.517" transform="scale(1.72,1.72)" r="2.483" fill="#ffffff"></circle><circle cx="16" cy="48" transform="scale(1.72,1.72)" r="1" fill="#ffffff"></circle><circle cx="86" cy="31" transform="scale(1.72,1.72)" r="1" fill="#e67e22"></circle><circle cx="84" cy="45" transform="scale(1.72,1.72)" r="2" fill="#ffffff"></circle><g><path d="M55.9,126.936c-5.02756,0 -9.116,-4.09016 -9.116,-9.116c0,-5.02584 4.08844,-9.116 9.116,-9.116h61.92c5.02756,0 9.116,4.09016 9.116,9.116c0,5.02584 -4.08844,9.116 -9.116,9.116z" fill="#78a0cf"></path><path d="M117.82,109.908c4.36192,0 7.912,3.54836 7.912,7.912c0,4.36364 -3.55008,7.912 -7.912,7.912h-61.92c-4.36192,0 -7.912,-3.54836 -7.912,-7.912c0,-4.36364 3.55008,-7.912 7.912,-7.912h61.92M117.82,107.5h-61.92c-5.70008,0 -10.32,4.62164 -10.32,10.32c0,5.69836 4.61992,10.32 10.32,10.32h61.92c5.70008,0 10.32,-4.62164 10.32,-10.32c0,-5.69836 -4.61992,-10.32 -10.32,-10.32z" fill="#472b29"></path><path d="M117.84236,119.54h-61.96472c-0.9374,0 -1.69764,-0.76024 -1.69764,-1.69764v-0.04472c0,-0.9374 0.76024,-1.69764 1.69764,-1.69764h61.96472c0.9374,0 1.69764,0.76024 1.69764,1.69764v0.04472c0,0.9374 -0.76024,1.69764 -1.69764,1.69764z" fill="#472b29"></path><path d="M117.84236,120.4h-61.96472c-1.4104,0 -2.55764,-1.14724 -2.55764,-2.55764c0,-1.45512 1.14724,-2.60236 2.55764,-2.60236h61.963c1.41212,0 2.55936,1.14724 2.55936,2.55764c0,1.45512 -1.14724,2.60236 -2.55764,2.60236zM55.87764,116.96c-0.46096,0 -0.83764,0.37668 -0.83764,0.83764c0,0.50568 0.37668,0.88236 0.83764,0.88236h61.963c0.46268,0 0.83936,-0.37668 0.83936,-0.83764c0,-0.50568 -0.37668,-0.88236 -0.83764,-0.88236z" fill="#472b29"></path><path d="M110.56504,55.04l-6.02,-7.54564l-6.02,7.54564l-6.02,-7.54564l-6.02,7.54564l-6.02,-7.54564l-6.02,7.54564l-6.02,-7.54564l-6.02,7.54564l-4.78504,-5.99764v68.77764h58.48v-69.71848z" fill="#ffffff"></path><path d="M116.1,118.68h-58.48c-0.47472,0 -0.86,-0.38528 -0.86,-0.86v-68.77764c0,-0.36464 0.23048,-0.69144 0.5762,-0.81184c0.34056,-0.1204 0.72756,-0.01032 0.95632,0.2752l4.11424,5.15484l5.34748,-6.70284c0.32508,-0.40936 1.01824,-0.40936 1.34332,0l5.34748,6.70284l5.34748,-6.70284c0.32508,-0.40936 1.01824,-0.40936 1.34332,0l5.34748,6.70284l5.34748,-6.70284c0.32508,-0.40936 1.01824,-0.40936 1.34332,0l5.34748,6.70284l5.34748,-6.70284c0.32508,-0.40936 1.01824,-0.40936 1.34332,0l5.34748,6.70284l4.86244,-6.09568c0.22876,-0.28724 0.61404,-0.3956 0.95632,-0.2752c0.344,0.1204 0.5762,0.44548 0.5762,0.81184v69.71848c0.00516,0.47472 -0.38012,0.86 -0.85484,0.86zM58.48,116.96h56.76v-66.4006l-4.00244,5.01724c-0.32508,0.40936 -1.01824,0.40936 -1.34332,0l-5.34748,-6.70284l-5.34748,6.70284c-0.32508,0.40936 -1.01824,0.40936 -1.34332,0l-5.34748,-6.70284l-5.34748,6.70284c-0.32508,0.40936 -1.01824,0.40936 -1.34332,0l-5.34748,-6.70284l-5.34748,6.70284c-0.32508,0.40936 -1.01824,0.40936 -1.34332,0l-5.34748,-6.70284l-5.34748,6.70284c-0.32508,0.40936 -1.01824,0.40936 -1.34332,0l-3.26112,-4.07812z" fill="#472b29"></path><path d="M92.02,67.08h-25.8c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h25.8c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M109.22,67.08h-12.04c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h12.04c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M100.62,89.44c-0.47472,0 -0.86,-0.38528 -0.86,-0.86v-3.44c0,-0.47472 0.38528,-0.86 0.86,-0.86c0.47472,0 0.86,0.38528 0.86,0.86v3.44c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M100.62,108.36c-0.47472,0 -0.86,-0.38528 -0.86,-0.86v-3.44c0,-0.47472 0.38528,-0.86 0.86,-0.86c0.47472,0 0.86,0.38528 0.86,0.86v3.44c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M86.86,72.24h-12.04c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h12.04c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M71.38,72.24h-5.16c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h5.16c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M86.86,89.44h-20.64c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h20.64c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><path d="M86.86,94.6h-20.64c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h20.64c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z" fill="#472b29"></path><g fill="#472b29"><path d="M86.86,99.76h-20.64c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h20.64c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z"></path></g><g fill="#472b29"><path d="M86.86,104.92h-20.64c-0.47472,0 -0.86,-0.38528 -0.86,-0.86c0,-0.47472 0.38528,-0.86 0.86,-0.86h20.64c0.47472,0 0.86,0.38528 0.86,0.86c0,0.47472 -0.38528,0.86 -0.86,0.86z"></path></g><g fill="#472b29"><path d="M103.15528,100.23816c0,-4.10392 -7.53532,-2.50432 -7.53532,-8.0668c0,-3.42968 2.87412,-4.45136 5.35436,-4.45136c1.50672,0 4.21916,0.39388 4.21916,1.6684c0,0.4644 -0.32508,1.32096 -1.01996,1.32096c-0.62608,0 -1.22808,-0.88064 -3.1992,-0.88064c-1.69076,0 -2.89648,0.64844 -2.89648,2.10872c0,3.4314 7.5336,1.87824 7.5336,8.04444c0,3.31444 -2.22568,4.93812 -5.28556,4.93812c-3.01172,0 -5.12216,-1.57552 -5.12216,-2.7348c0,-0.55556 0.48676,-1.32096 1.0664,-1.32096c0.8342,0 1.39148,1.8318 3.96288,1.8318c1.6684,-0.00172 2.92228,-0.78948 2.92228,-2.45788z"></path></g></g></g></g></svg>       
          </div>
          <div className="innerbody_highlight_keypoints_title">
           <p> Very Low Cost </p>
          </div>
          <div className="innerbody_highlight_keypoints_disc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor mollitia, </p>
          </div>
       </div>
       <div className="innerbody_highlight_keypoints_flex_item">
          <div className="innerbody_highlight_keypoints_img">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="150" height="150"
            viewBox="0 0 226 226"
            style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,226.00002v-226.00002h226.00002v226.00002z" fill="none"></path><g><path d="M29.38,61.02c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52z" fill="#ee3e54"></path><path d="M174.02,27.12c-1.24816,0 -2.26,1.01184 -2.26,2.26c0,1.24816 1.01184,2.26 2.26,2.26c1.24816,0 2.26,-1.01184 2.26,-2.26c0,-1.24816 -1.01184,-2.26 -2.26,-2.26z" fill="#f1bc19"></path><path d="M113,29.38c-46.18205,0 -83.62,37.43795 -83.62,83.62c0,46.18205 37.43795,83.62 83.62,83.62c46.18205,0 83.62,-37.43795 83.62,-83.62c0,-46.18205 -37.43795,-83.62 -83.62,-83.62z" fill="#fce0a2"></path><path d="M187.58,24.86c-4.99265,0 -9.04,4.04735 -9.04,9.04c0,4.99265 4.04735,9.04 9.04,9.04c4.99265,0 9.04,-4.04735 9.04,-9.04c0,-4.99265 -4.04735,-9.04 -9.04,-9.04z" fill="#f1bc19"></path><path d="M196.62,49.72c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52z" fill="#ee3e54"></path><path d="M183.06,167.24c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM33.9,133.34c-4.99265,0 -9.04,4.04735 -9.04,9.04c0,4.99265 4.04735,9.04 9.04,9.04c4.99265,0 9.04,-4.04735 9.04,-9.04c0,-4.99265 -4.04735,-9.04 -9.04,-9.04z" fill="#fbcd59"></path><path d="M56.5,192.1c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52z" fill="#ee3e54"></path><path d="M41.81,115.26c-3.12041,0 -5.65,2.52959 -5.65,5.65c0,3.12041 2.52959,5.65 5.65,5.65c3.12041,0 5.65,-2.52959 5.65,-5.65c0,-3.12041 -2.52959,-5.65 -5.65,-5.65z" fill="#ffffff"></path><path d="M47.46,149.16c-1.24816,0 -2.26,1.01184 -2.26,2.26c0,1.24816 1.01184,2.26 2.26,2.26c1.24816,0 2.26,-1.01184 2.26,-2.26c0,-1.24816 -1.01184,-2.26 -2.26,-2.26z" fill="#f1bc19"></path><path d="M180.8,74.58c-1.24816,0 -2.26,1.01184 -2.26,2.26c0,1.24816 1.01184,2.26 2.26,2.26c1.24816,0 2.26,-1.01184 2.26,-2.26c0,-1.24816 -1.01184,-2.26 -2.26,-2.26z" fill="#ffffff"></path><g><path d="M113,57.9125c-30.26797,0 -54.805,24.53703 -54.805,54.805c0,30.26797 24.53703,54.805 54.805,54.805c30.26797,0 54.805,-24.53703 54.805,-54.805c0,-30.26797 -24.53703,-54.805 -54.805,-54.805z" fill="#3498db"></path><path d="M113,169.1045c-31.09082,0 -56.387,-25.29392 -56.387,-56.387c0,-31.09308 25.29618,-56.387 56.387,-56.387c31.09082,0 56.387,25.29392 56.387,56.387c0,31.09308 -25.29618,56.387 -56.387,56.387zM113,59.4945c-29.3461,0 -53.223,23.87464 -53.223,53.223c0,29.34836 23.8769,53.223 53.223,53.223c29.3461,0 53.223,-23.87464 53.223,-53.223c0,-29.34836 -23.8769,-53.223 -53.223,-53.223z" fill="#472b29"></path></g><g fill="#472b29"><path d="M156.89824,100.8525c-0.48364,0 -0.93112,-0.31414 -1.08028,-0.80004c-0.19888,-0.64862 -0.41358,-1.29046 -0.64184,-1.92778c-0.88592,-2.47244 -2.00236,-4.87934 -3.3222,-7.16194c-0.31414,-0.53788 -0.12882,-1.2317 0.41132,-1.54358c0.54014,-0.31866 1.2317,-0.12882 1.54358,0.41358c1.38764,2.39786 2.56284,4.93132 3.49396,7.52806c0.23956,0.67122 0.46556,1.3447 0.67348,2.02722c0.18306,0.59664 -0.15142,1.22944 -0.75032,1.4125c-0.10848,0.03616 -0.21922,0.05198 -0.3277,0.05198z"></path></g><g fill="#472b29"><path d="M113,159.895c-26.01486,0 -47.1775,-21.10162 -47.1775,-47.03738c0,-25.93576 21.16264,-47.03512 47.1775,-47.03512c13.5035,0 26.38324,5.7856 35.33736,15.87198c0.67574,0.76162 1.32888,1.5481 1.9549,2.35266c0.38194,0.49268 0.2938,1.20006 -0.19662,1.58426c-0.49268,0.38646 -1.20232,0.29606 -1.58652,-0.19888c-0.59664,-0.76614 -1.2204,-1.51194 -1.86224,-2.2374c-8.52472,-9.605 -20.78974,-15.11488 -33.64688,-15.11488c-24.76734,0 -44.9175,20.08688 -44.9175,44.77738c0,24.6905 20.15016,44.77738 44.9175,44.77738c24.76734,0 44.9175,-20.08688 44.9175,-44.77738c0,-2.2487 -0.1695,-4.51096 -0.50172,-6.71898c-0.09266,-0.61472 0.33222,-1.19102 0.9492,-1.28368c0.62828,-0.09944 1.19328,0.33222 1.28594,0.9492c0.34804,2.3165 0.52658,4.69176 0.52658,7.05346c0,25.93576 -21.16264,47.03738 -47.1775,47.03738z"></path></g><g><path d="M142.38,107.35c0,-3.12106 -2.52894,-5.65 -5.65,-5.65h-24.25206c1.77862,-3.05778 4.1584,-9.83778 4.09964,-16.55224c-0.09492,-10.70788 -11.5825,-9.27278 -11.48758,-1.4351c0.05424,4.5878 -4.52,10.28978 -9.04,14.87984c-4.52,4.59006 -4.52,11.47176 -4.52,11.47176v22.94578c0,4.11094 3.955,8.23996 9.04,8.23996h6.78v0h21.47c3.12106,0 5.65,-2.52894 5.65,-5.65c0,-1.4464 -0.56048,-2.75268 -1.45544,-3.7516c2.16282,-0.79326 3.71544,-2.85212 3.71544,-5.2884c0,-1.4464 -0.56048,-2.75268 -1.45544,-3.7516c2.16282,-0.79326 3.71544,-2.85212 3.71544,-5.2884c0,-1.85772 -0.90852,-3.48944 -2.29164,-4.52h0.03164c3.12106,0 5.65,-2.52894 5.65,-5.65z" fill="#fddbbc"></path><path d="M128.82,142.38h-28.25c-5.41722,0 -10.17,-4.37988 -10.17,-9.36996v-22.94578c0,-0.30058 0.05424,-7.39924 4.84544,-12.26502c5.82402,-5.91216 8.7575,-10.64912 8.71456,-14.07528c-0.0339,-2.7911 1.21362,-5.1415 3.41938,-6.44778c2.02044,-1.19554 4.5087,-1.24074 6.48846,-0.1243c1.41476,0.80004 3.7968,2.89732 3.842,7.98006c0.05198,5.97996 -1.76732,11.91698 -3.38322,15.43354h22.40338c3.73804,0 6.78,3.04196 6.78,6.78c0,2.95608 -1.90066,5.47598 -4.5426,6.40032c0.7458,1.10514 1.1526,2.4069 1.1526,3.7742c0,2.33232 -1.22492,4.47932 -3.15496,5.7065c0.58308,1.017 0.89496,2.16282 0.89496,3.3335c0,2.33232 -1.22492,4.47932 -3.15496,5.7065c0.58308,1.017 0.89496,2.16282 0.89496,3.3335c0,3.73804 -3.04196,6.78 -6.78,6.78zM110.76034,78.60732c-0.76388,0 -1.5368,0.20566 -2.23062,0.61472c-1.4916,0.88366 -2.33232,2.51312 -2.30972,4.4748c0.04972,4.10642 -3.01258,9.23888 -9.36544,15.6844c-4.1471,4.21716 -4.19456,10.61974 -4.19456,10.68302v22.94578c0,3.3561 3.38322,7.10996 7.91,7.10996h28.25c2.49278,0 4.52,-2.02722 4.52,-4.52c0,-1.09158 -0.41584,-2.15604 -1.16616,-2.99902c-0.25086,-0.27798 -0.34578,-0.66444 -0.25312,-1.02604c0.0904,-0.36386 0.35482,-0.65766 0.70738,-0.78874c1.77636,-0.65088 2.9719,-2.3504 2.9719,-4.2262c0,-1.09158 -0.41584,-2.15604 -1.16616,-2.99902c-0.25086,-0.27798 -0.34578,-0.66444 -0.25312,-1.02604c0.0904,-0.36386 0.35482,-0.65766 0.70738,-0.78874c1.77636,-0.65088 2.9719,-2.3504 2.9719,-4.2262c0,-1.42832 -0.66896,-2.74364 -1.83738,-3.61374c-0.39098,-0.29154 -0.55144,-0.80004 -0.39776,-1.26334c0.15368,-0.4633 0.58534,-0.77518 1.0735,-0.77518c2.52442,0 4.55164,-2.02722 4.55164,-4.52c0,-2.49278 -2.02722,-4.52 -4.52,-4.52h-24.25206c-0.40454,0 -0.77744,-0.21696 -0.98084,-0.56726c-0.20114,-0.34804 -0.19888,-0.78196 0.00226,-1.13c1.61816,-2.78432 4.00472,-9.33832 3.94822,-15.97594c-0.02486,-2.92444 -0.9831,-5.06692 -2.69166,-6.03194c-0.6102,-0.34578 -1.2995,-0.51528 -1.99558,-0.51528z" fill="#472b29"></path></g><g fill="#472b29"><path d="M126.56,108.48h-3.39c-0.62376,0 -1.13,-0.50624 -1.13,-1.13c0,-0.62376 0.50624,-1.13 1.13,-1.13h3.39c0.62376,0 1.13,0.50624 1.13,1.13c0,0.62376 -0.50624,1.13 -1.13,1.13z"></path></g><g fill="#472b29"><path d="M126.56,117.52h-3.39c-0.62376,0 -1.13,-0.50624 -1.13,-1.13c0,-0.62376 0.50624,-1.13 1.13,-1.13h3.39c0.62376,0 1.13,0.50624 1.13,1.13c0,0.62376 -0.50624,1.13 -1.13,1.13z"></path></g><g fill="#472b29"><path d="M126.56,126.56h-3.39c-0.62376,0 -1.13,-0.50624 -1.13,-1.13c0,-0.62376 0.50624,-1.13 1.13,-1.13h3.39c0.62376,0 1.13,0.50624 1.13,1.13c0,0.62376 -0.50624,1.13 -1.13,1.13z"></path></g><g fill="#472b29"><path d="M126.56,135.6h-3.39c-0.62376,0 -1.13,-0.50624 -1.13,-1.13c0,-0.62376 0.50624,-1.13 1.13,-1.13h3.39c0.62376,0 1.13,0.50624 1.13,1.13c0,0.62376 -0.50624,1.13 -1.13,1.13z"></path></g></g></g></svg>
       </div>
          <div className="innerbody_highlight_keypoints_title">
          <p>Timely Delivered</p>
          </div>
          <div className="innerbody_highlight_keypoints_disc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor mollitia, </p>
          </div>
       </div>
       <div className="innerbody_highlight_keypoints_flex_item">
          <div className="innerbody_highlight_keypoints_img">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="150" height="150"
            viewBox="0 0 172 172"
            style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172.00002v-172.00002h172.00002v172.00002z" fill="none"></path><g><path d="M132.44,20.64c-0.94993,0 -1.72,0.77007 -1.72,1.72c0,0.94993 0.77007,1.72 1.72,1.72c0.94993,0 1.72,-0.77007 1.72,-1.72c0,-0.94993 -0.77007,-1.72 -1.72,-1.72z" fill="#e67e22"></path><path d="M86,22.36c-35.1474,0 -63.64,28.4926 -63.64,63.64c0,35.1474 28.4926,63.64 63.64,63.64c35.1474,0 63.64,-28.4926 63.64,-63.64c0,-35.1474 -28.4926,-63.64 -63.64,-63.64z" fill="#e4e4f9"></path><path d="M142.76,18.92c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88z" fill="#e67e22"></path><path d="M149.64,37.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z" fill="#95a5a6"></path><path d="M139.32,127.28c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM25.8,101.48c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88z" fill="#fbcd59"></path><path d="M43,146.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z" fill="#95a5a6"></path><path d="M31.82,84.28c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM136.74,55.04c-1.42489,0 -2.58,1.15511 -2.58,2.58c0,1.42489 1.15511,2.58 2.58,2.58c1.42489,0 2.58,-1.15511 2.58,-2.58c0,-1.42489 -1.15511,-2.58 -2.58,-2.58z" fill="#ffffff"></path><g><path d="M69.84576,131.89648l-6.8112,-10.33892l-12.4356,2.4682l15.19964,-37.16576l19.2468,7.87072z" fill="#60be92"></path><path d="M70.09516,134.46444l-7.62132,-11.56872l-13.8374,2.74684l16.5034,-40.35292l21.4742,8.78232zM63.59528,120.2194l6.00108,9.10912l13.87868,-33.93732l-17.01768,-6.95912l-13.8976,33.97688z" fill="#472b29"></path><path d="M102.15424,131.89648l6.8112,-10.33892l12.4356,2.4682l-15.19964,-37.16576l-19.2468,7.87072z" fill="#60be92"></path><path d="M101.90484,134.46444l-16.51888,-40.39076l21.4742,-8.78232l16.5034,40.35292l-13.8374,-2.74684zM88.52496,95.38948l13.87868,33.93732l6.00108,-9.10912l11.0338,2.18784l-13.8976,-33.97688z" fill="#472b29"></path><path d="M92.42592,106.038c-0.57276,0 -1.1266,-0.12556 -1.64432,-0.37668l-2.08808,-1.00964c-0.8342,-0.4042 -1.76644,-0.61748 -2.69352,-0.61748c-0.92708,0 -1.85932,0.21328 -2.69524,0.61748l-2.08636,1.00964c-0.51772,0.25112 -1.07156,0.37668 -1.64432,0.37668c-1.11628,0.00172 -2.16892,-0.48676 -2.88788,-1.33816l-1.49812,-1.77332c-1.17648,-1.39492 -2.8982,-2.193 -4.72484,-2.193c0,0 -2.5198,0.0774 -2.52152,0.0774c-1.79052,0 -3.27832,-1.11972 -3.74444,-2.72448l-0.64672,-2.22912c-0.52976,-1.82492 -1.84384,-3.28348 -3.60512,-4.00416l-2.15,-0.87548c-1.59788,-0.65188 -2.55076,-2.30308 -2.31684,-4.01276l0.31648,-2.29792c0.25972,-1.88512 -0.34744,-3.75304 -1.66496,-5.12388l-1.60648,-1.67356c-1.1954,-1.247 -1.39492,-3.14244 -0.48504,-4.6096l1.22292,-1.97112c1.00276,-1.61508 1.20916,-3.569 0.56416,-5.3578l-0.78776,-2.1844c-0.5848,-1.62368 0.00344,-3.43656 1.43104,-4.40664l1.91952,-1.30376c1.5738,-1.06812 2.55592,-2.76748 2.69352,-4.66636l0.17028,-2.31512c0.12556,-1.72172 1.40008,-3.13728 3.09944,-3.44172l2.28416,-0.40936c1.87136,-0.3354 3.46064,-1.49124 4.3602,-3.16996l1.09564,-2.04336c0.65876,-1.23152 1.935,-1.9952 3.33164,-1.9952c0.30272,0 0.60716,0.03612 0.90128,0.10836l2.2532,0.55384c0.48332,0.11868 0.9804,0.17888 1.47748,0.17888c1.36568,0 2.71244,-0.46268 3.7926,-1.30032l1.83352,-1.42244c0.6708,-0.516 1.47232,-0.78948 2.31856,-0.78948c0.84624,0 1.64776,0.27348 2.31684,0.79292l1.83352,1.42244c1.07844,0.83764 2.42692,1.30032 3.7926,1.30032c0.4988,0 0.99588,-0.0602 1.4792,-0.17888l2.2532,-0.55384c0.29584,-0.07224 0.60028,-0.10836 0.90128,-0.10836c1.39492,0 2.67116,0.76368 3.32992,1.99348l1.09736,2.04508c0.89784,1.677 2.48712,2.83112 4.35848,3.16824l2.28416,0.40936c1.69936,0.30444 2.97388,1.72 3.09944,3.44172l0.17028,2.31512c0.13932,1.89888 1.11972,3.59824 2.69352,4.66636l1.9178,1.30204c1.4276,0.96836 2.01584,2.78124 1.43104,4.40664l-0.78776,2.1844c-0.645,1.7888 -0.4386,3.74272 0.56416,5.3578l1.22292,1.97112c0.90988,1.46716 0.71036,3.3626 -0.48504,4.6096l-1.60648,1.67356c-1.31752,1.37256 -1.92468,3.24048 -1.66496,5.12388l0.31648,2.29964c0.23392,1.70796 -0.71896,3.35916 -2.31856,4.01104l-2.14828,0.87548c-1.76128,0.72068 -3.07536,2.18096 -3.60512,4.00416l-0.64672,2.22912c-0.46612,1.60476 -1.95736,2.7262 -3.62748,2.7262l-2.63848,-0.07912c-1.82664,0 -3.54836,0.7998 -4.72484,2.19472l-1.4964,1.76988c-0.71724,0.85312 -1.76988,1.33988 -2.88616,1.33988z" fill="#f1c40f"></path><path d="M86,38.528c0.5762,0 1.12316,0.18748 1.57896,0.54008l1.8318,1.42244c1.29,1.00104 2.8982,1.55144 4.53048,1.55144c0.5934,0 1.18852,-0.07224 1.76644,-0.215l2.2532,-0.55384c0.20296,-0.04988 0.40936,-0.07396 0.61576,-0.07396c0.94944,0 1.81976,0.52116 2.26868,1.3588l1.09564,2.04508c1.07328,2.0038 2.97044,3.38152 5.20816,3.784l2.28244,0.40936c1.15756,0.20812 2.02616,1.17304 2.11216,2.34608l0.16856,2.3134c0.16512,2.26696 1.33816,4.3 3.21812,5.57452l1.91952,1.30376c0.97352,0.66048 1.37428,1.89544 0.97524,3.00312l-0.78604,2.18268c-0.77056,2.13624 -0.5246,4.47028 0.67252,6.40184l1.22292,1.97112c0.62092,1.00104 0.48504,2.29104 -0.33024,3.14072l-1.60648,1.67356c-1.5738,1.63916 -2.29792,3.87 -1.99004,6.1232l0.31648,2.29792c0.15996,1.16616 -0.48848,2.28932 -1.57896,2.73308l-2.14828,0.87548c-2.10356,0.85828 -3.67392,2.60064 -4.3086,4.78332l-0.64672,2.2274c-0.31648,1.0922 -1.33128,1.85588 -2.55076,1.85588c-0.00172,0 -0.00172,0 -0.00344,0l-2.32028,-0.07396l-0.2322,-0.00344c-2.18096,0 -4.2398,0.95632 -5.64676,2.62128l-1.4964,1.7716c-0.4902,0.58136 -1.20744,0.91332 -1.9694,0.91332c-0.39044,0 -0.7654,-0.086 -1.118,-0.25628l-2.08808,-1.00964c-0.9976,-0.48332 -2.11044,-0.73788 -3.21984,-0.73788c-1.10768,0 -2.22224,0.25456 -3.21812,0.73788l-2.08808,1.00964c-0.3526,0.17028 -0.72928,0.25628 -1.118,0.25628c-0.76024,0 -1.4792,-0.33196 -1.9694,-0.91332l-1.4964,-1.7716c-1.40696,-1.66668 -3.4658,-2.62128 -5.64676,-2.62128l-0.23392,0.00344l-2.40112,0.07568c-1.13692,0 -2.15344,-0.76368 -2.46992,-1.8576l-0.64672,-2.2274c-0.63296,-2.18268 -2.20332,-3.92676 -4.30688,-4.78332l-2.14828,-0.87548c-1.08876,-0.44376 -1.73892,-1.56864 -1.57896,-2.73308l0.31476,-2.29792c0.3096,-2.25148 -0.41624,-4.48232 -1.99004,-6.1232l-1.60648,-1.67356c-0.81528,-0.84968 -0.94944,-2.13968 -0.33024,-3.139l1.22292,-1.97112c1.19712,-1.93156 1.44308,-4.26388 0.67252,-6.40184l-0.78604,-2.18268c-0.39904,-1.10768 0.00172,-2.34092 0.97524,-3.00312l1.91952,-1.30376c1.87996,-1.27624 3.053,-3.30756 3.21984,-5.57452l0.16856,-2.3134c0.086,-1.17304 0.9546,-2.13796 2.11216,-2.34608l2.28416,-0.40936c2.236,-0.40248 4.13488,-1.78192 5.20644,-3.784l1.09564,-2.04508c0.44892,-0.83764 1.31924,-1.3588 2.26868,-1.3588c0.2064,0 0.4128,0.0258 0.61576,0.07396l2.2532,0.55384c0.57792,0.14276 1.17132,0.215 1.76472,0.215c1.63228,0 3.2422,-0.5504 4.53048,-1.55144l1.8318,-1.42244c0.45924,-0.35432 1.0062,-0.5418 1.5824,-0.5418M86,36.12c-1.07844,0 -2.15688,0.34916 -3.05472,1.04576l-1.83352,1.42244c-0.88236,0.68456 -1.95908,1.04576 -3.05472,1.04576c-0.39732,0 -0.79636,-0.04816 -1.19024,-0.14448l-2.2532,-0.55384c-0.39732,-0.09804 -0.79636,-0.14448 -1.19024,-0.14448c-1.80428,0 -3.5088,0.98384 -4.39116,2.62988l-1.09564,2.04508c-0.71896,1.3416 -2.0124,2.28244 -3.51052,2.55076l-2.28416,0.40936c-2.23944,0.40248 -3.9216,2.2704 -4.08844,4.5408l-0.16856,2.3134c-0.1118,1.51876 -0.90988,2.90336 -2.17064,3.7582l-1.91952,1.30376c-1.88168,1.27968 -2.65912,3.67048 -1.88856,5.81016l0.78604,2.18268c0.516,1.43276 0.34916,3.02204 -0.45408,4.31548l-1.22292,1.97112c-1.20056,1.935 -0.9374,4.43416 0.63812,6.07676l1.60648,1.67356c1.05436,1.09908 1.548,2.61956 1.3416,4.128l-0.31648,2.29792c-0.3096,2.25492 0.94772,4.43244 3.05472,5.29072l2.14828,0.87548c1.4104,0.57448 2.48024,1.763 2.90336,3.225l0.64672,2.2274c0.6192,2.13452 2.57312,3.59308 4.78332,3.59308c0.05332,0 0.10664,0 0.15996,-0.00172l2.31856,-0.07396c0.05332,-0.00172 0.10492,-0.00172 0.15652,-0.00172c1.46544,0 2.85864,0.645 3.80808,1.76816l1.4964,1.7716c0.9718,1.14896 2.37532,1.76816 3.80808,1.76816c0.73272,0 1.47404,-0.16168 2.1672,-0.49708l2.08808,-1.00964c0.68456,-0.33196 1.4276,-0.4988 2.17064,-0.4988c0.74304,0 1.48436,0.16684 2.17064,0.4988l2.08808,1.00964c0.69316,0.3354 1.43448,0.49708 2.1672,0.49708c1.43276,0 2.838,-0.61748 3.80808,-1.76816l1.4964,-1.7716c0.94772,-1.12316 2.34264,-1.76816 3.80808,-1.76816c0.0516,0 0.10492,0 0.15652,0.00172l2.31856,0.07396c0.05332,0.00172 0.10664,0.00172 0.15996,0.00172c2.20848,0 4.16412,-1.46028 4.78332,-3.59308l0.64672,-2.2274c0.42484,-1.462 1.49468,-2.65052 2.90336,-3.225l2.14828,-0.87548c2.107,-0.86 3.36432,-3.03752 3.05472,-5.29072l-0.31648,-2.29792c-0.2064,-1.50844 0.28724,-3.02892 1.3416,-4.128l1.60648,-1.67356c1.57552,-1.6426 1.83868,-4.14176 0.63812,-6.07676l-1.22292,-1.97112c-0.80324,-1.29344 -0.97008,-2.88444 -0.45408,-4.31548l0.78604,-2.18268c0.77228,-2.1414 -0.00516,-4.5322 -1.88856,-5.81016l-1.91952,-1.30376c-1.25904,-0.85484 -2.05884,-2.23944 -2.17064,-3.7582l-0.16856,-2.3134c-0.16512,-2.26868 -1.849,-4.13832 -4.08844,-4.5408l-2.28416,-0.40936c-1.49812,-0.27004 -2.79156,-1.20916 -3.51052,-2.55076l-1.09564,-2.04508c-0.88236,-1.64604 -2.58688,-2.62988 -4.39116,-2.62988c-0.39388,0 -0.79464,0.04644 -1.19024,0.14448l-2.2532,0.55384c-0.39388,0.09632 -0.79292,0.14448 -1.19024,0.14448c-1.09564,0 -2.17236,-0.3612 -3.05472,-1.04576l-1.83352,-1.42244c-0.88752,-0.6966 -1.96596,-1.04576 -3.0444,-1.04576z" fill="#472b29"></path><path d="M111.37172,65.31184c-0.36808,0 -0.70864,-0.23908 -0.82216,-0.60888c-0.11352,-0.37324 -0.23736,-0.74132 -0.36808,-1.10596c-0.5074,-1.41728 -1.14724,-2.79844 -1.90404,-4.10564c-0.23908,-0.40936 -0.09804,-0.93568 0.31304,-1.17476c0.41108,-0.24424 0.93568,-0.09976 1.17476,0.31476c0.8084,1.39492 1.49296,2.87068 2.03476,4.38428c0.13932,0.38872 0.27004,0.7826 0.39388,1.18336c0.13932,0.45408 -0.11524,0.93568 -0.57104,1.075c-0.08256,0.0258 -0.16856,0.03784 -0.25112,0.03784zM60.0108,67.16428c-0.06192,0 -0.12384,-0.00688 -0.18576,-0.02064c-0.4644,-0.1032 -0.7568,-0.56244 -0.6536,-1.02684c2.752,-12.43732 14.0352,-21.4656 26.83028,-21.4656c7.86212,0 15.36304,3.36776 20.57808,9.24156c0.39388,0.4472 0.774,0.90128 1.13864,1.36912c0.29068,0.37496 0.22532,0.91504 -0.14964,1.20744c-0.37668,0.28896 -0.91676,0.2236 -1.20744,-0.14964c-0.34228,-0.44032 -0.69832,-0.8686 -1.06984,-1.28656c-4.88824,-5.504 -11.9196,-8.66192 -19.29152,-8.66192c-11.99356,0 -22.57156,8.46068 -25.14984,20.11884c-0.08944,0.40076 -0.44376,0.67424 -0.83936,0.67424zM86,99.43492c-13.39364,0 -24.7766,-9.53396 -27.06764,-22.6696c-0.08084,-0.46784 0.2322,-0.91332 0.70004,-0.99416c0.47816,-0.09976 0.91332,0.2322 0.99588,0.69832c2.14484,12.31004 12.81572,21.24544 25.37172,21.24544c14.20032,0 25.75356,-11.5154 25.75356,-25.671c0,-1.29 -0.09632,-2.58688 -0.28724,-3.8528c-0.07052,-0.46784 0.25284,-0.90644 0.7224,-0.97696c0.47472,-0.06536 0.90816,0.25112 0.97868,0.7224c0.20296,1.3502 0.30616,2.73308 0.30616,4.10908c0,15.1016 -12.3238,27.38928 -27.47356,27.38928zM113.71436,118.17604c-0.17028,0 -0.33024,-0.10148 -0.39904,-0.26832l-1.6942,-4.1968c-0.08944,-0.22016 0.0172,-0.46956 0.23736,-0.559c0.21672,-0.09288 0.46956,0.01548 0.56072,0.23736l1.6942,4.1968c0.08944,0.22016 -0.0172,0.46956 -0.23736,0.559c-0.05332,0.02064 -0.10664,0.03096 -0.16168,0.03096z" fill="#472b29"></path><g fill="#472b29"><path d="M110.7852,110.91592c-0.17028,0 -0.33024,-0.10148 -0.39904,-0.26832l-3.90096,-9.66296c-0.08944,-0.22016 0.0172,-0.46956 0.23736,-0.559c0.21672,-0.0946 0.46956,0.01548 0.56072,0.23736l3.90096,9.66296c0.08944,0.22016 -0.0172,0.46956 -0.23736,0.559c-0.05332,0.02064 -0.10836,0.03096 -0.16168,0.03096z"></path></g><g fill="#472b29"><path d="M68.53512,122.77188c-0.05676,0 -0.11352,-0.01204 -0.16856,-0.0344c-0.21844,-0.0946 -0.32164,-0.34572 -0.22704,-0.56416l1.76988,-4.16756c0.09288,-0.22016 0.34744,-0.31476 0.56416,-0.22876c0.21844,0.0946 0.32164,0.34572 0.22704,0.56416l-1.76988,4.16756c-0.0688,0.16512 -0.22876,0.26316 -0.3956,0.26316z"></path></g><g fill="#472b29"><path d="M71.59672,115.56508c-0.05676,0 -0.11352,-0.01204 -0.16856,-0.0344c-0.21844,-0.0946 -0.32164,-0.34572 -0.22704,-0.56416l0.87376,-2.0554c0.09288,-0.22016 0.34744,-0.31476 0.56416,-0.22876c0.21844,0.0946 0.32164,0.34572 0.22704,0.56416l-0.87376,2.0554c-0.07052,0.16684 -0.22876,0.26316 -0.3956,0.26316z"></path></g><g fill="#472b29"><path d="M73.44744,111.21004c-0.05676,0 -0.11352,-0.01204 -0.16856,-0.0344c-0.21844,-0.0946 -0.32164,-0.34572 -0.22704,-0.56416l2.22396,-5.2374c0.09288,-0.22016 0.34744,-0.31304 0.56416,-0.22876c0.21844,0.0946 0.32164,0.34572 0.22704,0.56416l-2.22396,5.2374c-0.07052,0.16684 -0.22876,0.26316 -0.3956,0.26316z"></path></g></g><g><path d="M82.84724,83.90848c-0.56932,0 -1.11456,-0.20812 -1.53596,-0.5848l-11.1542,-10.9564c-0.4386,-0.39216 -0.70348,-0.94772 -0.73272,-1.54972c-0.02924,-0.602 0.18232,-1.17992 0.59512,-1.6254c0.43344,-0.46612 1.0492,-0.73444 1.69076,-0.73444c0.5676,0 1.11284,0.2064 1.53424,0.58308l9.5804,9.52364l16.08372,-15.87044c0.43516,-0.4042 0.99244,-0.62264 1.57724,-0.62264c0.63468,0 1.22292,0.25112 1.6598,0.7052c0.4214,0.43688 0.64328,1.00964 0.62608,1.61336c-0.0172,0.60372 -0.27176,1.16444 -0.71896,1.57896l-17.63,17.31868c-0.43344,0.40248 -0.989,0.62092 -1.57552,0.62092z" fill="#fefdef"></path><path d="M100.4824,62.50136c0.49192,0 0.98384,0.19092 1.3502,0.57276c0.7052,0.73272 0.6708,1.88684 -0.07568,2.57828l-17.63688,17.329c-0.35604,0.33196 -0.81528,0.4988 -1.2728,0.4988c-0.4472,0 -0.8944,-0.15824 -1.24872,-0.47472l-11.13872,-10.94436c-0.75852,-0.67768 -0.81356,-1.8318 -0.12384,-2.57656c0.36636,-0.3956 0.87032,-0.59684 1.376,-0.59684c0.44548,0 0.89096,0.15652 1.247,0.473l9.86592,9.80744l16.38644,-16.168c0.35604,-0.33196 0.81356,-0.4988 1.27108,-0.4988M100.4824,61.64136v0c-0.69316,0 -1.35364,0.258 -1.85932,0.72756l-15.7982,15.58836l-9.2622,-9.20716c-0.5332,-0.47816 -1.17992,-0.72412 -1.85244,-0.72412c-0.76024,0 -1.49124,0.3182 -2.00552,0.87032c-0.49192,0.53148 -0.74304,1.21948 -0.71036,1.93844c0.0344,0.71896 0.35088,1.38116 0.89096,1.86448l11.10948,10.91512c0.52976,0.47472 1.17648,0.7224 1.85244,0.7224c0.69316,0 1.35364,-0.258 1.85932,-0.72928l17.65408,-17.34448c0.51428,-0.47472 0.81872,-1.1438 0.83936,-1.86276c0.02064,-0.71896 -0.24424,-1.4018 -0.74648,-1.92468c-0.51084,-0.52804 -1.2298,-0.8342 -1.97112,-0.8342z" fill="#472b29"></path></g></g></g></svg> 
            </div>
          <div className="innerbody_highlight_keypoints_title">
          <p>High Quality Product</p>
          </div>
          <div className="innerbody_highlight_keypoints_disc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor mollitia, </p>
          </div>
       </div>
       </div>
         </div>
       <div className="innerbody_highlight_services_list">
       <div className="highlight_dot">
       <h6 className="titleformidheading">Our Services</h6>
       </div>
       <div className="innerbody_highlight_keypoints_head">
           <p>We <br/> Provide Best Solutions</p> 
       </div>
       <div className="innerbody_highlight_services_list_outter">
       {
         service_data.map((data,index)=>
         <div className="innerbody_highlight_services_list_object" data-aos={data.service_animation} key={data.id}>
           <div className="innerbody_highlight_services_list_object_content">
              <div className="innerbody_highlight_services_list_object_content_head">
               <h1>{data.services_name}</h1>
              </div>
              <div className="innerbody_highlight_services_list_object_content_info">
               {data.services_deatils.slice(0,400)}    
              </div>
          </div>
          <div className="innerbody_highlight_services_list_object_img"> 
            <img alt="loading" className="img_servicess" src ={require(`../../Assets/${data.service_img}`)}/> 
           </div>
        </div>
         )
       }
       </div>
       <div className="more_btn">
       <button style={{textDecoration:"none",color:"white"}} className="btn_services_css sol">  More Services <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i></button>
       </div>
      
      </div>
      <div className="innerbody_highlight_workflow">
       <div className="highlight_dot">
       <h6 className="titleformidheading">Work Flow</h6>
       </div>
       <div className="innerbody_highlight_keypoints_head">
           <p>We <br/> Follow AGILE Methodology</p> 
       </div>
       <div className="innerbody_highlight_workflow_img">
        
       </div>
      </div>
      {/* <div className="innerbody_highlight_testimonials" >
       <div className="highlight_dot">
       <h6 className="titleformidheading">Testimonials</h6>
       </div>
       <div className="innerbody_highlight_keypoints_head" >
           <p>Listen <br/> Word from Clients </p> 
       </div>
       <div className="innerbody_highlight_testimonilas_content" data-aos="fade-right">
       <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content">
         <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Written by <strong>{item.user}</strong>
            </span>
          </section>
          <div className="inner">
            <p style={{fontStyle:"30px !important"}}><span className="quotes">"</span>{item.description}<span className="quotes">"</span></p>
          </div>
        </div>
      ))}
     </Slider>
       </div>
       </div>
      */}
     </div>
       {
         opentry ?  <Trysolution  opentry={opentry} opentry_solution={opentry_solution} />:null
       }
     <Footer/>
     <ScrollToTop/>
    </Fragment>      
    )
}
export default Landing
