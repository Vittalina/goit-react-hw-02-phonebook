import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
// import { Title } from 'components/Contacts/Contacts.styled';

const id = nanoid();

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={id}>
        <span>
          {contact.name}: {contact.number}
        </span>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
