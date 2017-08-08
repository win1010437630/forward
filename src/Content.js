import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Content extends Component{
  constructor(){
    super()
    this.state={
      content:[]
    }
  }
  componentDidMount(){
    var id=window.location.href.split('=')[1];
    $.ajax({
      url:"http://127.0.0.1:3005/test/content",
      data:{
        id:id
      },
      type:"post",
      success:function(e){
      	console.log(e);
      	this.setState({
        	content:e
    	})
      }.bind(this)
    })
    
    this.refs.replace.onclick=function(){
      $('.newcon').attr("display",'block');
      $.ajax({
          type:"post",
          url:"http://127.0.0.1:3005/test/replacetable",
          async:true,
          data:{
            'id':id,
            'content':$('.newcon').val(),
          },
          success:function(e){console.log(e)}
      });
    }

    this.refs.remove.onclick=function(){       
      $.ajax({
        type:"post",
        url:"http://127.0.0.1:3005/test/removetable",
        async:true,
        data:{'id': id},
        success:function(e){console.log(e)}
      });
    }
  }
  render(){
    return <ul>
        {this.state.content.map(function(e){
         return <li>
          <span>{e.content}</span>
          <button ref="replace">修改</button>
          <button ref="remove">删除</button>
          <input className="newcon" type="text" style={{display: 'none'}}/>
         </li>
        })}
    </ul>    
  }
}

export default Content;
