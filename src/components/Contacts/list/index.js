import React, { useState } from "react";
import styles from "./style.module.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className={styles.list}>
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.firstName}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
