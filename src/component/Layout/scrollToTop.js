import React  from 'react'
export default function scrollToTop() {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    return (
        <div>
        <div className="Scroll_to_top" onClick={scrollTop}>
            <i class="fa fa-long-arrow-up" aria-hidden="true" style={{color:"white"}}></i>
        </div>
        </div>
    )
}
