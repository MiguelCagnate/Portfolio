import React from 'react'
import whitebg from '../assets/whitebg.jpg'

const Main = () => {
  return (
    <div id="main">
          <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={whitebg} alt='white background' />
          <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
              <h1>I am Miguel Cañate</h1>
          </div>
    </div>
  );
}

export default Main
