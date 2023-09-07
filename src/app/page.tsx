import { NavbarLogin } from '@/components/layout/navbar-login'
import { ModeToggle } from '@/components/theme/toggle-theme-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-between items-center">
          <NavbarLogin />
          {/* <ModeToggle /> */}
      {/* <Button>Hello</Button> */}
    </div>
  )
}
