import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from './components/Alert'

const App = () => {
  return (
    <div>
      <h1>Bienvenue sur l'appli de test de Framer</h1>
      <Alert />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));