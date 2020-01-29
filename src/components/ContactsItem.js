import React, {Component} from 'react';

export default class ContactsItem extends Component {

    onDeleteBtnClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.item.id)
    };

    changeItemContact = () => {
        this.props.showForm();
        this.props.showContact(this.props.item);
    };

    render() {
        const {item} = this.props;
        return (
        <tbody>
            <tr onClick={this.changeItemContact}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
                <td>{item.age}</td>
                <td>
                    <button className='btn btn-danger' onClick={this.onDeleteBtnClick}>delete</button>
                </td>
                <td>
                    <button className='btn btn-primary' onClick={this.changeItemContact}>edit</button>
                </td>
            </tr>
        </tbody>

        );
    }
}

