import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Title extends Component{
  constructor(){
    super()
    this.state={
      title:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url:"http://127.0.0.1:3005/test/title",
      type:"get",
      success:function(e){
      	console.log(e);
      	this.setState({
        	title:e
    	 })
      }.bind(this)
    });
  }
  remove(num){
    $.ajax({
        type:"post",
        url:"http://127.0.0.1:3005/test/removetable",
        async:true,
        data:{'id': num},
        success:function(e){console.log(e)}
      });
  }
  render(){
    return <ul>
        {this.state.title.map(function(e){
         return <li>
          <span className="id">{e.id}</span>
          <Link to={`/content?id=${e.id}`}>{e.title}</Link>
          <button ref="replace">修改</button>
          <button ref="remove" onClick={this.remove.bind(this,(e.id))}>删除</button>          
          <input className="newtit" type="text" style={{display: 'none'}}/>
         </li>
        },this)}
    </ul>    
  }
}

export default Title;
