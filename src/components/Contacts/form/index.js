import React, { useState, useEffect } from "react";

const initialFormValues = {
  firstName: "",
  phoneNumber: "",
};

function Form({ contacts, addContact }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.firstName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>
      <button>Add Contact</button>
    </form>
  );
}

export default Form;
