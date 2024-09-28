import { toast } from 'react-toastify'
import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({ singleQuestion, index }) => {
    const { question, correctAnswer, options } = singleQuestion;

    return (
        <div className='w-5/6 lg:w-1/2 p-5 mx-auto mt-8 rounded-xl bg-violet-900 shadow shadow-black relative'>
            <div className='flex justify-center relative bottom-10'><EyeIcon onClick={() => toast.info(correctAnswer, { autoClose: 1200 })} className='w-10 text-violet-900 bg-white rounded-3xl cursor-pointer duration-300 hover:text-violet-700' /></div>
            <div className='text-left text-white'>
                <p className='text-xl font-semibold' style={{ textShadow: '1px 1px 3px black' }}>Quiz-{index + 1}: {question.slice(3, -4)}</p>
                <div className='grid md:grid-cols-2 gap-3 mt-5'>
                    {
                        options.map((option, index) => <label key={index} className="form-check-label inline-block text-white text-lg cursor-pointer" style={{ textShadow: '1px 1px 2px black' }}> <div className='form-check flex shadow shadow-black p-2 rounded-lg'><input onClick={()=>option === correctAnswer ? toast.success('Correct Answer', {autoClose: 1200}) : toast.error('Wrong Answer', {autoClose: 1200})} className='form-check-input appearance-none h-4 w-4 rounded-full  border border-gray-300 bg-white checked:bg-violet-900 checked:border-white checked:border-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2' type="radio" value={option} name="gender" />{option}</div></label>)
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Question;