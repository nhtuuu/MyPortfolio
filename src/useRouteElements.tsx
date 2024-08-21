import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts'
import NotFound from './pages/NotFound'
import path from './constants/path'
import LandingPage from './pages/LandingPage'
import AboutMeLayout from './pages/AboutMe/layouts/AboutMeLayout'
import Bio from './pages/AboutMe/pages/Bio'
import Education from './pages/AboutMe/pages/Education'
import Projects from './pages/Projects/Projects'

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
      path: path.about,
      element: (
        <MainLayout>
          <AboutMeLayout />
        </MainLayout>
      ),
      children: [
        {
          path: path.bio,
          element: <Bio />
        },
        {
          path: path.education,
          element: <Education />
        }
      ]
    },
    {
      path: path.projects,
      index: true,
      element: (
        <MainLayout>
          <Projects />
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
