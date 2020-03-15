import React, { useState } from 'react'
import { Box } from 'grommet'
import styled from 'styled-components/macro'

import { SiteHeader, SiteFooter, TimeRecordsContainer } from '..'

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
  const [totalHours, setTotalHours] = useState(0)

  return (
    <Box height="100vh">
      <LayoutGrid>
        <div>
          <SiteHeader totalHours={totalHours} />
        </div>
        <article>
          <TimeRecordsContainer setTotalHours={setTotalHours} />
        </article>
        <div>
          <SiteFooter />
        </div>
      </LayoutGrid>
    </Box>
  )
}

export default Layout
