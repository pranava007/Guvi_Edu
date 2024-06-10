import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
  return (
   <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container ">
  <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg" alt="Guvi" width="100" height="50"/>
  <div className='vertical-line' ></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><span className='blog'>Blog</span></a>
        </li>
        <li className="nav-item">
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="What do you want to read" aria-label="Search"  />
        <button className="btn " type="submit"></button>
      </form>
        </li>
        
        <li class="nav-item down">
        <Link to="/All">ALL</Link>
        </li>

        <li class="nav-item down">
        <Link to="/Fullstack">FULL STACK DEVELOPMENT</Link>
        </li>

        <li class="nav-item down">
        <Link to="/Datascience">DATA SCIENCE</Link>
        </li>

        <li class="nav-item down">
        <Link to="/Cyber">CYBER SECURITY</Link>
        </li>
        <li class="nav-item down">
        <Link to="/Career">CAREER</Link>
        </li>


      </ul>
      <span class="navbar-text  ">
      <button type="button" className="btn btn-success btndown">Log Out</button>
      </span>
      
    
    </div>
  </div>
</nav>





   </>
  )
}

export default Nav