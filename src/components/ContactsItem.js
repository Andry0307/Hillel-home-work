import React, {Component} from 'react';

export default class ContactsItem extends Component {
    render() {
        const {name, surname, phone, age} = this.props.item;
        return (
                <li className='App-list'>
                    <p>name: {name} {surname}</p>
                    <p>age: {age}</p>
                    <p>phone: {phone}</p>
                </li>
        );
    }
}

