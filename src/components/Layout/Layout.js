import React from 'react'
import { Main } from 'grommet'
import { SiteHeader, SiteFooter, TimeRecord } from '..'
import { detect } from 'detect-browser'

const { name } = detect()

console.log('browser info ', detect())

const Layout = () => {
  return (
    <>
      <SiteHeader browserName={name} />
      <Main>
        <TimeRecord />
      </Main>
      <SiteFooter />
    </>
  )
}

export default Layout
