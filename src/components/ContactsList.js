import React, {Component} from 'react';
import propTypes from './propTypes.js';
import ContactsItem from "./ContactsItem";
import ContactsForm from "./ContactsForm";

export default class ContactsList extends Component {

    render() {
        const {contacts, onDelete, newContact, onChange,
            onSubmit, showContact, showForm, isFormView,
            editContact, isEditContact} = this.props;
        return (
            <>
            <div className='table-wd'>
            <table className='table table-bordered '>
                <thead>
                <tr>
                    <th>name</th>
                    <th>surname</th>
                    <th>phone</th>
                    <th>age</th>
                    <th>delete</th>
                    <th>change</th>
                </tr>
                </thead>
                {contacts.map((itemContact) =>
                    <ContactsItem key={itemContact.id} item={itemContact}
                                  onDelete={onDelete} showContact={showContact}
                                  showForm={showForm}
                    />
                )}
            </table>
                <button className='btn btn-success' onClick={showForm}>Add contact</button>
            </div>
            <ContactsForm newContact={newContact} onChange={onChange}
                          onSubmit={onSubmit} isFormView={isFormView}
                          editContact={editContact}
                          isEditContact={isEditContact}
            />
            </>
        );
    }
}

ContactsList.propTypes = {
    contacts: propTypes.contactItems.isRequired
};

