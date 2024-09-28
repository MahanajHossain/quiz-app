import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Nav } from '../Nav/Nav';

export const QuizContext = createContext([])

const Roots = () => {
    const quizTopic = useLoaderData()
    return (
        <QuizContext.Provider value={quizTopic}>
            <Nav></Nav>
            <Outlet/>
        </QuizContext.Provider>
    );
};

export default Roots;