import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberSection} from './Money/NumberSection';
import {TagSection} from './Money/TagSection';


const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberSection/>
    </MyLayout>

  );
}
export default Money;