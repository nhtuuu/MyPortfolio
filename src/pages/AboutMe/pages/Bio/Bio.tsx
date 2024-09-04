import profile from '~/assets/images/profile.png'

export default function Bio() {
  return (
    <>
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
          <div id='1' className='leading-8 overflow-auto max-h-[480px]'>
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
        <div className='p-4 flex h-full'>
          <div className='relative w-full h-full'>
            <img
              src={profile}
              alt=''
              className='absolute inset-0 h-full w-full object-cover object-center opacity-80 rounded-2xl'
            />
          </div>
          {/* <div className='h-1/2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa porro iusto neque dignissimos numquam
        provident aliquam! Similique iste obcaecati impedit quae quaerat, in dicta itaque rem, deserunt illo
        repudiandae. Similique?
      </div> */}
        </div>
      </div>
    </>
  )
}
