import { useState } from "react";
import "./book-form.css";
import InputGroup from "./InputGroup";
const BookForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travellerNum: "",
  });

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // on change handler
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="book-form" id="book-form">
      <form onSubmit={formSubmitHandler}>
        <InputGroup
          label="Where To?"
          input={{
            type: "text",
            placeholder: "place name",
            name: "destination",
            value: formData.destination,
            onChange: changeHandler,
          }}
        />
        <InputGroup
          label="When?"
          input={{
            type: "date",
            name: "date",
            value: formData.date,
            onChange: changeHandler,
          }}
        />
        <InputGroup
          label="How Many?"
          input={{
            type: "number",
            placeholder: "number of traveler",
            min: "1",
            name: "travellerNum",
            value: formData.travellerNum,
            onChange: changeHandler,
          }}
        />
        <button type="submit" className="book-btn">
          Find Now
        </button>
      </form>
    </section>
  );
};

export default BookForm;
