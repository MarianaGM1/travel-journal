import { useState } from 'react'
import './styles/App.scss'
import data from './data'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const info = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      <div className='cards--container'>
        {info}
      </div>
      <Footer/>
    </div>
  )
}

export default App