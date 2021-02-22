import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Layout from './components/Layout';


function App() {
  return (
    <Router>
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


    </Router>
  );
}

function NoMatch() {
  return <div>
    <h2>no match</h2>
  </div>;
}

function Money() {
  return <Layout>
    <h2>记账页面</h2>
  </Layout>;

}

function Tags() {
  return <Layout>
    <h2>标签页面</h2>
  </Layout>;

}

function Statistics() {
  return <Layout>
    <h2>统计页面</h2>
  </Layout>;
}

export default App;
