import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'PublicPage',
  render (){
    return (
      <NavHelper className='container'>
        <header role='banner'>
          <h1>Code Pal</h1>
        </header>
        <div>
          <p>Place to help coders and get a helping hand in return.</p>
          <a href='/login' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login here
          </a>
        </div>
      </NavHelper>
    )
  }
})
