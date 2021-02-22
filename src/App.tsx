import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';


const Wrapper = styled.div
  `
   display: flex;
   flex-direction: column;
   height: 100vh;
`;

const Main = styled.div`
    flex-grow: 1; 
    overflow: auto;
`
function App() {
  return (
    <Router>
      <Wrapper>
      <Main>
        <Switch>
          <Route path="/money">
            <Money/>
          </Route>

          <Route path="/tags">
            <Tags/>
          </Route>

          <Route path="/statistics">
            <Statistics/>
          </Route>

          <Redirect exact from="/" to="/money"/>

          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <div>
    <h2>no match</h2>
  </div>;
}

function Money() {
  return <h2>money</h2>;
}

function Tags() {
  return <h2>tags</h2>;
}

function Statistics() {
  return <h2>statistics</h2>;
}

export default App;
