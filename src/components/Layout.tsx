import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
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
type Props ={
  className?: string;
  scrollTop?: number;
}
const Layout:React.FC<Props> = (props) =>{
  //所有人都可以通过mainRef拿到main元素
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    setTimeout(()=>{
      if (!mainRef.current){return}
      mainRef.current.scrollTop=props.scrollTop!;
      console.log(mainRef.current.scrollTop);
    },0)
  },[props.scrollTop])

  return (
    <Wrapper>
      <Main  ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}
Layout.defaultProps= {
  scrollTop:0
}
export default Layout