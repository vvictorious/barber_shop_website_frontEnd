import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render(){
		return(
		<div>

		    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			    <div className="container">
					<Link className="navbar-brand" to="#">Techniques </Link>
			      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			      	</button>
			      <div className="collapse navbar-collapse" id="navbarCollapse">
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item active">
			            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/services">Services</Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link disabled" to="/contacts">Contact</Link>
			          </li>
			        </ul>
			      </div>
			    </div>
			</nav>
		</div>
		);
	}
}

export default Navbar;