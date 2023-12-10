import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicates, setDuplicates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicates) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    setDuplicates(contacts.some(contact => contact.name === name));
    console.log('====================================');
    console.log(duplicates);
    console.log('====================================');
  },[contacts, name, duplicates]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} duplicates={duplicates} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrObjects={contacts} />
      </section>
    </div>
  );
};
