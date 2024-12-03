import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';

const App = () => {
  return (
    <>
      <main className='overflow-hidden'>
        <NavBar/>
        <Hero/>
      </main>    
    </>
  )
}

export default App
