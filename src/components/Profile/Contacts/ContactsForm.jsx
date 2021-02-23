import React from 'react';
import s from './Contacts.module.css';

const initState = {
  github: '',
  vk: '',
  facebook: '',
  instagram: '',
  twitter: '',
  website: '',
  youtube: '',
  mainLink: '',
};

const init = initState => ({
  ...initState,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'github':
      return {
        ...state,
        github: action.payload,
      };
    case 'vk':
      return {
        ...state,
        vk: action.payload,
      };
    case 'facebook':
      return {
        ...state,
        facebook: action.payload,
      };
    case 'instagram':
      return {
        ...state,
        instagram: action.payload,
      };
    case 'twitter':
      return { ...state, twitter: action.payload };
    case 'website':
      return { ...state, website: action.payload };
    case 'youtube':
      return { ...state, youtube: action.payload };
    case 'mainLink':
      return { ...state, mainLink: action.payload };
    default:
      throw new Error();
  }
};

const ContactsForm = ({ contacts, saveContactsForm }) => {
  const contactsArr = Object.entries(contacts);
  const [state, dispatch] = React.useReducer(
    reducer,
    (contacts = initState),
    init,
  );

  const [isFormSaved, setIsFormSaved] = React.useState(false);
  const changeFormStatus = e => {
    e.preventDefault();
    setIsFormSaved(state => !state);
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log(state);
    saveContactsForm(state);
    setIsFormSaved(true);
  };

  return (
    <form className={s.contacts}>
      {contactsArr.map((contact, ind) => (
        <li key={ind} className={s.contactFormItem}>
          {contact[0]}:{' '}
          <input
            type="text"
            onChange={e =>
              dispatch({ type: contact[0], payload: e.target.value })
            }
            value={state[contact[0]]}
            readOnly={isFormSaved}
          />
        </li>
      ))}

      {!isFormSaved ? (
        <button type="submit" onClick={onSubmit}>
          Save Contacts
        </button>
      ) : (
        <button type="button" onClick={changeFormStatus}>
          Change contacts
        </button>
      )}
    </form>
  );
};

export default ContactsForm;
