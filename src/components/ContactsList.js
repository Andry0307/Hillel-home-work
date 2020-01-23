import React, {Component} from 'react';
import ContactsItem from "./ContactsItem";

export default class ContactsList extends Component {

    render() {
        const {contacts} = this.props;
        return (
                <ul>
                {contacts.map((itemContacts) =>
                    <ContactsItem key={itemContacts.id} item={itemContacts}/>
                )}
                </ul>

        );
    }
}

