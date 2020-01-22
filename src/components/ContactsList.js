import React, {Component} from 'react';

export default class ContactsList extends Component {

    render() {
        const {contacts} = this.props;
        return (
            <div>
                <ul>
                {contacts.map((contact) =>
                    <li className='App-list' key={contact.id}>
                        <p>name: {contact.name} {contact.surname}</p>
                        <p>age: {contact.age}</p>
                        <p>phone: {contact.phone}</p>
                    </li>
                )}
                </ul>
            </div>

        );
    }
}

