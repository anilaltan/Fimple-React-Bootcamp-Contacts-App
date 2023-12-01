import React, { useState, useEffect } from "react";

import styles from "./style.module.css";

import Form from "./form";
import List from "./list";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      firstName: "anil",
      phoneNumber: "12312312",
    },
    {
      firstName: "batu",
      phoneNumber: "32323232",
    },
    {
      firstName: "nazli",
      phoneNumber: "4234234",
    },
  ]);

  return (
    <div className={styles.container}>
      <h1>Contacts List</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
