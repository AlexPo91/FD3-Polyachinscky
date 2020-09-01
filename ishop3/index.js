import React from 'react'
import ReactDOM from 'react-dom'

import MyComponents from './components/MyComponents'
import Header from './components/Header'

ReactDOM.render(
    <div>
        <Header />
         <MyComponents/>
    </div>
   
    , document.querySelector('#root')
)