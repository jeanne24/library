import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ViewModal = (props) => {
    // console.log(props);
    return (
      <div>
        <Modal isOpen={props.data.modalView} toggle={props.toggle} >
          <ModalHeader toggle={props.data.toggle}>{props.data.book.title}</ModalHeader>
          <ModalBody>
              <h3>{props.data.book.author}</h3>
           {props.data.book.description}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
 }

export default ViewModal;