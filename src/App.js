import React from 'react'

import { Section, Container } from 'bloomer'
import { Box, Button, Field, FlatLogo, CustomInput } from './lib'

function App() {
  return (
    <Section>
      <Container>
        <Box>
          <h1>Hello</h1>
          <Field>
            <CustomInput label="Name" type="text" />
          </Field>{' '}
          <Button isColor="primary" className="is-rounded">
            Hello
          </Button>
        </Box>
        <FlatLogo />
      </Container>
    </Section>
  )
}

export default App
