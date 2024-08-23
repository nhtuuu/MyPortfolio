import { useEffect, useState } from 'react'
import bgblur from '~/assets/images/bgblur.png'

export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const toggleOpacity = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 6) // Cycle through indices 0 to 5
    }

    const interval = setInterval(toggleOpacity, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='grid grid-cols-3 bg-dark bg-transparent px-12'>
        <img src={bgblur} alt='bg-blur' className='absolute top-0 right-[-48px] h-[800px] w-[800px] z-[-1]' />
        <div className='col-span-2'>
          <div>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE] ml-2'>
              H
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              e
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              l
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              l
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              o
            </span>{' '}
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              w
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              o
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              r
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              l
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              d
            </span>
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              !
            </span>{' '}
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              I
            </span>{' '}
            <span className='text-textSecondaryColor text-3xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              am
            </span>
          </div>
          <h1 className='py-4'>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              F
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              e
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              l
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              i
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              x
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE] pl-6'>
              N
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              g
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              u
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              y
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              e
            </span>
            <span className='text-textSecondaryColor text-8xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#4D5BCE]'>
              n
            </span>
          </h1>
          <h2>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              &gt;
            </span>{' '}
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              F
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              r
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              o
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              n
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              t
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              -
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              e
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              n
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              d
            </span>{' '}
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              d
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              e
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              v
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              l
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              o
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              p
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              e
            </span>
            <span className='text-[#4D5BCE] text-5xl font-extrabold inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#43D9AD]'>
              r
            </span>
          </h2>
        </div>
        <div className='col-span-1'>
          <div className='relative h-full'>
            <div
              className={`absolute inset-0 flex items-center justify-center ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            >
              <svg
                viewBox='0 0 256 256'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
                height='300px'
                width='300px'
                className='w-60 md:w-72 xl:w-full'
              >
                <g>
                  <path d='M0,0 L256,0 L256,256 L0,256 L0,0 Z' fill='#F7DF1E' />
                  <path
                    d='M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026'
                    fill='#000000'
                  />
                  <path
                    d='M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413'
                    fill='#000000'
                  />
                </g>
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            >
              <svg
                height='300px'
                width='300px'
                viewBox='0 0 256 228'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
                className='w-60 md:w-72 xl:w-full'
              >
                <g>
                  <path
                    d='M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z'
                    fill='#00D8FF'
                  />
                </g>
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            >
              <svg
                height='300px'
                width='300px'
                viewBox='0 0 256 221'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
                className='w-60 md:w-72 xl:w-full'
              >
                <g>
                  <path
                    d='M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z'
                    fill='#41B883'
                  />
                  <path d='M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z' fill='#41B883' />
                  <path d='M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z' fill='#35495E' />
                </g>
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            >
              <svg
                viewBox='0 0 256 272'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
                height='300px'
                width='300px'
                className='w-60 md:w-72 xl:w-full'
              >
                <g>
                  <path
                    d='M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z'
                    fill='#E23237'
                  />
                  <path
                    d='M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z'
                    fill='#B52E31'
                  />
                  <path
                    d='M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z'
                    fill='#FFFFFF'
                  />
                </g>
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            >
              <svg
                height='300px'
                width='300px'
                viewBox='0 0 256 361'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
                className='w-60 md:w-72 xl:w-full'
              >
                <g>
                  <path
                    d='M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z'
                    fill='#E44D26'
                  />
                  <path
                    d='M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z'
                    fill='#F16529'
                  />
                  <path
                    d='M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z'
                    fill='#EBEBEB'
                  />
                  <path
                    d='M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z'
                    fill='#EBEBEB'
                  />
                  <path
                    d='M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z'
                    fill='#fff'
                  />
                  <path
                    d='M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z'
                    fill='#fff'
                  />
                  <path
                    d='M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z'
                    fill='#fff'
                  />
                  <path
                    d='M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z'
                    fill='#fff'
                  />
                  <path
                    d='M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z'
                    fill='#FFFFFF'
                  />
                  <path
                    d='M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z'
                    fill='#FFFFFF'
                  />
                </g>
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center ${activeIndex === 5 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            >
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 512 512'
                xmlSpace='preserve'
                height='300px'
                width='300px'
                className='w-60 md:w-72 xl:w-full'
              >
                <path
                  style={{ fill: '#2196F3' }}
                  d='M434.582,110.165c-2.02-2.227-4.887-3.497-7.893-3.499H85.355  c-5.891-0.026-10.688,4.728-10.714,10.619c-0.002,0.351,0.014,0.701,0.047,1.05l32,341.333c0.413,4.379,3.471,8.055,7.701,9.259  l149.333,42.667c0.964,0.274,1.963,0.41,2.965,0.405c1.144-0.001,2.282-0.181,3.371-0.533l128-42.667  c4.015-1.336,6.86-4.918,7.253-9.131l32-341.333C437.592,115.35,436.6,112.384,434.582,110.165z'
                />
                <g>
                  <path
                    style={{ fill: '#FAFAFA' }}
                    d='M266.689,426.667c-0.989-0.006-1.973-0.15-2.923-0.427l-74.667-21.333   c-3.665-1.043-6.495-3.963-7.424-7.659l-10.667-42.667c-1.558-5.681,1.785-11.55,7.466-13.108   c5.681-1.558,11.55,1.785,13.108,7.466c0.044,0.159,0.083,0.318,0.119,0.479l9.173,36.693l65.813,18.816l64.853-18.539   l19.2-173.035h-190.72c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h202.667   c5.891-0.036,10.695,4.711,10.731,10.602c0.002,0.414-0.019,0.827-0.065,1.238l-21.333,192c-0.484,4.3-3.518,7.882-7.68,9.067   l-74.667,21.333C268.704,426.537,267.698,426.674,266.689,426.667z'
                  />
                  <path
                    style={{ fill: '#FAFAFA' }}
                    d='M352.022,298.667H170.689c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h181.333   c5.891,0,10.667,4.776,10.667,10.667S357.913,298.667,352.022,298.667z'
                  />
                </g>
                <g>
                  <path
                    style={{ fill: '#fff' }}
                    d='M192.022,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667V10.667C138.689,4.776,143.464,0,149.355,0   h42.667c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-32v21.333h32c5.891,0,10.667,4.776,10.667,10.667   S197.913,64,192.022,64z'
                  />
                  <path
                    style={{ fill: '#fff' }}
                    d='M277.355,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h16.917   l-24.469-24.448c-4.171-4.16-4.179-10.914-0.019-15.085c2.006-2.011,4.731-3.139,7.571-3.134h42.667   c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-16.917l24.448,24.448c4.171,4.16,4.179,10.914,0.019,15.085   C282.904,62.872,280.188,63.999,277.355,64z'
                  />
                  <path
                    style={{ fill: '#fff' }}
                    d='M362.689,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h16.917   L312.47,18.219c-4.171-4.16-4.179-10.914-0.019-15.085c2.006-2.011,4.731-3.139,7.571-3.134h42.667   c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-16.917l24.448,24.448c4.171,4.16,4.179,10.914,0.019,15.085   C368.238,62.872,365.521,63.999,362.689,64z'
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
