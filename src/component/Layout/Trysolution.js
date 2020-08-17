import React,{useState} from 'react';
import imgage from '../../Assets/login.png'

function Trysolution({opentry,opentry_solution}) {
    
    return (
        <div>{
            opentry ? <div className="try_solution_model">            
            <div className="try_a_solution_main_section">
            <i class="fa fa-close" onClick={opentry_solution}></i>
                <div className="try_solution_main_section_img_part">
                  <img src={imgage} alt="loading"/>
                </div>
                <div className="try_solution_main_section_content">
                  <div className="try_solution_main_section_content_inner">
                     <p className="try_solution_main_section_content_head">Try Our Solutions</p>{opentry}
                     <p className="try_solution_main_section_content_title">Best solution for your ideas</p>
                     <form>
                        <input type="text" placeholder="Enter Your Full Name" className="input_try"/>
                        <input type="email" placeholder="Enter Your Email" className="input_try"/>
                        <input type="number" placeholder="Enter Your Phone NO." className="input_try"/>
                        <input type="text" placeholder="Services Required" className="input_try"/>
                        <textarea placeholder="Describe Services in shot(OPTIONAL) " className="input_try" style={{height:"60px",paddingLeft:'10px'}}></textarea>
                        <button className="btn_services_css sol" > Submit </button>
                        <i class="fa fa-send" aria-hidden="true"></i>
                     </form>
                  </div>
                </div>
            </div>
            </div>:
            null
        }
        </div>
       

    )
}

export default Trysolution


