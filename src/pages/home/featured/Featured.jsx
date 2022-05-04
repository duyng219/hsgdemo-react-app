import React from 'react'

import './Featured.css'

import House1 from '../../../assets/imgHome/house1.jpg'
import Bed1 from '../../../assets/imgHome/bed1.jpg'
import Bed2 from '../../../assets/imgHome/bed2.jpg'
import Kitchen from '../../../assets/imgHome/kitchen.jpg'
import Bathroom from '../../../assets/imgHome/bath1.jpg'

import House2 from '../../../assets/imgHome/house2.jpg'
import Bed3 from '../../../assets/imgHome/bed3.jpg'
import Bed4 from '../../../assets/imgHome/bed4.jpg'
import Bathroom2 from '../../../assets/imgHome/bath2.jpg'
import LivingRoom from '../../../assets/imgHome/living-room.jpg'

import House3 from '../../../assets/imgHome/house3.jpg'
import Bed55 from '../../../assets/imgHome/bed55.jpg'
import Bed6 from '../../../assets/imgHome/bed6.jpg'
import kitchen1 from '../../../assets/imgHome/kitchen1.jpg'
import Bathroom3 from '../../../assets/imgHome/bath3.jpg'

import {motion} from 'framer-motion'


const Featured = () => {
    return (
        <motion.div intial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>

        
        <div className='featured'>
            <div className='featured-text'>
                <h1>Các mẫu nhà theo từng vùng miền nổi bật</h1>
                <p>Danh sách được lựa chọn theo Vùng, Miền và Thành phố dựa trên các tiêu chí đánh giá.</p>
            </div>

            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House3} alt='' />
                <img src={Bed55} alt='' />
                <img src={Bed6} alt='' />
                <img src={kitchen1} alt='' />
                <img src={Bathroom3} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, HoanKiem, Hanoi</h2>
                        <p>Construction costs</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn btn-success btn-lg action-button'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn btn-success btn-lg action-button'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. BanaHills, DaNang </h2>
                        <p>Construction costs</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. District 1, HoChiMinh City</h2>
                        <p>Construction costs</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn btn-success btn-lg action-button'>View Listing</button>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Featured