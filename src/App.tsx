import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {EndPage, MainPage, StartPage} from "./pages";
import './App.css'
const routerConfig = createBrowserRouter([
    {
        path: '/start',
        element: <StartPage/>
    },
    {
        path: '/game/:levelOfDifficult',
        element: <MainPage/>
    },
    {
        path: '/:end',
        element: <EndPage/>
    }
])
function App() {
  return (
    <div className={'body'}>
      <RouterProvider router={routerConfig}/>
    </div>
  )
}

export default App
