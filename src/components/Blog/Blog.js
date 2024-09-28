import React from 'react';

const Blog = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xxl py-10 md:px-24 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400" style={{textShadow: '1px 1px 2px black'}}>
            Hi There!
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" style={{textShadow: '1px 1px 2px black'}}>
          You Are In Q&A Section!
        </h2>
        <p className="text-base text-gray-700 md:text-lg" style={{textShadow: '0px 0px 2px black'}}>
          Here I Got Three Important Q&A For You
        </p>
      </div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-10 sm:mx-0'>
        <div className='px-5 py-8 rounded-lg shadow shadow-black bg-violet-900 text-white'>
          <p className='md:text-3xl text-2xl font-semibold mb-4 shadow shadow-black p-3 rounded-lg' style={{textShadow: '1px 1px 3px black'}}>What is the purpose of React Router?</p>
          <p className='text-xl p-3 rounded-lg shadow shadow-black' style={{textShadow: '1px 1px 3px black'}}>React Router, and dynamic, client side routing allows us to build a single page web application with navigation without the page refreshing as the user navigate. React Router uses component structure to call components, which display the appropriate information</p>
        </div>
        <div className='px-5 py-8 rounded-lg shadow shadow-black bg-violet-900 text-white'>
          <p className='md:text-3xl text-2xl font-semibold mb-4 shadow shadow-black p-3 rounded-lg' style={{textShadow: '1px 1px 3px black'}}>How does context API works?</p>
          <p className='text-xl p-3 rounded-lg shadow shadow-black' style={{textShadow: '1px 1px 3px black'}}>In a typical React application, data is passed top to bottom uni-directionally via props. But such usage can be difficult for certain types of props that are required by many other components within an application. Context provides us a way to share value like these between components without having to explicitly pass a prop through every level of the tree.</p>
        </div>
        <div className='px-5 py-8 rounded-lg shadow shadow-black bg-violet-900 text-white'>
          <p className='md:text-3xl text-2xl font-semibold mb-4 shadow shadow-black p-3 rounded-lg' style={{textShadow: '1px 1px 3px black'}}>What is useRef() hook?</p>
          <p className='text-xl p-3 rounded-lg shadow shadow-black' style={{textShadow: '1px 1px 3px black'}}>The useRef() hook allows us to persist values between renders. It can be used to store a mutable value that does not cause to re-render when update. It can be used to access a DOM element directly. There are two main uses of useRef() hook: 1. Accessing the DOM node or React element. 2. Keeping a mutable variable</p>
        </div>
      </div>
    </div>
  );
};


export default Blog;