import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/money.svg');
require('icons/label.svg');
require('icons/statistics.svg');


const NavWrapper = styled.nav`
    border: 1px solid red;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
   display: flex;
    >li{
    width: 33.3333%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 4px  0;
    justify-content: center;
    align-items: center;
    .icon{
        width: 24px;
        height: 24px;
    }
    
    }
 }`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg fill="red" className="icon">
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg fill="red" className="icon">
            <use xlinkHref="#label"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg fill="red" className="icon">
            <use xlinkHref="#statistics"/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>

    </NavWrapper>

  );
};

export default Nav;