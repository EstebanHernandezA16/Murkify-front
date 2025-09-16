import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,Bro } from 'react-router-dom'
import { MyRouter } from './Components/Router/router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={MyRouter}/>
  </StrictMode>,
)
