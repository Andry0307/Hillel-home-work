import PropTypes from 'prop-types';

const contactItem = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
});

const contactItems = PropTypes.arrayOf(contactItem);

export default {
    ...PropTypes,
    contactItem,
    contactItems
}