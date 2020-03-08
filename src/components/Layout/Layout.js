import React from 'react'
import { Main } from 'grommet'
import { SiteHeader, SiteFooter } from '..'

const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Main>Hello world</Main>
      <SiteFooter />
    </>
  )
}

export default Layout
