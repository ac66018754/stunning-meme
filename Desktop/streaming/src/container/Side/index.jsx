import React,{Fragment} from 'react'
import {SideWrapper,SideForm,nav_a} from './style';



export default class Side extends React.Component {
	render() {
		return (
	        // <SideWrapper>
	        //     <SideForm>
	        //       <input type="search" placeholder="請輸入關鍵字"/>
	        //       <button><i className="fa fa-search"></i></button>
	        //     </SideForm>
	        //     <nav>
	        //       <nav_a>
	        //         <i className="fa fa-users" aria-hidden="true"></i> 
	        //         鐵人賽
	        //       </nav_a>
	        //       <nav_a>
	        //         <i className="fa fa-gavel" aria-hidden="true"></i>
	        //         暴力班
	        //       </nav_a>
	        //       <nav_a href="#">
	        //         <i className="fa fa-object-group" aria-hidden="true"></i>
	        //         RWD 醬子
	        //       </nav_a>
	        //       <nav_a href="#">
	        //         <i className="fa fa-globe" aria-hidden="true"></i>
	        //         金魚網頁
	        //       </nav_a>
	        //       <nav_a href="#">
	        //         <i className="fa fa-cutlery" aria-hidden="true"></i>
	        //         金魚切版
	        //       </nav_a>
	        //     </nav>    
	        // </SideWrapper>
	        <Fragment>
			    <div id="mobile-menu" class="mobile-nav visible-xs visible-sm">
			        <ul>
			            <li><a href="#">首頁</a></li>
			            <li><a href="#">Java</a></li>
			            <li><a href="#">SVN</a></li>
			            <li><a href="#">iOS</a></li>
			        </ul>
			    </div>		    
			    <nav class="navbar-inverse visible-lg visible-md" role="navigation">
			        <div class="container">
			            <div class="navbar-header">
			                <a class="navbar-brand" href="#">菜鳥教學</a>
			            </div>
			            <div>
			                <ul class="nav navbar-nav">
			                    <li class="active"><a href="#">iOS</a></li>
			                    <li><a href="#">SVN</a></li>
			                    <li><a href="#" class="dropdown-toggle" data-toggle="dropdown">Java</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>		   
			    <div class="nav-btn visible-xs visible-sm">
			        <a href="#" class="mobile-nav-taggle" id="mobile-nav-taggle">
			            <span class="glyphicon glyphicon-align-justify"></span>
			        </a>
			    </div>
		    </Fragment>
		)
	}
}