import { NavbarLogin } from '@/components/layout/navbar-login'
import { ModeToggle } from '@/components/theme/toggle-theme-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>
        <NavbarLogin />
      </div>
      <div className='px-4 w-full bg-white'>
        <div className='h-screen flex justify-between p-0'>

        </div>
      </div>
    </div>
    // <div className="flex justify-between items-center">
    //       {/* <ModeToggle /> */}
    //   {/* <Button>Hello</Button> */}
    // </div>
  )
}
