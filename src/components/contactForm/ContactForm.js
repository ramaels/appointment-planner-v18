import React from "react";
import styles from "./contact.module.css";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  duplicates,
  handleSubmit
}) => {
  return (
    <form className={styles.container} onSubmit={handleSubmit}> 
      <label htmlFor="name">Name: </label>
      <input id="name" className={duplicates? styles.duplicates:''} type="text" placeholder="Your name..." value={name} onChange={(e)=>{setName(e.target.value)}} />
      <label htmlFor="phone">Phone: </label>
      <input id="phone" type="tel" placeholder="Your phone..." value={phone} onChange={(e)=>{setPhone(e.target.value)}}
        pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
        title="A UK phone number (e.g., +44 7700 900123 or 07700 900123)"
       />
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" placeholder="Your email..." value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <button type="submit">Add a contact</button>
    </form>
  );
};

