import React ,{useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'

function ProgreeBarPage() {
    const {  y}=useWindowScroll();
    const  [scrolled, setscrolled] = useState(0);

    useEffect(()=>{
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setscrolled((y / height) * 100);
    },[y]);

    return (
        <div>
           <div className="progressbar_indicator">
               <div style={{width:` ${scrolled}%` }} className="progressbar_indicator_bar"></div>
           </div>   
        </div>
    );
};

export default ProgreeBarPage;
