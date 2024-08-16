"use client"
import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/about'
import ResturantsSwiper from './components/ResturantsSwiper'
import '/src/app/globals.css'
import FM from './components/FM'

export default function page() {
  return (
    <main class='excon main'>
      <NavBar />
      <Hero />
      <About />
      <FM />
      <ResturantsSwiper />
      <div class='contact'>
        <h2 class='chillax CFL tac heading'>
          What are we Waiting for?
        </h2>
        <h3 class='CFL excon tac'>Lets get started</h3>
        <div class='button-group'>
          <button class="tanker btn">
            <h2>Google App</h2>
          </button>
          <button class="tanker btn">
            <h2>Contact Us</h2>
          </button>
        </div>
      </div>
      <footer>
        <div class="FB aus">
          <div class="FB1">
            <img class="icon" src="../favicon.ico" />
          </div>
          <div class="FB2">
          <h1 class='aus'>Made by</h1>
          <h3 class='aus'>Fateh Mudassar</h3>
          <h1 class='aus'>Location</h1>
          <h3 class='aus'>Address of place</h3>
          <h1 class='aus'>Phone</h1>
          <h3 class='aus'>+92 305 4824877</h3>
          </div>
          <div class="FB3">
          <h1 class='aus'>Freelancer</h1>
          <h3 class='aus'><a href='https://www.freelancer.com/u/HowToRespawn'>@HowToRespawn</a></h3>
          <h1 class='aus'>Linked In</h1>
          <h3 class='aus'><a href='https://www.linkedin.com/in/fateh-m-30b776286/'>Fateh Mudassar</a></h3>
          <h1 class='aus'>Github</h1>
          <h3 class='aus'><a href='https://github.com/howtorespawn/'>HowToRespawn</a></h3>
          </div>
        </div>
      </footer>
    </main>
  )
}
