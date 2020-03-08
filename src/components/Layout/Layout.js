import React from 'react'
import { Main } from 'grommet'
import { detect } from 'detect-browser'

import { SiteHeader, SiteFooter, TimeRecord } from '..'

const { name } = detect()

const Layout = () => {
  return (
    <>
      <SiteHeader browserName={name} />
      <Main>
        <TimeRecord browserName={name} />
      </Main>
      <SiteFooter />
    </>
  )
}

export default Layout
