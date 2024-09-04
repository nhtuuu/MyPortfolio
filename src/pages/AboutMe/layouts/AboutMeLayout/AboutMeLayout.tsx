import { Outlet } from 'react-router-dom'
import AboutMeSideNav from '../../components/AboutMeSideNav'

export default function AboutMeLayout() {
  return (
    <div className='grid grid-cols-10 text-textMainColor h-full'>
      <div className='col-span-2 border-r border-borderColor'>
        <AboutMeSideNav />
      </div>
      <Outlet />
    </div>
  )
}
