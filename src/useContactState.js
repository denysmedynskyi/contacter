import { useState } from 'react';
import database from "./database";
import { useToasts } from "react-toast-notifications";


export default (initialState) => {
  const [contacts, setContacts] = useState(initialState);
  const { addToast } = useToasts();

  database.listContacts().then((contacts) => {
    setContacts(contacts);
  })

  return {
    contacts,
    addContact: contactData => {
      addToast("Saved Successfully", { appearance: "success" });
      let newContact = Object.assign(contactData, {uid: contactData.name});
      setContacts([...contacts, newContact]);

      database.addContact(newContact);
    },
    deleteContact: uid => {
      const contactsAfterRemoval = contacts.filter(
        contact => contact.uid !== uid
      );

      setContacts(contactsAfterRemoval);

      database.deleteContact(uid);
    }
  };
};
