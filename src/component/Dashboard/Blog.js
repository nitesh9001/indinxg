import React from 'react'
import { Link } from 'react-router-dom'
import backimg from '../../Assets/undermaintaince.jpg'

function Blog() {
    return (
        <div className="blog_post_back">
        <img alt="img.." src={backimg} />
            <Link to="/homepage" className="link_blog"> <i class="fa fa-arrow-left" style={{color:"white"}}></i> Home Page</Link>
            <p className="under_maintaince_p_tag">Developing best experience for you</p>
        </div>
    )
}

export default Blog
