import React from 'react'
import { CustomButton as Button, Section, Container } from '../lib'

export default () => (
  <Section>
    <Container>
      <h1>Buttons Page</h1>

      <hr />

      <h2>Primary Button</h2>
      <div className="sqrl-util-spread">
        <Button>Get Started</Button>
        <Button className="hover">Get Started</Button>
        <Button className="active">Get Started</Button>
        <Button className="disabled">Get Started</Button>

        <Button className="focus">Get Started</Button>
        <Button className="hover focus">Get Started</Button>
        <Button className="active focus">Get Started</Button>
      </div>

      <br />
    </Container>
  </Section>
)
