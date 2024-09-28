import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    return (
        <div className='bg-violet-900 m-auto p-5 rounded-2xl text-white shadow-black shadow'>
            <img className='rounded-2xl shadow shadow-black' src={logo} alt="" />
            <p className='text-2xl font-semibold pt-3' style={{textShadow: '1px 1px 3px black'}}>Topic: {name}</p>
            <p className='text-xl my-1' style={{textShadow: '1px 1px 3px black'}}>Quiz Quantity: {total}</p>
            <div className='flex justify-center'>
                <Link to={`/quiz/${id}`}><button className='bg-white text-black py-4 md:py-4 lg:px-12 xl:px-20 px-20 rounded-lg font-bold my-3 hover:bg-gray-200 flex items-center shadow-black shadow' style={{textShadow: '0px 0px 2px black'}}>START NOW<CheckIcon className='w-4 ml-2' /></button></Link>
            </div>
        </div>
    );
};

export default Quiz;