import React from 'react'
import Video from '../Video/'
import {Whole} from './style'
import Carousel from '../Carousel/'

export default class HomeBody extends React.Component {
	render() {
		return (
			<Whole style={{height:'800px'}}>
				<Carousel/>
				<div className="container">				
					<div className="row">
						<div className="col-4" style={{height:"400px",width:"300px",marginLeft:"10px"}}>
							<Video/>
						</div>
						<div className="col-4" style={{height:"400px",width:"300px",marginLeft:"10px"}}>
							<Video/>
						</div>
						<div className="col-4" style={{height:"400px",width:"300px",marginLeft:"10px"}}>
							<Video/>
						</div>
					</div>					
					<div className="row">
						<div className="col-4" style={{height:"400px",width:"300px",marginLeft:"10px"}}>
							<Video/>
						</div>
						<div className="col-4" style={{height:"400px",width:"300px",marginLeft:"10px"}}>
							<Video/>
						</div>
						<div className="col-4" style={{height:"400px",width:"300px",marginLeft:"10px"}}>
							<Video/>
						</div>
					</div>			
				</div>
						

			</Whole>
		)
	}
}