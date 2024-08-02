import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <LandingPage />
        </MainLayout>
      )
    },
    {
      path: '*',
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
