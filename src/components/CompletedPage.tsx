import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../types';
import ProgressBar from './ProgressBar';

const CompletedPage: React.FC<{}> = () => {
  const { result } = useSelector((state: State) => state);

  useEffect(() => {
    const formatResult: {
      id: number;
      items: { id: number; answer: string }[];
    } = { id: result.id, items: [] };
    result.items.forEach(item => {
      formatResult.items.push({
        ...item,
        answer: item.answer.join(','),
      });
    });

    console.log(formatResult);
  }, [result.id, result.items]);

  return (
    <div className="grid-container">
      <div className="col1" />
      <div className="col2">
        <h1>수고하셨습니다.</h1>
        <span style={{ fontSize: '30px', fontWeight: 300 }}>
          귀한 시간 내주셔서 감사합니다.
        </span>
      </div>
    </div>
  );
};

export default CompletedPage;
