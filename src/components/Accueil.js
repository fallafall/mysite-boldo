import React from 'react';
import './Accueil.css';
import hero from './Imgs/hero.jpg';
import Assistant from './Imgs/Assistant.jpg';
import woman from './Imgs/woman.jpeg';
import prodev from './Imgs/prodev.jpg';
import marketing from './Imgs/marketing.png';
import compte from './Imgs/compte.jpg';
import prog from './Imgs/prog.jpg';
import form from './Imgs/form.jpg';
import trav from './Imgs/trav.jpg';

function Accueil() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-gray">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Boldo</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
  <div className=' container-fluid header'>
      <div className='row'>
         <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 para'>
           <h2>Save time by building<br/>fact with Boldo Template</h2>
           <p>Funding handshake buyer business-to-business metrics ipad partnership.<br/>
            Fist mover advantages innovator success deployment non-disclosure.</p>
            <button className='my-button'>Buy Template</button>
            <button className='my-button2'>Explore</button>
         </div>
         <div>Presto Boldo Presto Boldo</div>
         <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            
         </div>
      </div>
  </div>
  
  <div className=' container contenu'>
        <p className='title1 text-muted'>Our Services</p>
     <p className='texte2'>Handshake infographic mass market<br/>crowdfunding iteration.</p>
  
     <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
          {/* <div className="card text-bg-dark carte"> */}
              <img src={hero} className="card-img foto" alt="image" />
          {/* </div> */}
          <h4 className='titre4'>Cool feature title</h4>
          <p className='paragraphe1'>Leaning curve networkeffects<br/>return on investment</p>
          <p className='paragraphe2'>Explore page</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
          <div className="card text-bg-dark carte">
            <a href="/Marketing"  target="_blank" rel="noreferrer">
            <img
              className="card-img foto"
              src={hero}
              alt="Card image cap" />
            </a>
          </div>
          <h4 className='titre4'>Even cooler feature </h4>
          <p className='paragraphe1'>Leaning curve networkeffects<br/>return on investment</p>
          <p className='paragraphe2'>Explore page</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
          <div className="card text-bg-dark carte">
            <img src={hero} className="card-img foto" alt="..." />
          </div>
          <h4 className='titre4'>Cool feature title</h4>
          <p className='paragraphe1'>Leaning curve networkeffects<br/>return on investment</p>
          <p className='paragraphe2'>Explore page</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
          {/* <div className="card text-bg-dark carte"> */}
              <img src={Assistant} className="card-img foto2" alt="image" />
          {/* </div> */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
          <h4>We connect our customers<br/>With the best, and help them<br/>Keep -up-and stay open.</h4>
          <p>We connect our customers With the best.</p>
          <p>Advisor success customers launch party.</p>
          <p>business-to-customer long-tail</p>
          <button type='button'>start now</button>
        </div>
      </div>

      
      <div className="row">
       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
          <h4>We connect our customers<br/>With the best, and help them<br/>Keep -up-and stay open.</h4>
          <p>We connect our customers With the best.</p>
          <p>Advisor success customers launch party.</p>
          <p>business-to-customer long-tail</p>
          <button type='button'>We connect our customers With the best</button><br/>
          <button type='button'>Advisor success customers launch party</button><br/>
          <button type='button'>business-to-customer long-tail</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
          {/* <div className="card text-bg-dark carte"> */}
              <img src={woman} className="card-img foto2" alt="image" />
          {/* </div> */}
      </div> 
     </div>

  </div>

  <div className='div2'>
    <p className='mytexte'>An enterprise template to ramp <br/>up your company website</p> 
    <div className='mydiv'>
      <div className='carte1'>
        <p className='text1'>"Buyer buzz partner <br/> network disruptive non-<br/>disclosure agreement <br/> business"</p>
         <div>
           <img src='./d,k'/>
            <h6 className='titre1 text-dark'>Albus Dumbledore</h6>
            <p className='titre2 text-dark'>Manager @ Howarts</p>
          </div>
      </div>
      <div className='carte2'>
         <p className='text1'>"Leaning curve <br/> infrastructure value <br/> proposition advisor <br/> strategy user <br/>
          experience hypotheses <br/>investor."</p>
          <img src='./d,k'/>
           <h6 className='titre1 text-dark'>Albus Dumbledore</h6>
            <p className='titre2 text-dark'>Manager @ Howarts</p>
        </div>
        <div className='carte3'>
          <p className='text1'>"Release facebook <br/> responsive web design <br/>
           business model canvas <br/>seed money<br/>monetization."</p>
           <img src='./d,k'/>
            <h6 className='titre1 text-dark'>Albus Dumbledore</h6>
            <p className='titre2 text-dark'>Manager @ Howarts</p>
        </div>
    </div>
  </div>

  <div className='divprod'>
     <img className='prod' src={prodev}/>
    <div className='row'>
      <div className='col-lg-6'>
        <p className='mypara1'>Weconnect our costumers<br/>with the best, and help them<br/>
           keep up-and stay open</p>
       </div>
       <div className='col-lg-6'>
         <p className='mypara'>Weconnect our costumers with the best?</p>
         <p className='mypara'>Android research & developement rockstar?</p>
        </div>
    </div>
  </div>
  <div className='container blog'>
     <p className='title1 text-muted'>Our Blog</p>
     <p className='texte2 pb-5'>Value proposition accelerator Product<br/>management venture</p>
    <div className='row'>
       <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <img className='mark' src={marketing}/>
          <p className='categ1'><b>Category</b> <small>Novembre 22, 2021</small></p>
          <p className='categ'>Pitch termsheet backing<br/>validation release focus.</p>
              <img  className='prog' src={prog}/>
             <p  className='textprog'>Chandler Bing</p>
       </div>
       <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <img className='mark' src={woman}/>
          <p className='categ1'><b>Category</b> <small>Novembre 22, 2021</small></p>
          <p className='categ'>Seed round direct mailing non-<br/>disclosure agreement graphical<br/>
             user interface rockstar.</p>
             <img  className='prog' src={form}/>
             <p  className='textprog'>Rachel Green</p>
       </div>
       <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <img className='mark' src={compte}/>
          <p className='categ1'><b>Category</b> <small>Novembre 22, 2021</small></p>
          <p className='categ'>Beta prototype sales ipad gen-z<br/>marketing network effect value<br/>proposition</p>
             <img className='prog' src={trav}/>
             <p className='textprog'>Monica Geller</p>
       </div>
     </div>
     <button type='button' className='load'>Load more</button>
     <div className='lastdiv'>
        <p className='lasttext'>An enterprise template to ramp <br/>
         up your company website</p>
         <button className='lastbutton'>Your email address</button>
         <button type='button' className='lastbutton2'>Start now</button>
     </div>
  </div>


  </>
  )
}

export default Accueil