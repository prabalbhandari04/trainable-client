
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AssesmentModal} from '../components/Assesment/AssesmentModal';
import {AssesmentCard} from '../components/Assesment/AssesmentCard';
function Assessment() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="content">
        <p>Assessment</p>
          <AssesmentModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <AssesmentCard />
      </div>
    </>
  );
}

export default Assessment;
