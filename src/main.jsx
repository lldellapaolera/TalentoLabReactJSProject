import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as bootstrap from 'bootstrap';
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <CarritoProvider>        
      <App />          
    </CarritoProvider>
  </StrictMode>,
)
