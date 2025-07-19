import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Quizapp from './Quizapp'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quizapp />
  </StrictMode>,
)
