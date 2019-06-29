import React from 'react'

import { Section, Container } from 'bloomer'
import { Box, Button, Field, Label, Control, Input } from './lib'

function App() {
  return (
    <Section>
      <Container>
        <Box>
          <h1>Hello</h1>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input type="text" placeholder="Text Input" />
            </Control>
          </Field>{' '}
          <Button isColor="primary" className="is-rounded">
            Hello
          </Button>
        </Box>
      </Container>
    </Section>
  )
}

export default App
