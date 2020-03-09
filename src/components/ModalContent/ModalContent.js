import React from 'react'
import { Box, List, Button, Heading, Paragraph, Text } from 'grommet'

function ModalContent({ closeFn }) {
  return (
    <Box direction="column" align="center" pad="medium">
      <Heading level="2">About this app</Heading>
      <Paragraph>
        This app was based on the{' '}
        <a
          href="http://www-dave.cs.uiuc.edu/hours.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dave's Timecard Calculator
        </a>
        , a tool used to calculate time out of the frustration of calculating
        such things in one's head. It was last updated in 2001, which is well
        before mobile browsers were a thing.
      </Paragraph>

      <Paragraph>
        This application was built quickly in a few hours using React
        (create-react-app), Grommet, and Styled Components. This application
        makes use of the input type=time field, which means this won't work with
        Safari. That's fine.
      </Paragraph>

      <Paragraph>
        As Dave Mussulman says on his page, "You are responsible for the
        timecards you submit". You need to make sure the numbers look correct.
        You and any user bears all responsibility for using this. You can
        contact me{' '}
        <a
          href="https://bancroft.io/Contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Paragraph>

      <Button
        onClick={closeFn}
        style={{ borderRadius: '15px', overflow: 'hidden' }}
      >
        <Box
          background="brand"
          width="medium"
          height="xsmall"
          justify="center"
          align="center"
        >
          <Text size="xxlarge">Close</Text>
        </Box>
      </Button>
    </Box>
  )
}

export default ModalContent
