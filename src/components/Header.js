import React from 'react';
// import './Header.css';
import monument from '../components/Imgs/Dakar.jpg';

function Header() {
  return (
    <div className=' container-fluid header'>
      <div className='row'>
         <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 para'>
           <h2>Save time by building<br/>fact with Boldo Template</h2>
           <p>Funding handshake buyer business-to-business metrics ipad partnership.<br/>
            Fist mover advantages innovator success deployment non-disclosure.</p>
            <button className='my-button'>Buy Template</button>
            <button className='my-button2'>Explore</button>
         </div>
         <div>Presto Boldo Presto</div>
         <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            
         </div>
      </div>
    </div>
  )
}

export default Header