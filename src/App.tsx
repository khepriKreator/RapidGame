import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {EndPage, MainPage, StartPage} from "./pages";
import './App.css'
function App() {
  const routerConfig = createBrowserRouter([
      {
          path: '/start',
          element: <StartPage/>
      },
      {
          path: '/game',
          element: <MainPage/>
      },
      {
          path: '/end',
          element: <EndPage/>
      }
  ])
  return (
    <div className={'body'}>
      <RouterProvider router={routerConfig}/>
    </div>
  )
}

export default App
