import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {

    const quizDetails = useLoaderData()
    const {name, questions} = quizDetails.data;

    return (
        <div className='my-14'>
            <p style={{textShadow: '1px 1px 3px black'}} className='bg-violet-900 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-bold w-4/5 md:w-3/5 mx-auto py-5 mb-20 rounded-xl shadow shadow-black text-white'>You Are In {name} Quiz Section! You Can Do It!</p>
            <div>
                {
                    questions.map((singleQuestion, index) => <Question key={singleQuestion.id} index={index}  singleQuestion={singleQuestion}/>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;