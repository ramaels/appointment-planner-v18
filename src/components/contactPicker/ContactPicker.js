import React from "react";

export const ContactPicker = ({contacts, onChange, name, value}) => {
  return (
    <div>
      <label htmlFor="contact">Contact: </label>
      <select id="contact" onChange={onChange} value={value} name={name}>
        <option value={""}>No Contact Selected</option>
        {contacts.map(contact=><option key={contact.name} value={contact.name}>{contact.name}</option>)}
      </select>
    </div>
  );
};
