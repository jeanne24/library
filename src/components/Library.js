import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Book from './Book';
import ViewModal from './ViewModal';
import NewEditModal from './NewEditModal';
import { Button } from 'reactstrap';

class Library extends Component{
    constructor(){
        super();
        this.state={
            modalView:false,
            modalEditNew:false,
            backdrop:true,
            book:{},
            books:[
                {
                    id:1,
                    title:"Harry potter",
                    description:"Ex veniam cillum et fugiat duis aliqua ipsum velit laboris deserunt laborum qui dolor. Exercitation anim incididunt tempor id dolore fugiat ex ad. Dolore id sit magna do.",
                    year:"1993",
                    author:"J.K Rowling"
                },
                {
                    id:2,
                    title:"The Lovely Bones",
                    description:"Ex veniam cillum et fugiat duis aliqua ipsum velit laboris deserunt laborum qui dolor. Exercitation anim incididunt tempor id dolore fugiat ex ad. Dolore id sit magna do.",
                    year:"2006",
                    author:"Someone",
                },
            ],
        }
    }
    
    toggle(book) {
        this.setState({
            modalView: !this.state.modalView
        });
        this.setState({book:book});
    }

    toggleEditBook(book){
        this.setState({
            modalEditNew: !this.state.modalEditNew
        });
        this.setState({book:book});
    }

    toggleNewBook(){
        this.setState({
            modalEditNew: !this.state.modalEditNew
        });
    }

    handleNewBook(book){

    }

    handleUpdateBook(bookId){
    }

    render(){
        return(
            <div className="bookContainer text-center">
                <h2>Book Borrowing App</h2>
                <Button outline color="secondary" className="mb-4" onClick={this.toggleNewBook}>Add New Book</Button>
                <Table>
                    <tbody>
                        <Book data={this.state} toggle={this.toggle.bind(this)} toggleEdit = {this.toggleEditBook.bind(this)}/>
                        <ViewModal data={this.state} toggle={this.toggle.bind(this)}/>
                        <NewEditModal data={this.state} 
                            toggle={this.toggleEditBook.bind(this)} 
                            addnew={this.handleNewBook.bind(this)} 
                            updatebook={this.handleUpdateBook.bind(this)}/>
                        {/* <NewEditModal/> */}
                     </tbody>
                 </Table>
             </div>
        );
    }
}

export default Library;