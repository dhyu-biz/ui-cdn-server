import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return <div style={{ fontSize: '20px', color: 'blue' }}>안녕하세요, 아임웹!</div>
}

const mountNode = document.getElementById('my-widget')
if (mountNode) {
  const root = ReactDOM.createRoot(mountNode)
  root.render(<App />)
}
