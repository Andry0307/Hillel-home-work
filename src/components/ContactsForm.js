import React, {Component} from 'react';

export default class ContactsForm extends Component {

    onChangeInput = (e) => {
        this.props.onChange({
            [e.target.name]: e.target.value
        })
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.isEditContact ? this.props.editContact(this.props.newContact) : this.props.onSubmit(this.props.newContact);
    };

    render() {
        return (
            this.props.isFormView ?
            <form className='contacts-form' onSubmit={this.onFormSubmit}>
                 <input name='name' className='form-control form-control-lg' type='text' placeholder='name'
                       value={this.props.newContact.name}
                       onChange={this.onChangeInput}/>
                <input name='surname' className='form-control form-control-lg' type='text' placeholder='surname'
                       value={this.props.newContact.surname}
                       onChange={this.onChangeInput}/>
                <input name='phone' className='form-control form-control-lg' type='text' placeholder='phone'
                       value={this.props.newContact.phone}
                       onChange={this.onChangeInput}/>
                <input name='age' className='form-control form-control-lg' type='text' placeholder='age'
                       value={this.props.newContact.age}
                       onChange={this.onChangeInput}/>
                <button className='btn btn-success'>{this.props.isEditContact ? 'edit' : 'add'}</button>

            </form> : null
        );
    }
}