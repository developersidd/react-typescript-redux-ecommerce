import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'react-tooltip/dist/react-tooltip.css'
import App from './App'
import { store } from './redux/app/store'
import "./style/index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
