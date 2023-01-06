import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
 import {mockFile} from './Mock'
export default class Navbar extends Component {
  render() {
    return (
        <header>
            <div className='logo'>
            <NavLink to='#'>OUTLOOK</NavLink>   
            </div>
           
      <nav>
          <ul>
              {
                  mockFile.map((item,i)=>{
                    return(
                        <li key={i}>
                        <NavLink className='link' to={item.path}>{item.name}</NavLink>
                      </li>
                    )
                  })
              }
              

          </ul>
      </nav>
      </header>
    )
  }
}
