import React, {Component} from 'react';
import './App.css';
import ContactsList from "./components/ContactsList";
import contacts from './contacts';

export default class App extends Component {
    render() {
        return (
            <div>
                <ContactsList contacts={contacts}/>
            </div>
        );
    }
}