import React, { Component } from 'react'
import Header from './container/Header/'

import {Route,Switch,Redirect,Link} from 'react-router-dom'
import Enter from './pages/Enter/' //Enter是路由组件
import Learn from './pages/Learn/' //Learn是路由组件
import Teach from './pages/Teach/' //Teach是路由组件
import Forum from './pages/Forum/' //Forum是路由组件


export default class App extends Component {
  render() {
    return (
        <div>
            <Header/>          
            {/* 注册路由 */}
            <Switch>
                <Route exact path="/" component={Enter}/>
                <Route path="/teach" component={Teach}/>
                <Route path="/learn" component={Learn}/>
                <Route path="/forum" component={Forum}/>
                {/* <Redirect to="/enter"/>*/}
            </Switch>
        </div>
    );
  }
}
  