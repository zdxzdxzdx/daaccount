import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberSection} from './Money/NumberSection';
import {TagSection} from './Money/TagSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord}=useRecords()

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = ()=>{
    if (addRecord(selected) ){
      console.log("成功未打印")
      alert('保存成功')
    setSelected(defaultFormData);}

  }

  return (
    <MyLayout scrollTop={9999}>
      <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
      <NoteSection value={selected.note} onChange={(note) => onChange({note})}/>
      <CategorySection value={selected.category} onChange={(category) => onChange({category})}/>
      <NumberSection value={selected.amount} onChange={(amount) => onChange({amount})}
                     onOk={submit}/>
    </MyLayout>

  );
}

export default Money;