import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  Section,
  Container
} from '../lib'

export default () => (
  <Section>
    <Container>
      <h1>Buttons Page</h1>

      <hr />

      <h2>Primary Button</h2>
      <div className="sqrl-util-spread">
        <PrimaryButton>Get Started</PrimaryButton>
        <PrimaryButton className="hover">Get Started</PrimaryButton>
        <PrimaryButton className="active">Get Started</PrimaryButton>
        <PrimaryButton disabled>Get Started</PrimaryButton>

        <PrimaryButton className="focus">Get Started</PrimaryButton>
        <PrimaryButton className="hover focus">Get Started</PrimaryButton>
        <PrimaryButton className="active focus">Get Started</PrimaryButton>
      </div>

      <hr />
      <h2>Secondary Button</h2>
      <div className="sqrl-util-spread">
        <SecondaryButton>Get Started</SecondaryButton>
        <SecondaryButton className="hover">Get Started</SecondaryButton>
        <SecondaryButton className="active">Get Started</SecondaryButton>
        <SecondaryButton disabled>Get Started</SecondaryButton>

        <SecondaryButton className="focus">Get Started</SecondaryButton>
        <SecondaryButton className="hover focus">Get Started</SecondaryButton>
        <SecondaryButton className="active focus">Get Started</SecondaryButton>
      </div>

      <hr />
      <h2>Secondary Button (Stroke / Outline)</h2>
      <div className="sqrl-util-spread">
        <SecondaryButton className="outline">Get Started</SecondaryButton>
        <SecondaryButton className="outline hover">Get Started</SecondaryButton>
        <SecondaryButton className="outline active">
          Get Started
        </SecondaryButton>
        <SecondaryButton className="outline" disabled>
          Get Started
        </SecondaryButton>

        <SecondaryButton className="outline focus">Get Started</SecondaryButton>
        <SecondaryButton className="outline hover focus">
          Get Started
        </SecondaryButton>
        <SecondaryButton className="outline active focus">
          Get Started
        </SecondaryButton>
      </div>

      <hr />
      <h2>Tertiary Button</h2>
      <div className="sqrl-util-spread">
        <TertiaryButton>Get Started</TertiaryButton>
        <TertiaryButton className="hover">Get Started</TertiaryButton>
        <TertiaryButton className="active">Get Started</TertiaryButton>
        <TertiaryButton disabled>Get Started</TertiaryButton>

        <TertiaryButton className="focus">Get Started</TertiaryButton>
        <TertiaryButton className="hover focus">Get Started</TertiaryButton>
        <TertiaryButton className="active focus">Get Started</TertiaryButton>
      </div>

      <hr />
      <h2>Tertiary Button (Stroke / Outline)</h2>
      <div className="sqrl-util-spread">
        <TertiaryButton className="outline">Get Started</TertiaryButton>
        <TertiaryButton className="outline hover">Get Started</TertiaryButton>
        <TertiaryButton className="outline active">Get Started</TertiaryButton>
        <TertiaryButton className="outline" disabled>
          Get Started
        </TertiaryButton>

        <TertiaryButton className="outline focus">Get Started</TertiaryButton>
        <TertiaryButton className="outline hover focus">
          Get Started
        </TertiaryButton>
        <TertiaryButton className="outline active focus">
          Get Started
        </TertiaryButton>
      </div>
      <br />
    </Container>
  </Section>
)
