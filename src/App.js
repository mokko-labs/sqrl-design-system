import React from "react";
import "./App.scss";

import { Section, Container } from "bloomer";
import Card, { CardContent } from "./lib/Card";

function App() {
  return (
    <Section>
      <Container>
        <Card>
          <CardContent>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

export default App;
