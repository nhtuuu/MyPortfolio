import classNames from 'classnames'

export default function Footer() {
  return (
    <footer className='grid grid-cols-12 bg-dark px-4 text-textColor border-t border-borderColor bg-transparent'>
      <div className='flex col-span-1 py-4 text-nowrap'>find me in:</div>
      <div className='flex col-span-9'>
        <a
          href='https://www.facebook.com/nhtuuu'
          target='_blank'
          rel='noopener noreferrer'
          className={classNames('flex items-center justify-center w-16 border-l border-r border-borderColor', {
            'border-b-2 border-b-[#FEA55F]': true
          })}
        >
          <svg width='11' height='21' viewBox='0 0 11 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M7 12H9.5L10.5 8H7V6C7 4.97 7 4 9 4H10.5V0.64C10.174 0.597 8.943 0.5 7.643 0.5C4.928 0.5 3 2.157 3 5.2V8H0V12H3V20.5H7V12Z'
              fill='#607B96'
            />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/htu/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center w-16 border-r border-borderColor'
        >
          <svg width='21' height='21' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_17_68)'>
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
        </a>
        <a href='' className='flex items-center justify-center w-16 border-r border-borderColor'>
          <svg width='21' height='21' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z'
              fill='#607B96'
            />
          </svg>
        </a>
      </div>
      <a
        href='https://github.com/nhtuuu'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-end col-span-2 py-4 pl-5 ml-auto border-l border-borderColor'
      >
        <div className='pr-1'>@nhtuuu</div>
        <svg
          className='shrink-0'
          width='21'
          height='20'
          viewBox='0 0 21 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.9771 0.278076C5.45205 0.278076 0.977052 4.75308 0.977052 10.2781C0.975918 12.3774 1.63587 14.4237 2.86327 16.1268C4.09067 17.8298 5.8232 19.1031 7.81505 19.7661C8.31505 19.8531 8.50205 19.5531 8.50205 19.2901C8.50205 19.0531 8.48905 18.2661 8.48905 17.4281C5.97705 17.8911 5.32705 16.8161 5.12705 16.2531C5.01405 15.9651 4.52705 15.0781 4.10205 14.8401C3.75205 14.6531 3.25205 14.1901 4.08905 14.1781C4.87705 14.1651 5.43905 14.9031 5.62705 15.2031C6.52705 16.7151 7.96505 16.2901 8.53905 16.0281C8.62705 15.3781 8.88905 14.9411 9.17705 14.6911C6.95205 14.4411 4.62705 13.5781 4.62705 9.75308C4.62705 8.66508 5.01405 7.76608 5.65205 7.06508C5.55205 6.81508 5.20205 5.79008 5.75205 4.41508C5.75205 4.41508 6.58905 4.15308 8.50205 5.44108C9.31611 5.21514 10.1572 5.10142 11.0021 5.10308C11.8521 5.10308 12.7021 5.21508 13.5021 5.44008C15.4141 4.14008 16.2521 4.41608 16.2521 4.41608C16.8021 5.79108 16.4521 6.81608 16.3521 7.06608C16.9891 7.76608 17.3771 8.65308 17.3771 9.75308C17.3771 13.5911 15.0401 14.4411 12.8151 14.6911C13.1771 15.0031 13.4901 15.6031 13.4901 16.5411C13.4901 17.8781 13.4771 18.9531 13.4771 19.2911C13.4771 19.5531 13.6651 19.8651 14.1651 19.7651C16.1501 19.0949 17.875 17.8191 19.097 16.1172C20.3189 14.4154 20.9765 12.3732 20.9771 10.2781C20.9771 4.75308 16.5021 0.278076 10.9771 0.278076Z'
            fill='#607B96'
          />
        </svg>
      </a>
    </footer>
  )
}
