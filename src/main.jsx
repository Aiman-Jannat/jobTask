import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='p-4 bg-yellow-100'>
    <Main/>
    </div>
  </React.StrictMode>,
)
