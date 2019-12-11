import React from 'react'
import { Section, Container, Columns, Column } from '../lib/'

export default () => (
  <Section>
    <Container>
      <h1>Typography Page</h1>
      <hr />
      <div className="showtime">
        <Columns>
          <Column isSize={2}>
            <p className="meta">Headings</p>
          </Column>
          <Column>
            <h1>Headline Text - H1</h1>
            <h2>Headline Text - H2</h2>
            <h3>Headline Text - H3</h3>
            <h4>Headline Text - H4</h4>
            <h5>Headline Text - H5</h5>
            <h6>Headline Text - H6</h6>
          </Column>
        </Columns>

        <Columns>
          <Column isSize={2}>
            <p className="meta">Lead</p>
          </Column>
          <Column>
            <p className="lead">Est. Payouts / mo</p>
          </Column>
        </Columns>

        <Columns>
          <Column isSize={2}>
            <p className="meta">Subtitle</p>
          </Column>
          <Column>
            <p className="subtitle">
              Close this module when you’re ready to proceed to the next step.
            </p>
          </Column>
        </Columns>

        <Columns>
          <Column isSize={2}>
            <p className="meta">Large Body</p>
          </Column>
          <Column>
            <p className="large-body" style={{ maxWidth: 320 }}>
              Link your business checking account to pay meaningful cash
              incentives at the end of every month directly into the savings
              account of participating employees. This account will also be used
              to make payments after your 30 day free trial.
            </p>
          </Column>
        </Columns>

        <Columns>
          <Column isSize={2}>
            <p className="meta">Body</p>
          </Column>
          <Column>
            <p style={{ maxWidth: 320 }}>
              Link your business checking account to pay meaningful cash
              incentives at the end of every month directly into the savings
              account of participating employees. This account will also be used
              to make payments after your 30 day free trial.
            </p>
          </Column>
        </Columns>

        <Columns>
          <Column isSize={2}>
            <p className="meta">Label</p>
          </Column>
          <Column>
            <p className="label">Employee</p>
          </Column>
        </Columns>

        <Columns>
          <Column isSize={2}>
            <p className="meta">Caption</p>
          </Column>
          <Column>
            <p className="caption">Last updated 4:00 PM EST 5/10/2019</p>
          </Column>
        </Columns>
      </div>
    </Container>
  </Section>
)
