import React, { Component } from 'react'
import Header from './container/Header/'
import HomeBody from './container/HomeBody'
import Side from './container/Side'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>     
        <div className="container-fluid px-0">
        	<div className="row" >
				<div className="col-2 px-0">
	        		<Side/>	
	        	</div>
	        	<div className="col-10 px-0">
	        		<HomeBody/>	
	        	</div>      				
        	</div>      	
        </div>       
      </div>
    );
  }
}
  