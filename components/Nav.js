import s from './Nav.module.css'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react'

export default function Nav() {
  const [menu, setMenu] = useState(false)

  const closeMenu = () => {
    setMenu(false)
  }
  const openMenu = () => {
    setMenu(true)
  }


  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <Link href='/' className={s.logo}>
          <Image src={logo} alt="Mayra Femia logo" width={20}/>
          <h1>Mayra Femia</h1>
        </Link>

        <div className={s.menu} onClick={closeMenu} style={menu? {right: '0'} : {}}>
          <GrClose className={s.close}/>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/service'>service</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <HiMenuAlt3 className={s.open} onClick={openMenu}/>
      </div>
    </div>
  )
}
