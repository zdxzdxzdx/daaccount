import styled from 'styled-components';
import React from 'react';


const Label =styled.label`
        display: flex;
        align-items: center;
      > span {
          margin-right: 16px;
          white-space: nowrap;
      }
      > input {
          display: block;
          width: 100%;
          height: 44px;
          background: none;
          border: none;
      }
`
  type Props ={
     label:string;
}  & React.InputHTMLAttributes<HTMLInputElement>;
      const Input: React.FC<Props> = (props => {
        const {label,children,...rest} = props;
          // input上面的属性的值就从...rest上拷 ，rest上有placeholder input 是外部的传进来的
        return(
          <Label>
            <span>{props.label}</span>
            <input {...rest}/>
          </Label>
        )
      })
export {Input}
