import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import { Section, Container } from './lib'

import './App.scss'

import DemoPage from './screens/Demo'
import ButtonsPage from './screens/Buttons'
import TypographyPage from './screens/Typography'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Section>
          <Container>
            <Link to="/demo" style={{ padding: 8 }}>
              Demo
            </Link>
            <Link to="/buttons" style={{ padding: 8 }}>
              Buttons
            </Link>
            <Link to="/typography" style={{ padding: 8 }}>
              Typography
            </Link>
          </Container>
        </Section>
        <Switch>
          <Route path="/demo" component={DemoPage} />
          <Route path="/buttons" component={ButtonsPage} />
          <Route path="/typography" component={TypographyPage} />
          <Redirect from="/" exact to="/demo" />
        </Switch>
      </Router>
    )
  }
}

export default App
