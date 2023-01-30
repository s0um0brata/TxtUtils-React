import React from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
               <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string
}
Navbar.defaultProps={
    title:'Set Title Here',
    aboutText:'Set About Here'
}

export default Navbar;
