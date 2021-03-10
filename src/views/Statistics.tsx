import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {RecordItem, useRecords} from '../hooks/useRecords';
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const CategoryWrapper = styled.div`
  background:white;
`;
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecord = records.filter(r => r.category === category);

  selectedRecord.forEach(s => {
    const key = day(s.createdAt).format('YYYY年MM月DD日');
    const value = s;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(value);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a === b) return 0;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  const  beautify=(string: string)=>{
    const day1= string
    const now = day().format('YYYY年MM月DD日');
    if (day1 === now){
      return '今天'
    }
    return string;
  }

  if(array.length<=0){
    return<Layout>
      <CategoryWrapper>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <p>目前没有相关记录</p>
    </Layout>}

  return <Layout>
    <CategoryWrapper>
    <CategorySection value={category} onChange={value => setCategory(value)}/>
    </CategoryWrapper>
    <div >
      {array.map(([date, records]) =>
        <div>
          {/*<Header>{date}</Header>*/}
          <Header>{beautify(date)}</Header>

          {records.map(r => {
              return <Item >
                <div className="tags oneLine" >
                  {r.tagIds
                    .map(t => <span key={t}> {getName(t)}</span>)
                    .reduce((result, span, index, array) =>
                      result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note" >{r.note}</div>}
                <div className="amount" >
                  ￥{r.amount}
                </div>


              </Item>;
            }
          )
          }

        </div>)
      }

    </div>
  </Layout>;


}

export default Statistics;