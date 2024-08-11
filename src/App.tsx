import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <div className='relative p-12 h-[100vh]'>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
