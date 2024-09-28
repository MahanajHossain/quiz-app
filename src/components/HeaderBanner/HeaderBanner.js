import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../banner-image.jpg'

const HeaderBanner = () => {
    return (
        <div className='container mx-auto lg:flex my-20 items-center'>
            <div className='w-full'>
                <h3 className='text-2xl mx-2 md:mx-5 md:text-4xl font-bold' style={{textShadow: '1px 1px 3px black'}}><span className='text-violet-900 text-3xl md:text-5xl'>Hi There!</span><br className='' /> Love To Programming?<br />
                    Let's Warm Out Your Brain With Some Short Quiz!</h3>
                    <Link to='/quiztopic'><button className='py-3 px-10 bg-violet-900 text-white mt-10 rounded-md font-bold shadow shadow-black hover:bg-violet-800' style={{textShadow: '1px 1px 3px black'}}>GET STARTED</button></Link>
            </div>
            <div className='mt-10 md:mt-10 lg:m-0 w-3/4 md:w-full mx-auto'>
                <img className='md:w-4/6 mx-auto' src={Banner} alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;