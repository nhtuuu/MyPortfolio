import classNames from 'classnames'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from '~/assets/images/logo.png'

export default function Header() {
  return (
    <header className='grid grid-cols-12 bg-transparent px-4 text-textColor border-b border-borderColor'>
      <Link to='/' className='col-span-2 py-4'>
        felix-nguyen
      </Link>
      <div className='flex col-span-8'>
        <Link
          to='/'
          className={classNames('px-5 py-4 border-l border-r border-borderColor', {
            'border-b-2 border-b-[#FEA55F]': true
          })}
        >
          _hello-world
        </Link>
        <Link to='/' className='px-5 py-4 border-r border-borderColor'>
          _about-me
        </Link>
        <Link to='/' className='px-5 py-4 border-r border-borderColor'>
          _projects
        </Link>
      </div>
      <Link to='/' className='col-span-2 py-4 pl-5 ml-auto border-l border-borderColor'>
        _contact-me
      </Link>
    </header>
  )
}
