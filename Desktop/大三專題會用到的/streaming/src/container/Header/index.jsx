import React, { Component,Fragment } from 'react';
// import {HeaderWrapper,Logo,Nav,NavItem} from './style';

import carouselImg_1 from "../../static/school.jpg";
import carouselImg_2 from "../../static/school-1.jpg";
import carouselImg_3 from "../../static/school-2.jpg";
import {Route,Switch,Redirect,Link} from 'react-router-dom'

import calssImg from "../../static/功課表.png";

export default class Header extends Component {
	render() {
		return (
			<Fragment>
				{/*導覽列*/}
			    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			      	<div className="container-fluid g-0">
						<Link className="navbar-brand  "  to="/">Streaming</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mdb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link " data-bs-toggle="modal" data-bs-target="#classModal"aria-current="page" href="#" style = {{fontSize: "20px" }}>課表</a>
								</li>
								<Link className="nav-item" to="forum" style = {{fontSize: "20px",textDecoration:'none'}}>
									<a class="nav-link" >討論區</a>
								</Link>  						               
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style = {{fontSize: "20px" }}>
										外部連結	
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><a className="dropdown-item" href="https://www.ntust.edu.tw/home.php" target="blank">臺灣科技大學</a></li>
										<li><a className="dropdown-item" href="https://moodle.ntust.edu.tw/" target="blank">Moodle</a></li>
										<li><a className="dropdown-item" href="https://irs.zuvio.com.tw/student5/irs/index" target="blank">Zuvio</a></li>
										<li><hr className="dropdown-divider"/></li>
										<li><a className="dropdown-item" href="#">Personal</a></li>
									</ul>
								</li>
							</ul>

							<form className="d-flex">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
								<a className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#LoginModal" >Login</a>
							</form>
						</div>
			      	</div>
			    </nav>
			    {/*導覽列*/}
			    {/*Modal for login*/}
			    <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				    <div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Sign up/Login</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<form className="row g-3" method="POST" action="../處理.php?act=1" name="login">
									<div className="col-12">
										<label for="inputEmail4" className="form-label">Email</label>
										<input type="email" className="form-control" id="inputEmail4" name="mail"/>
									</div>
									<div className="col-12">
										<label for="inputPassword4" className="form-label">Password</label>
										<input type="password" className="form-control" id="inputPassword4" neme="psd"/>
									</div>
									<div className="col-12">
										<label for="inputPassword4" className="form-label">Re-enter password</label>
										<input type="password" className="form-control" id="inputPassword4" neme="psd2"/>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" >Sign up</button>
										{/*<button type="button" className="btn btn-primary" formaction="../處理.php?act=1">Login</button>*/}
									</div>            
								</form> 
							</div>				        
						</div>
				    </div>
				</div>	
  				{/*Modal*/}
  				{/*Modal for 課表*/}
			    <div className="modal fade " id="classModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				    <div className="modal-dialog modal-lg">
					    <div className="modal-content">
					        <div className="modal-header">
					            <h5 className="modal-title" id="exampleModalLabel"><h3>功課表</h3></h5>
					          	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					        </div>
					        <div className="modal-body">					        
						        <img src={calssImg} className="d-block w-100"/>
					        </div>				        
					    </div>
				    </div>
				</div>	
				
  				{/*Modal*/}
			     {/* // <!-- Carousel -->*/}
				{/*<div className="container   " >
				    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src={carouselImg_1} className="d-block w-100"/>
							</div>
							<div className="carousel-item">
								<img src={carouselImg_2} className="d-block w-100"/>
							</div>
							<div className="carousel-item">
								<img src={carouselImg_3} className="d-block w-100"/>
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
				    </div>    
				</div>*/}
			  {/*<!-- Carousel -->*/}
			</Fragment>

		);
	}
}
