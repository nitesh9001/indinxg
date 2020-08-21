import React from 'react';

import front from '../../Assets/front.svg';


function Loader() {
    return (
            <div className="loader_center" >
                <img alt="Loading" src={front} className="two_img_loader"/>
            </div>
    )
}

export default Loader
