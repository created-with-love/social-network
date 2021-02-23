import React from 'react';
import s from './Contacts.module.css';

const Contacts = ({ contacts, editMode }) => {
  const contactsArr = Object.entries(contacts);

  return (
    <ul className={s.contacts}>
      {contactsArr.map((contact, ind) =>
        contact[1] ? (
          <li key={ind} className={s.contactItem}>
            {contact[0]}: {contact[1]}
          </li>
        ) : (
          ''
        ),
      )}
    </ul>
  );
};

export default Contacts;
