import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';


const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
  const [category,setCategory]= useState<'-'|'+'>('-')
   const  {records} = useRecords();
  const {getName}= useTags()
  return <Layout>

    <CategorySection value={category} onChange={value => setCategory(value)}/>
    <div>
      {records.map(r => {
          return <Item>
            <div className="tags">
            {r.tagIds.map(t => <span> {getName(t)}</span>)}
            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">
            ￥{r.amount}
            </div>
            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>
        }
      )
      }
    </div>

  </Layout>;
}

export default Statistics;