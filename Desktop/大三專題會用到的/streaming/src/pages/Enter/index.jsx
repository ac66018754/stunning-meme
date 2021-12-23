import React from 'react'
import {Wholee,FrameOfChoice,OuterFrame} from './style'
import {Route,Switch,Redirect,Link} from 'react-router-dom'
import Learn from '../Learn/' //About是路由组件
import Teach from '../Teach/' //About是路由组件

export default class Enter extends React.Component {
	
	render() {
		return (
			<Wholee>
				<OuterFrame>	
					<Link className="list-group-item" to="/learn">
						<div className="card" style={{width: "18rem"}}>
							<img src="http://fakeimg.pl/350x400/00CED1/FFF/?text=Leran" className="card-img-top" alt="..."/>
							<div className="card-body">
								觀賞直播	    	
							</div>
						</div>
					</Link>
					<Link className="list-group-item" to="/teach">
						<div className="card" style={{width: "18rem"}}>
							<img src="http://fakeimg.pl/350x400/00CED1/FFF/?text=Teach" className="card-img-top" alt="..."/>
							<div className="card-body">
								開始直播	    	
							</div>
						</div>
					</Link>
				</OuterFrame>		
			</Wholee>
		)
	}
}