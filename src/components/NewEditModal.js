import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input} from 'reactstrap';

const NewEditModal = (props) => {
    return (
      <div>
        <Modal isOpen={props.data.modalEditNew} toggle={props.toggle} >
          <ModalHeader toggle={props.data.toggle}>{props.data.book!=null? 'Edit': 'Add'}</ModalHeader>
          <ModalBody>
          <Form>
                <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input type="text" name="title" value={props.data.book!=null?props.data.book.title: ''}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Author</Label>
                    <Input type="text" name="title" value={props.data.book!=null?props.data.book.author:''}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Year</Label>
                    <Input type="text" name="title" value={props.data.book!=null?props.data.book.year:''}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Description</Label>
                    <Input type="text" name="description" value={props.data.book!=null?props.data.book.description:''}/>
                </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.toggle}>{props.data.book!=null?'Save':'Add'}</Button>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
 }

export default NewEditModal;