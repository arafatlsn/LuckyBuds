import React from 'react';
import './QnA.css'

const QnA = () => {
  return (
    <div className='qna-parent'>
      <div className='qna-div'>
          <h3>Q. How React Works?</h3>
          <p><mark>Ans.</mark></p>
          <p>React is one of the most popular library of JavaScript. React mainly component based front end library. React application is made of multiple components. React create a virtual dom which do compare with dom tree. where is change by user react change only that element and set on dom tree.</p>

          <h3>Q. How useState works?</h3>
          <p><mark>Ans.</mark></p>
          <p>useState which is React hook. useState has a initial value and a function. the initial value can be updated by using state function. useState works almost closure concepts of vanilla js.</p>

          <h3>Q. Props vs State defference?</h3>
          <p><mark>Ans:</mark></p>
          <h6><mark>Props:</mark></h6>
          <p>props only get data from parent. can not pass data to parent.</p>
          <p>props data read only, can't change data.</p>
          <p>prpos can be defaulted and validated</p>
          <h6><mark>State:</mark></h6>
          <p>Created with component.</p>
          <p>State can be change.</p>
          <p>State can not make component reusable</p>
          <p>State is mutable</p>
      </div>
    </div>
  );
};

export default QnA;