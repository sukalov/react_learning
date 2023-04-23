import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'

import App from './App'

const notes = '[{"id":1,"content":"HTML is easy","important":true},{"id":2,"content":"Browser can execute only JavaScript","important":false},{"id":3,"content":"GET and POST are the most important methods of HTTP protocol","important":true},{"content":"some note","important":false,"id":4},{"content":"some other note","important":true,"id":5},{"content":"it works","important":true,"id":6},{"content":"it woreks fine","important":true,"id":7},{"content":"coding stuff","important":true,"id":8},{"content":"here and there","important":true,"id":9},{"content":"next js","important":true,"id":10},{"content":"react app","important":false,"id":11},{"content":"matvey sokolovsky","important":false,"id":12},{"content":"are those important or not","important":false,"id":13},{"content":"bein curious","important":true,"id":14}]'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={JSON.parse(notes)} />
)