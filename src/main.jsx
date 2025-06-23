import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { WidgetProvider } from './store/WidgetContext.jsx'

createRoot(document.getElementById('root')).render(
  <WidgetProvider>
  
    
    <App />
   
 </WidgetProvider>

)
