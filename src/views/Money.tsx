import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberSection} from './Money/NumberSection';
import {TagSection} from './Money/TagSection';


const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  return (
    <MyLayout>
      <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
      <NoteSection value={selected.note} onChange={(note) => onChange({note})}/>
      <CategorySection value={selected.category} onChange={(category) => onChange({category})}/>
      <NumberSection value={selected.amount} onChange={(amount) => onChange({amount})}
                     onOk={() => {}}/>
    </MyLayout>

  );
}

export default Money;