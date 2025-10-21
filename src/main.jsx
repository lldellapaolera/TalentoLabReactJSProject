import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as bootstrap from 'bootstrap';
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import.meta.env.VITE_PUBLIC_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <BrowserRouter basename='/TalentoLabReactJSProject'>
    <CarritoProvider>        
      <App />          
    </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)
