import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Rotes/Routes'

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
