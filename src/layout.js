import React from 'react'
import NavHelper from './components/nav-helper'
import ampersandMixin from 'ampersand-react-mixin'
export default React.createClass({
  mixins:[ampersandMixin],
  displayName: 'Layout',
  render(){
    const {me} = this.props
    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Ampersand Buddy</li>
            <li><a href='/repos'>About Us</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Advertising</a></li>
            <li><a href='#'>Contact</a></li>
            <li className='pull-right'>{me.login} <a href='/logout'>Logout</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
