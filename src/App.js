import React from 'react'

import { Section, Container, Title } from 'bloomer'
import { Box, Button, Card, CardContent } from './lib'

function App() {
  return (
    <Section>
      <Container>
        <Box>
          <Title isSize={1}>Hello</Title>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button isColor="primary" className="is-rounded">
            Hello
          </Button>
        </Box>
      </Container>
    </Section>
  )
}

export default App
