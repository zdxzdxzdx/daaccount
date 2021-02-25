import {useEffect, useState} from 'react';

type RecordItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createdAt: string;
}

type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = () => {
  const [records, setRecord] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecord(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: newRecordItem) => {
  if (newRecord.amount<=0){
    alert("请输入金额")
    return false;
  }
  if (newRecord.tagIds.length===0){
    alert("请选择标签")
    return false;
  }
  //每次创建new加上createAt
    const record= {...newRecord,createdAt:(new Date()).toISOString()};
    console.log(record);
    setRecord([...records, record]);
  };
  return {records, addRecord};
};
export {useRecords};