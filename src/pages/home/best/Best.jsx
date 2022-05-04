import React from 'react'
import { NavLink } from 'react-router-dom'

import Apt1 from '../../../assets/imgHome/11.jpg'
import Apt2 from '../../../assets/imgHome/22.jpg'
import Apt3 from '../../../assets/imgHome/3333.jpg'

import './Best.css'
import {motion} from 'framer-motion'

const Best = () => {
    return (
        <motion.div intial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>

        
        <div className='best'>
            <h1>Select the area you want to search...<i class='icon__large bx bx-search-alt'></i></h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>

            <div className="img-hover-zoom--colorize">
                <NavLink to="/areas/northern">
                <img src={Apt1} alt='' />
                </NavLink>
                <h4 className="name"><i class='bx bxs-navigation' ></i>Khu vực Miền Bắc</h4>
                <p className="description">
                Giới thiệu về các mẫu nhà thiết kế ở miền bắc
                </p>
            </div>

            <div className="img-hover-zoom--colorize">
                <NavLink to="/areas/central">
                    <img src={Apt2} alt='' />
                </NavLink>
                <h4 className="name"><i class='bx bxs-navigation' ></i>Khu vực Miền Trung</h4>
                <p className="description">
                Giới thiệu về các mẫu nhà thiết kế ở miền trung
                </p>
            </div>

            <div className="img-hover-zoom--colorize">
                <NavLink to="/areas/south">
                    <img src={Apt3} alt='' />
                </NavLink>
                <h4 className="name"><i class='bx bxs-navigation' ></i>Khu vực Miền Nam</h4>
                <p className="description">
                Giới thiệu về các mẫu nhà thiết kế ở miền nam
                </p>
            </div>

            </div>
        </div>
        </motion.div>
    )
}

export default Best