import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import {Toaster} from  'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store}>
      <ThemeProvider>
        <AuthProvider>
    <App />
    </AuthProvider>
    </ThemeProvider>
    <Toaster/>
    </Provider>
  </StrictMode>,
)
