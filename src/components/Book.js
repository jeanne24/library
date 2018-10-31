import React from 'react';
import {} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// data on this component is from Library.js 
const Book = (props) =>{
    console.log('from book->',props);

    return props.data.books.map((book)=>
        <tr key={book.id}>
            <td>
               <strong>{book.title}</strong> by 
               <em> {book.author}</em> 
            </td>
            <td>
             </td>
             <td>
                <Button outline color="primary" onClick={(e)=>props.toggle(book)}>View</Button>{' '}
                <Button outline color="secondary" onClick={(e)=>props.toggleEdit(book)}>Edit</Button>{' '}
                <Button outline color="danger">Delete</Button>{' '}
            </td>
         </tr>
       
     );
     
}

export default Book;