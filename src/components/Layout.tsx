import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
`;

const Main = styled.div`
    flex-grow: 1; 
    overflow: auto;
`
const Layout = (prop: any) =>{
  return (
    <Wrapper>
      <Main className={prop.className}>
        {prop.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}
export default Layout