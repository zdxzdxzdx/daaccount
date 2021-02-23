import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
      background: #FFFFFF;
      flex-grow: 1;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      > ol {
         margin: 0 -12px;
         li{
         background: #D9D9D9;
         border-radius: 18px;
         display: inline-block;
         padding: 3px 18px;
         font-size: 14px;
         margin: 8px 12px;
         }
      }
      > button{
        background: none;
        border: none;
        padding: 2px 4px;
        border-bottom: 1px solid #333;
        color: #666;
        margin-top: 8px;
      }

`;
const NotesSection = styled.section`
   background: #f5f5f5;
   padding: 0 16px;
   font-size: 14px;
    > label{
        display: flex;
        align-items: center;
      > span {
          margin-right: 16px;
          white-space: nowrap;
      }
      > input {
          display: block;
          width: 100%;
          height: 72px;
          background: none;
          border: none;
      }
    }
`;
const CategorySection = styled.section`
    font-size: 24px;
    > ul{
        display: flex;
        background: #c4c4c4;
        
        > li {
          width: 50%;
          text-align: center;
          padding: 16px 0;
          position: relative;
          //background: #F0DE38;
          background: aliceblue;
           &.selected::after{
              content: '';
              display: block;
              height: 3px;
              background: #333;
              position: absolute;
              bottom: 0;
              width: 100%;
              left: 0;
              
           }
          
        }
    }

`;
const NumberSection = styled.section`
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

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagSection>

      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请在这里输入备注"/>
        </label>

      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberSection>
        <div className="output">
        100
        </div>
        <div className="pad clearfix">
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
      </NumberSection>
    </MyLayout>

  );
}
export default Money;