import {useState} from 'react';

const useTags = ()=>{
  const [tags, setTags] = useState<string[]>(['衣涉及到很多女的你那绝后的那就按款项明细降低额爱德华健身卡很明显知识竞赛', '食', '住', '行']);
  return {tags,setTags}

}
export {useTags}