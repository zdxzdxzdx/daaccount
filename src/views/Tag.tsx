import React from 'react';
import {useTags} from 'useTags';
import {
  useParams
} from "react-router-dom";
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
type Params ={
  id: string
}
const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background: white;
`

const InputWrpper = styled.div`
    background: white;
    padding: 0 16px;
    margin-top: 8px;
`



  const Tag: React.FC =()=>{
      const {findTag,updateTag,deleteTag}=useTags()
    // 将id重命名为idString
  let { id: idString } = useParams<Params>();
  const tag =findTag(parseInt(idString));

  const tagContent= ( tag:{id:number;name: string})=>(
    <div>
      <InputWrpper>
        {/*{改tag.name ,但tag.name是从 findTag里读取的,用updateTag改 }*/}
        <Input label="标签名" type="text" value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value})
               }}/>
      </InputWrpper>
    <Center>
      <Space/>
      <Space/>
      <Space/>
      <Button onClick={() => {
        deleteTag(tag.id)
      }}>删除标签</Button>
    </Center>
    </div>
  )

  return(
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag?tagContent(tag):<Center>tag不存在</Center>}
  </Layout>)
}
export {Tag}