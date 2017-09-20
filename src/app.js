//import React from 'react'
import app from 'ampersand-app'
import Router from './router'
import styles from './styles/mystyle.styl'
import icons from '../node_modules/octicons/octicons/octicons.css'
import Me from './models/myuser'
//for console in browser
window.app = app
app.extend({
  init(){
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
  }
})

app.on('hello',(data)=>{
  console.log(data)
})
app.init()
// const Hello = React.createClass({
//   displayName: 'Hello',
//   render(){
//     return <div> Hello, {this.props.name}</div>
//   }
// })
//
// React.render(<Hello name='World!'/>,document.body)


// var React = require('react')
// var styles = require('./styles/mystyle.styl')
//
// var Hello = React.createClass({
//   displayName: 'Hello',
//   render: function(){
//     return <div> hello, {this.props.name} </div>
//   }
// })
//
// React.render(<Hello name="World!"/>,document.body)
