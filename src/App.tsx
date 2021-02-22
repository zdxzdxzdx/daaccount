import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';


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
const Nav =styled.nav`
  >ul{
   display: flex;
    >li{
    width: 33.333%;
    text-align: center;
    padding: 16px;
    }
 
 
 }
 

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
        <Nav>
          <ul>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
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
