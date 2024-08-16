import React from 'react'
import Swiper from './swiper'
import Image from 'next/image'
import '/src/app/globals.css'

export default function Hero() {
  return (
      <header class="hero-body">
        <div class="hero-left">
          <h1 class="tanker">Get Started</h1>
          <p class="tac excon">Get Fast Pace Deliver Wtih Fresh And Warn Food Just Right At Your Door.</p>
          <div class='button-group'>
            <button class="tanker btn">
              <h2>Google App</h2>
            </button>
            <button class="tanker btn">
            <h2>Contact Us</h2>
            </button>
          </div>
        </div>
        <div class="hero-right">
          <div class='drone'>
            <img src='/fly.png' class="droneIMG"/>
          </div>
          <div class='droneFood'>
            <Swiper/>
          </div>
        </div>

      </header>
  )
}
