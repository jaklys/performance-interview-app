import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  }, []);

  if(!show) {
    return <></>
  }

  return (<NavbarRoot>
    <Container>
      <div className={s.nav}>
        <div className='flex items-center flex-1'>
          <Link href='/'>
            <a className={s.logo} aria-label='Logo'>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  </NavbarRoot>)
}

export default Navbar
