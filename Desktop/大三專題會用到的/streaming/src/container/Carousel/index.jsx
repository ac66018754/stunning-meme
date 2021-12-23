import React from 'react'
import carouselImg_1 from "../../static/school.jpg";
import carouselImg_2 from "../../static/school-1.jpg";
import carouselImg_3 from "../../static/school-2.jpg";
import Video from '../Video/'

export default class Carousel extends React.Component {
	render() {
		return (
        	<div className="container-fluid " >      
	            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
	              <div className="carousel-indicators">
	                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
	                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
	                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
	              </div>
	              <div className="carousel-inner">
	                <div className="carousel-item active">
	                	<div className="d-block w-100">
	                		<iframe width="900" height="506" src="https://www.youtube.com/embed/_1tAeNkw4Vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	                	</div>
	                </div>
	                <div className="carousel-item">
	                	<div className="d-block w-100">
	                		<Video/>
	                	</div>
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
	           
        	</div>
		)
	}
}