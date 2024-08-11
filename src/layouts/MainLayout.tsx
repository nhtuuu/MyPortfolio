import Footer from '~/components/Footer'
import Header from '~/components/Header'
import ParticlesComponent from '~/components/ParticlesComponent'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className='absolute inset-0 bg-black z-[-99]'></div>
      <div className='relative border border-borderColor rounded-md h-full flex flex-col justify-between '>
        <ParticlesComponent className='absolute inset-0 z-[-1]' />
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
