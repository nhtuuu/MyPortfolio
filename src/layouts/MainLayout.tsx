import Footer from '~/components/Footer'
import Header from '~/components/Header'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='border border-borderColor rounded-md h-full flex flex-col justify-between bg-dark'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
