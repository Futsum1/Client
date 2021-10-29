
import React, { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import Singup from './components/Singup'
import { Route } from 'react-router-dom'

const App = () => {
  const [name, setName] = useState("Futsum")
  let myName = "futsum"
  const changeName = () => {
    // setName("Vikash")
    // name = "Vikash"
    myName = "Vikash"
  }

  useEffect(() => {
    changeName()
  },[])

 
  return (
    <>
    <NavBar data={myName}/>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/about">
    <About/>
    </Route>
    
    <Route path="/signup">
    <Singup/>
    </Route>
    
    <Route path="/login">
    <SignIn/>
    </Route>
    
    <Route path="/contact">
    <Contact/>
    </Route>
    
    
    </>
  )
}

export default App

// DOM (real DOM vs virtual DOM)
// JSX
// Component in React
