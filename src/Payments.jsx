import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

const Payments = () => {
  return (
    <>
      <Header />
      <div className='container'>
      <div className='payments_line'>
      <h1 style={{fontSize:'45px', width:'100%',height:'400px', marginTop:'200px'}}>
      <span style={{color:'rgb(0,117,0)'}}>C</span>
      <span style={{color:'rgb(226,193,0)'}}>o</span>
      <span style={{color:'rgb(0,117,0)'}}>m</span>
      <span style={{color:'rgb(226,193,0)'}}>i</span>
      <span style={{color:'rgb(0,117,0)'}}>n</span>
      <span style={{color:'rgb(226,193,0)'}}>g</span>
      <span> </span>
      <span style={{color:'rgb(0,117,0)'}}>S</span>
      <span style={{color:'rgb(226,193,0)'}}>o</span>
      <span style={{color:'rgb(226,193,0)'}}>o</span>
      <span style={{color:'rgb(0,117,0)'}}>n</span>
      <span style={{color:'rgb(0,117,0)'}}>.</span>
      <span style={{color:'rgb(226,193,0)'}}>.</span>
      <span style={{color:'rgb(0,117,0)'}}>.</span>
      </h1>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Payments