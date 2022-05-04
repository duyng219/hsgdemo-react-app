import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Best from './best/Best'
import Featured from './featured/Featured'
import {motion} from 'framer-motion'


const homeTest = () => {
    return (
        <motion.div intial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
            <div className='hero'>
            <div className='hero__img'>
            <div className='content__hero'>
                    <h1 className='h1Color'>Find the perfect place</h1>
                    <p className='search-text h1Color'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                    <form className='search'>
                        <div>
                            <input type='text' placeholder='Enter Keyword..' />
                        </div>
                        <div className='radio'> 
                            <button type='submit'><AiOutlineSearch className='icon'/></button>
                        </div>
                    </form>
                </div>
            </div>
            </div>

            <Best/>
            <Featured/>
        </motion.div>
        
    )
}

export default homeTest