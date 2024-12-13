import { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const validateForm = () => {
    const { name, email, password } = inputValues;

    if (name.length < 7) {
      alert("Name must be 7 letters.");
      return false;
    }

    if (!email) {
      alert("Email is required");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(inputValues);
    setInputValues({ name: "", email: "", password: "" }); // Reset all fields

    axios
      .post("http://localhost:4002/InputF", inputValues) // Replace with your API endpoint
      .then((result) => {
        console.log("Signup Success:", result);
        alert("Signup successful!");
      })
      .catch((err) => {
        console.log("Signup Error:", err);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Interview Registration Form</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            value={inputValues.name}
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            value={inputValues.email}
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-input"
            type="password"
            value={inputValues.password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
