import cn from 'classnames'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import type { Page } from '@commerce/types/page'
import { Navbar, Footer } from '@components/common'

import s from './Layout.module.css'

interface Props {
  pageProps: {
    pages?: Page[]
  }
}

const Layout: FC<Props> = ({
  children,
  pageProps: { ...pageProps },
}) => {
  const { locale = 'en-US' } = useRouter()

  return (
    <CommerceProvider locale={locale}>
      <div className={cn(s.root)}>
        <Navbar/>
        <main className="fit">{children}</main>
        <Footer pages={pageProps.pages} />
      </div>
    </CommerceProvider>
  )
}

export default Layout
