import React, { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import { QuizContext } from '../Roots/Roots';

const QuizTopic = () => {
    const quizTopic = useContext(QuizContext);
    return (
        <div className='mt-10'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold' style={{textShadow: '1px 1px 3px black'}}>Here I Got Some Quiz Topics For You!</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 container mx-auto  my-24 w-5/6 md:w-full'>
                {
                    quizTopic.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}/>)
                }
            </div>
        </div>
    );
};

export default QuizTopic;