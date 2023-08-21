import React from 'react';
import pic1 from './images/pic1.jpg.png';
// import pic2 from './images/pic2.jpg.jpg';
import pic3 from './images/pic3.jpg.jpg';
import pic4 from './images/pic4.jpg.jpg';
import pic5 from './images/pic5.jpg';

import './App.css';

function App() {
  return (
    <body>
      
    
    <div className="main">
      <nav className="navbar">
        <ul className="nav-list">
          <div className="logo">
            <img src={pic1} alt="pic1" /> 
            <p>Boldo</p>
          </div>
          
          <li><a href="/">Product</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <div className="but">
          <button className="btn"><a href="/login">Login</a></button>
        </div>
      </nav>
      <div className="image-hero">
      <div className="hero">
        <h3>Save time by building <br/> fast with Boldo Template</h3>
        <p>Funding handshake buyer business-to-business metrics ipad partnership.
          <br />
          First mover advantage innovator success deployment non-closure.
        </p>
        <div className="button">
        <button className='template'>Buy template</button>
        <button className='explore'>Explore</button>
        </div>
      </div>
      <div className="images">
      {/* <img src={pic2} alt="pic2" />  */}
      <img className='eclipse3' src={pic5} alt="pic5" /> <br />
      <img className='eclipse1' src={pic3} alt="pic3" /> 
      <img className='eclipse2' src={pic4} alt="pic4" /> 
      </div>
         
      </div>
      <div className="last-logo">
        
      <img className='logo1' src={pic1} alt="pic1" /> 
      <h3 className='log1'>Boldo</h3>
      {/* <img className='logo2' src={pic2} alt="pic2" />  */}
      <h3 className='log2'>Presto</h3>
      <img className='logo3' src={pic1} alt="pic1" /> 
      <h3 className='log3'>Boldo</h3>
      {/* <img className='logo4' src={pic2} alt="pic2" />  */}
       <h3 className='log4'>Presto</h3>
      <img className='logo5' src={pic1} alt="pic1" /> 
      <h3 className='log5'> Boldo</h3>
      {/* <img className='logo6' src={pic2} alt="pic2" />  */}
      <h3 className='log6'>Presto</h3>
      

      </div>
    </div>
    </body>
  );
}

export default App;