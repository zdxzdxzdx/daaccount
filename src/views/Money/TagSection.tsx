import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';


const Wrapper = styled.section`
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
          &.selected{
          background: #F0DE38;
          }
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

type Props = {
  value: string[],
  onChange: (selected: string[]) => void
}

const TagSection: React.FC<(Props)> = (props) => {
   const {tags, setTags} = useTags();

  const selectedTag = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }

  };
  const getClass = (tag: string) => selectedTag.indexOf(tag) >= 0 ? 'selected' : '';
  const onToggleTag = (tag: string) => {
    const index = selectedTag.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTag.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTag, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag} onClick={
          () => {
            onToggleTag(tag);
          }} className={getClass(tag)}>{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagSection};