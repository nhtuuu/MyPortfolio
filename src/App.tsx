import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <div className='p-10 bg-black'>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
