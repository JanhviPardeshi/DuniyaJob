import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations/'
import logo from '../../src/assets/dj-white.png'
import "./preloader.css"

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);
    return ( 
    <>
        <div className="preloader">
            <div className='texts-container'>
                <span > Find  </span> 
                <span > the  </span> 
                <span > perfect  </span> 
                <span > jobs  </span> 
                <span > here  </span> 
                <span > ....  </span>     
            </div>
        </div> 

        <div>

        </div>
    </>
    )
}

export default PreLoader