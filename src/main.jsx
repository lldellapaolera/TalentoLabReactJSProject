import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as bootstrap from 'bootstrap';
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx';
import BrowserRouter from 'react-router-dom/BrowserRouter';


createRoot(document.getElementById('root')).render(
  <StrictMode>    
      <CarritoProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />  
        </BrowserRouter>        
    </CarritoProvider>
  </StrictMode>,
)
