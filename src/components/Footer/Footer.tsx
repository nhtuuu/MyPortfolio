import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <header className='grid grid-cols-12 bg-dark px-4 text-textColor'>
      <Link to='/' className='col-span-2 py-4'>
        find me in:
      </Link>
      <div className='flex col-span-8'>
        <div
          className={classNames('px-5 py-4 border-l border-r border-borderColor', {
            'border-b-2 border-b-[#FEA55F]': true
          })}
        >
          <svg width='11' height='21' viewBox='0 0 11 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M7 12H9.5L10.5 8H7V6C7 4.97 7 4 9 4H10.5V0.64C10.174 0.597 8.943 0.5 7.643 0.5C4.928 0.5 3 2.157 3 5.2V8H0V12H3V20.5H7V12Z'
              fill='#607B96'
            />
          </svg>
        </div>
        <div className='px-5 py-4 border-r border-borderColor'>
          <svg width='21' height='21' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_17_68)'>
              <path
                d='M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z'
                fill='#607B96'
              />
            </g>
            <defs>
              <clipPath id='clip0_17_68'>
                <rect width='48' height='48' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='px-5 py-4 border-r border-borderColor'>
          <svg width='21' height='21' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z'
              fill='#607B96'
            />
          </svg>
        </div>
      </div>
      <div className='col-span-2 py-4 pl-5 ml-auto border-l border-borderColor'>@nhtuuu</div>
    </header>
  )
}
