import React from 'react'
import {Wholee} from './style'

import {Route,Switch,Redirect,Link} from 'react-router-dom'
import ForumForGeneral from '../ForumForGeneral/' 
import ForumForClass   from '../ForumForClass/' 

export default class Forum extends React.Component {
	render() {
		return (
			<Wholee>
				<div className="container-fluid g-0">				
					<div className="row">
						<div className="col-2" style={{}}>
							<ul className="list-group accordion">
								<div className="accordion-item">
									<h2 className="accordion-header accordion-button" >
										一般看板
									</h2>
									<div className="accordion-body list-group-item-light">
										<Link className="list-group-item list-group-item-light" to="/forum/forumforgeneral">全部</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforgeneral">台科大版</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforgeneral">感情版</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforgeneral">工作版</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforgeneral">留學版</Link>
									</div>
								</div>
							</ul>
							<ul className="list-group accordion">
								<div className="accordion-item">	
									<h2 className="accordion-header accordion-button" >
										課程列表
									</h2>
									<div className="accordion-body list-group-item-light">
										<Link className="list-group-item list-group-item-light" to="/forum/forumforclass">體育(羽球)(上)</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforclass">統計學(上)</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforclass">資料庫交易處理</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforclass">電子商務</Link>
										<Link className="list-group-item list-group-item-light" to="/forum/forumforclass">物件導向程式設計</Link>
										{/* <Link className="list-group-item list-group-item-light" to="/forum/forumforclass">資訊網路</Link> */}
									</div>
								</div>
							</ul>
						</div>

						<div className="col-8" style={{}}>
							<Switch> {/* 已匹配到就不會再往下找，所以第一個先加exact 吧  
											下面有兩個高度一樣的page，若先載入A，後切至B，會使得B的高度永久性增加22px ，
														     相反的，若先載入B，後切至A，會使得A的高度永久性增加22px，直至刷新為止 */}
								<Route exact path="/forum/" component={ForumForGeneral}/>
			                    <Route path="/forum/forumforgeneral" component={ForumForGeneral}/>
			                    <Route path="/forum/forumforclass" component={ForumForClass}/>
			                    {/* <Redirect to="/enter"/>*/}
                			</Switch>							
						</div>
						<div className="col-2" style={{}}>
							
						</div>
					</div>
				</div>				

			</Wholee>
		)
	}
}