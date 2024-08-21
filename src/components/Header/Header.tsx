import classNames from 'classnames'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from '~/assets/images/logo.png'
import path from '~/constants/path'

export default function Header() {
  return (
    <header className='grid grid-cols-12 px-4 text-textColor border-b border-borderColor'>
      <Link to='/' className='flex items-center col-span-2 py-4 border-r border-borderColor '>
        felix-nguyen
      </Link>
      <div className='flex col-span-8'>
        <Link
          to='/'
          className={classNames('px-5 py-4 border-r border-borderColor flex items-center', {
            'border-b-2 border-b-[#FEA55F] text-[#E5E9F0]': true
          })}
        >
          _hello-world
        </Link>
        <Link to={path.about} className='px-5 py-4 border-r border-borderColor flex items-center'>
          _about-me
        </Link>
        <Link to={path.projects} className='px-5 py-4 border-r border-borderColor flex items-center'>
          _projects
        </Link>
      </div>
      <Link to={path.contact} className='col-span-2 py-4 pl-5 ml-auto border-l border-borderColor flex items-center'>
        _contact-me
      </Link>
    </header>
  )
}
