import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CompletedPage.css';

import { State } from '../../../types';

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

    // console.log로 output
    console.log(JSON.stringify(formatResult));
  }, [result.id, result.items]);

  return (
    <div className="grid-container">
      <div className="col1" />
      <div className="col2">
        <h1>수고하셨습니다.</h1>
        <span className="end-content">귀한 시간 내주셔서 감사합니다.</span>
        <footer className="end-footer">created by SeongJun Park</footer>
      </div>
    </div>
  );
};

export default CompletedPage;
