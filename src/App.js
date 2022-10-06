
import './App.css';
import Navbar from './components/navbar';
import News from './components/news';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        Hello Vaibhav!!!
        <Navbar></Navbar>
        <News></News>
      </div>
    )
  }
}
