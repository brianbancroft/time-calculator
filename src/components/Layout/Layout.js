import React from 'react'
import { Main } from 'grommet'

import { SiteHeader, SiteFooter, TimeRecords } from '..'

const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Main>
        <TimeRecords />
      </Main>
      <SiteFooter />
    </>
  )
}

export default Layout
