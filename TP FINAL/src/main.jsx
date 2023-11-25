import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header.jsx'
import Search from './Search/Search.jsx'
import Characters from './Characters/Characters.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Search />
    <Characters />
  </React.StrictMode>,
)
