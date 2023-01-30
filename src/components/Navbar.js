import React from 'react'

function Navbar() {
  return (
    <div>
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
    </div>
  )
}

export default Navbar