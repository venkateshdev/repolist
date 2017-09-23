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
          <p>We help you finding a new buddy for you, because, we can&trade;</p>
          <a href='/login' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login here
          </a>
        </div>
      </NavHelper>
    )
  }
})
