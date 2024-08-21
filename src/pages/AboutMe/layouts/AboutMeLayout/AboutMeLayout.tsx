import profile from '~/assets/images/profile.png'

export default function AboutMeLayout() {
  return (
    <div className='grid grid-cols-10 text-textColor h-full pl-4'>
      <div className='grid grid-cols-6 col-span-2 border-r border-borderColor'>
        <div className='col-span-1 border-r border-borderColor py-4'>
          <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g opacity='0.4' clipPath='url(#clip0_64_1623)'>
              <path
                d='M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z'
                fill='#607B96'
              />
            </g>
            <defs>
              <clipPath id='clip0_64_1623'>
                <rect width='24' height='24' fill='white' transform='translate(0 0.651855)' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='col-span-5'>
          <div className='flex items-center p-4 border-b border-borderColor'>
            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg' className='mr-2'>
              <path d='M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z' fill='white' />
            </svg>
            personal-info
          </div>
          <ul className='p-4'>
            <li className='flex mb-2'>
              <svg
                width='9'
                height='14'
                viewBox='0 0 9 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z'
                  fill='#607B96'
                />
              </svg>
              <svg
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z'
                  fill='#E99287'
                />
              </svg>
              bio
            </li>
            <li className='flex'>
              <svg
                width='9'
                height='14'
                viewBox='0 0 9 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z'
                  fill='#607B96'
                />
              </svg>
              <svg
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M15.0802 4.49392V13.1606C15.0802 13.3521 15.0041 13.5358 14.8687 13.6713C14.7332 13.8067 14.5495 13.8828 14.358 13.8828H1.35796C1.16642 13.8828 0.982719 13.8067 0.847276 13.6713C0.711833 13.5358 0.635742 13.3521 0.635742 13.1606V3.7717H14.358C14.5495 3.7717 14.7332 3.84779 14.8687 3.98324C15.0041 4.11868 15.0802 4.30238 15.0802 4.49392ZM8.15696 2.32726H0.635742V1.60503C0.635742 1.41349 0.711833 1.22979 0.847276 1.09435C0.982719 0.958904 1.16642 0.882813 1.35796 0.882812H6.71252L8.15696 2.32726Z'
                  fill='#3A49A4'
                />
              </svg>
              education
            </li>
          </ul>
          <div className='flex items-center p-4 border-t border-b border-borderColor'>
            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg' className='mr-2'>
              <path d='M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z' fill='white' />
            </svg>
            contacts
          </div>
          <ul className='p-4'>
            <li className='flex mb-2'>
              <svg
                width='9'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M0.811096 0.548828H15.4108C15.6259 0.548828 15.8322 0.634283 15.9844 0.786393C16.1365 0.938503 16.2219 1.14481 16.2219 1.35992V14.3375C16.2219 14.5526 16.1365 14.7589 15.9844 14.911C15.8322 15.0631 15.6259 15.1486 15.4108 15.1486H0.811096C0.59598 15.1486 0.389675 15.0631 0.237565 14.911C0.0854545 14.7589 0 14.5526 0 14.3375V1.35992C0 1.14481 0.0854545 0.938503 0.237565 0.786393C0.389675 0.634283 0.59598 0.548828 0.811096 0.548828ZM8.15963 7.59158L2.95888 3.17516L1.90851 4.41127L8.17017 9.728L14.3191 4.40721L13.2582 3.18002L8.16044 7.59158H8.15963Z'
                  fill='#607B96'
                />
              </svg>
              nhtu.sgs@gmail.com
            </li>
            <li className='flex'>
              <svg
                width='9'
                height='18'
                viewBox='0 0 17 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M16.221 13.0453V16.2319C16.2211 16.46 16.1347 16.6797 15.9791 16.8466C15.8236 17.0136 15.6105 17.1153 15.3829 17.1312C14.9891 17.1583 14.6674 17.1727 14.4187 17.1727C6.45507 17.1727 0 10.7176 0 2.754C0 2.50527 0.0135175 2.18356 0.0414537 1.78975C0.0574246 1.56215 0.159129 1.34908 0.326046 1.19354C0.492962 1.038 0.712664 0.951557 0.940819 0.95166H4.12735C4.23913 0.951547 4.34696 0.992987 4.4299 1.06793C4.51283 1.14287 4.56495 1.24597 4.57613 1.35719C4.59686 1.56445 4.61578 1.72937 4.63381 1.85463C4.8129 3.10448 5.17992 4.32008 5.72242 5.4602C5.80803 5.64044 5.75215 5.85582 5.58994 5.97117L3.64522 7.36077C4.83427 10.1314 7.04222 12.3393 9.81282 13.5284L11.2006 11.5872C11.2573 11.5079 11.3401 11.4511 11.4345 11.4265C11.5288 11.402 11.6288 11.4113 11.717 11.453C12.857 11.9945 14.0723 12.3606 15.3217 12.5389C15.4469 12.5569 15.6118 12.5767 15.8173 12.5966C15.9284 12.6079 16.0312 12.6601 16.106 12.7431C16.1807 12.826 16.2221 12.9337 16.2219 13.0453H16.221Z'
                  fill='#607B96'
                />
              </svg>
              0401 956 415
            </li>
          </ul>
        </div>
      </div>
      <div className='col-span-4 border-r border-borderColor w-full'>
        <div className='border-b border-borderColor w-full'>
          <div className='flex justify-between p-4 border-r border-borderColor max-w-64'>
            bio
            <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_64_1646)'>
                <path
                  d='M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_64_1646'>
                  <rect width='18' height='18' fill='white' transform='translate(0.347656 0.779297)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='p-4 leading-6 text-justify'>
          <div className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-4xl font-extrabold tracking-wide mb-4'>
            Who am I?
          </div>
          <div id='1' className='leading-8 overflow-auto max-h-[500px]'>
            /**{' '}
            <div className=''>
              Hi, I’m Felix Nguyen, a self-taught <span className='boxText boxTextBlue'>Front-End Developer</span> with
              a strong foundation in <span className='text-[#f0db4f]'>Javascript</span>,{' '}
              <span className='text-[#007acc]'>TypeScript</span>, <span className='text-[#61dbfb]'>React</span>, and{' '}
              <span className='text-[#215732]'>Node.js</span>. Over the past two years, I’ve immersed myself in the
              world of web programming, learning through online resources and completing various personal projects.
              Although I originally earned a Master’s degree in Strategic Supply Chain Management, I discovered my true
              passion for web development and decided to pivot my career path. This transition has been challenging,
              especially without an IT background, but my determination and enthusiasm for coding have kept me driven
              and focused.
            </div>
            {/* I’m now seeking an entry-level position where I can apply my skills and continue to grow as a
              developer. */}
            */
          </div>
        </div>
      </div>
      <div className='col-span-4 flex flex-col max-h-[738.8px]'>
        <div className='border-b border-borderColor w-full'>
          <div className='flex justify-between p-4 border-r border-borderColor max-w-64'>
            profile.png
            <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_64_1646)'>
                <path
                  d='M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_64_1646'>
                  <rect width='18' height='18' fill='white' transform='translate(0.347656 0.779297)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='p-4 flex'>
          <div className='bg-[#011221] border border-[#1E2D3D] rounded-2xl w-full'>
            <img src={profile} alt='' className='h-auto w-full object-cover object-center opacity-80 rounded-2xl' />
            {/* <div className='h-1/2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa porro iusto neque dignissimos numquam
              provident aliquam! Similique iste obcaecati impedit quae quaerat, in dicta itaque rem, deserunt illo
              repudiandae. Similique?
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
