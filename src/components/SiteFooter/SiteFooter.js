import React, { useState } from 'react'
import { Box, Footer, Text, Layer } from 'grommet'
import { ModalContent } from '..'

/**
 * The layout of the footer as well as the modal controls
 */
function SiteFooter() {
  const [layer, setLayer] = useState(false)

  return (
    <>
      <Footer background="dark-3" height="50px" justify="between" pad="medium">
        <Box>
          <Text>2020, bancroft.io</Text>
        </Box>
        <Box onClick={() => setLayer(true)}>Click to learn more</Box>
      </Footer>

      {layer && (
        <Layer
          onClickOutside={() => setLayer(false)}
          onEsc={() => setLayer(false)}
        >
          <ModalContent />
        </Layer>
      )}
    </>
  )
}

export default SiteFooter
