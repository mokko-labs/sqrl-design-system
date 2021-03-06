import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryAltButton,
  TertiaryButton,
  Section,
  Container,
  FlatButton,
  TextLinkButton,
  TextCapsLinkButton
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
        <PrimaryButton busy>Get Started</PrimaryButton>
      </div>

      <hr />

      <h2>Primary Button (Text)</h2>
      <div className="sqrl-util-spread">
        <PrimaryButton text>Get Started</PrimaryButton>
        <PrimaryButton text className="hover">
          Get Started
        </PrimaryButton>
        <PrimaryButton text className="active">
          Get Started
        </PrimaryButton>
        <PrimaryButton text disabled>
          Get Started
        </PrimaryButton>

        <PrimaryButton text className="focus">
          Get Started
        </PrimaryButton>
        <PrimaryButton text className="hover focus">
          Get Started
        </PrimaryButton>
        <PrimaryButton text className="active focus">
          Get Started
        </PrimaryButton>
        <PrimaryButton text busy>
          Get Started
        </PrimaryButton>
      </div>

      <hr />
      <h2>Flat Button</h2>
      <div className="sqrl-util-spread">
        <FlatButton
          onClick={() => {
            alert('Flat button clicked!!')
          }}
        >
          Cancel
        </FlatButton>
        <FlatButton disabled>Cancel</FlatButton>
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
        <SecondaryButton busy>Get Started</SecondaryButton>
      </div>

      <hr />
      <h2>Secondary Button (Stroke / Outline)</h2>
      <div className="sqrl-util-spread">
        <SecondaryButton outline>Get Started</SecondaryButton>
        <SecondaryButton outline className="hover">
          Get Started
        </SecondaryButton>
        <SecondaryButton outline className="active">
          Get Started
        </SecondaryButton>
        <SecondaryButton outline disabled>
          Get Started
        </SecondaryButton>

        <SecondaryButton outline className="focus">
          Get Started
        </SecondaryButton>
        <SecondaryButton outline className="hover focus">
          Get Started
        </SecondaryButton>
        <SecondaryButton outline className="active focus">
          Get Started
        </SecondaryButton>
      </div>

      <hr />
      <h2>Secondary Alt Button</h2>
      <div className="sqrl-util-spread">
        <SecondaryAltButton outline>Get Started</SecondaryAltButton>
        <SecondaryAltButton outline className="hover">
          Get Started
        </SecondaryAltButton>
        <SecondaryAltButton outline className="active">
          Get Started
        </SecondaryAltButton>
        <SecondaryAltButton outline disabled>
          Get Started
        </SecondaryAltButton>

        <SecondaryAltButton outline className="focus">
          Get Started
        </SecondaryAltButton>
        <SecondaryAltButton outline className="hover focus">
          Get Started
        </SecondaryAltButton>
        <SecondaryAltButton outline className="active focus">
          Get Started
        </SecondaryAltButton>
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
        <TertiaryButton outline>Get Started</TertiaryButton>
        <TertiaryButton outline className="hover">
          Get Started
        </TertiaryButton>
        <TertiaryButton outline className="active">
          Get Started
        </TertiaryButton>
        <TertiaryButton outline disabled>
          Get Started
        </TertiaryButton>

        <TertiaryButton outline className="focus">
          Get Started
        </TertiaryButton>
        <TertiaryButton outline className="hover focus">
          Get Started
        </TertiaryButton>
        <TertiaryButton outline className="active focus">
          Get Started
        </TertiaryButton>
      </div>

      <hr />
      <h2>Text Link</h2>

      <div className="sqrl-util-spread">
        Inline with <TextLinkButton>Text Link</TextLinkButton>
        Inline with <TextLinkButton className="hover">Text Link</TextLinkButton>
        Inline with <TextLinkButton disabled>Text Link</TextLinkButton>
      </div>

      <hr />
      <h2>Text Caps Link</h2>
      <div className="sqrl-util-spread">
        <TextCapsLinkButton>Text Link</TextCapsLinkButton>
        <TextCapsLinkButton className="hover">Text Link</TextCapsLinkButton>
        <TextCapsLinkButton disabled>Text Link</TextCapsLinkButton>
      </div>

      <br />
    </Container>
  </Section>
)
