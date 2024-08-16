import React from 'react'
import '../globals.css'

export default function NavBar() {
  return (
    <div class="nav-bar">
      <div class="nav-body">
        <div class="nav-content">
          <div class="nav-logo">
          <img class="icon" src="../favicon.ico" />
          </div>
          <div class="nav-headings">
            <a href="">ORDER</a>
            <a href="">LOCATIONS</a>
            <a href="">TRACK</a>
          </div>
        </div>
      </div>
    </div>
  )
}
