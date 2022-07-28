
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {QuestionForm} from '../components/Assesment/QuestionForm';

function Question() {
  return (
    <>
      <div className="content">
        <p>Question</p>
          <QuestionForm />
      </div>
    </>
  );
}

export default Question;
