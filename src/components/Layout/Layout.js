import React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components/macro'

import { SiteHeader, SiteFooter, TimeRecords } from '..'

const LayoutGrid = styled('div')`
  display: grid;
  grid-template-rows: 100px 1fr 50px;
  grid-template-columns: 100vw;
  height: 100vh;
  overflow: hidden;

  article {
    overflow-y: scroll;
  }
`

const Layout = () => {
  return (
    <Box height="100vh">
      <LayoutGrid>
        <div>
          <SiteHeader />
        </div>
        <article>
          <TimeRecords />
        </article>
        <div>
          <SiteFooter />
        </div>
      </LayoutGrid>
    </Box>
  )
}

export default Layout
