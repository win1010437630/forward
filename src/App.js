import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Title from './Title';
import Content from './Content';

class Basic extends Component{
  render(){
    return <Router>
      <div>
          <Route exact path='/' component={Title} />
          <Route path='/content' component={Content} />
      </div>
    </Router>
  }
}

export default Basic;


