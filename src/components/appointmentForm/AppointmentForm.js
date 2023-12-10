import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import style from "./appointment.module.css";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <label htmlFor="name">Title: </label>
      <input id="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} required />
      <section>
        <div>
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" value={date} onChange={(e) => { setDate(e.target.value) }} min={getTodayString()} required />
        </div>
        <div>
        <label htmlFor="time">Time: </label>
        <input id="time" type="time" value={time} onChange={(e) => { setTime(e.target.value) }} min="09:00" max="18:00" required />
        </div>
      <ContactPicker contacts={contacts} onChange={(e) => { setContact(e.target.value) }} value={contact} name={name} />
      </section>
      <button type="submit">Add an appointment</button>
    </form>
  );
};
