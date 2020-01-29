import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactsList from "./components/ContactsList";
import contacts from './contacts';

export default class App extends Component {

    clearForm = {
        name: '',
        surname: '',
        phone: '',
        age: ''
    };
    state = {
        contacts: contacts,
        newContact: this.clearForm,
        isFormView: false,
        isEditContact: false
    };

    deleteContact = (id) => {
        const newContact = this.state.contacts.filter((item)=>{
            return item.id !== id
        });
        this.setState({
            contacts: newContact
        })
    };

    onEditContact = (contact) => {
        const newContact = this.state.contacts.map((item)=>{
            if(item.id === contact.id){
                return {
                    id: contact.id,
                    name: contact.name,
                    surname: contact.surname,
                    phone: contact.phone,
                    age: contact.age
                }
            }else{
                return item
            }

        });
        this.setState({
            contacts: newContact,
            newContact: this.clearForm,
            isFormView: false,
            isEditContact: false
        })
    };

    onFormChange = (changes) => {
        this.setState({
            newContact: {
                ...this.state.newContact,
                ...changes
            }
        })
    };

    onFormSubmit = (newContact) => {
        this.setState({
            contacts: [...this.state.contacts,
                {id: Date.now(),
                ...newContact}
                ],
            newContact: this.clearForm,
            isFormView: false,
            isEditContact: false
        })
    };

    onShowItemContact = (contact) => {
        this.setState({
            newContact: {
                id: contact.id,
                name: contact.name,
                surname: contact.surname,
                phone: contact.phone,
                age: contact.age
            },
            isEditContact: true
        })
    };

    onShowAddForm = () => {
        this.setState({
            newContact: this.clearForm,
            isFormView: true,
            isEditContact: false
        })
    };

    render() {
        return (
            <div className='main-component'>
                <ContactsList contacts={this.state.contacts}
                              onDelete={this.deleteContact}
                              newContact={this.state.newContact}
                              onChange={this.onFormChange}
                              onSubmit={this.onFormSubmit}
                              editContact={this.onEditContact}
                              showContact={this.onShowItemContact}
                              showForm={this.onShowAddForm}
                              isFormView={this.state.isFormView}
                              isEditContact={this.state.isEditContact}
                />
            </div>
        );
    }
}