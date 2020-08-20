import React from 'react';
import loader from '../../Assets/preloader.svg';


function Loader() {
    return (
            <div className="loader_center">
                <img alt="Loading" src={loader} className="loader_svg"/>
              </div>
    )
}

export default Loader
