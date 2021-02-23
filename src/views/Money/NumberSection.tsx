import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    >.output{
      background: white;
      font-size: 36px;
      line-height: 72px;
      text-align: right;
      padding: 0 16px;
      box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                  inset 0 5px 5px -5px rgba(0,0,0,0.25);
    }
    >.pad{
    >button{
        font-size: 18px;
        float: left;
        width: 25%;
        height: 64px;
        border: none;
        background: #F2F2F2;
    &.OK{
         height: 128px;
         float: right; 
    }
    &.zero{
        width: 50%;
    }
    }
    
    }
  
`;

const NumberSection: React.FC=()=>{
  const [output,setOutput]= useState('0')

 const onClickButtonWrapper=(e: React.MouseEvent)=>{
   const text = (e.target as HTMLButtonElement).textContent
   if (text === null){return}
   switch (text) {
     case '0':
     case '1':
     case '2':
     case '3':
     case '4':
     case '5':
     case '6':
     case '7':
     case '8':
     case '9':
     case '.':
       if (output === '0'){
         setOutput(text)}
       else {
         setOutput(output+text);
       }
       break
     case '删除':
     case '清空':
     case 'OK':
       console.log(text);

   }
 }


  return <Wrapper>
    <div className="output">
      {output}
    </div>
    <div className="pad clearfix" onClick={onClickButtonWrapper}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="OK">OK</button>
      <button className="zero">0</button>
      <button className="dot">.</button>
    </div>
  </Wrapper>
}
export {NumberSection}