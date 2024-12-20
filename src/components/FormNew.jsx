import axios from "axios";
import { useState } from "react";

const FormNew = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(inputValues);

    setInputValues({ name: "", email: "", password: "" });

    axios
      .post("http://localhost:4006/testing", inputValues)
      .then((result) => {
        console.log("signup successfull", result);
        alert("Signup Successfull");
      })
      .catch((err) => {
        console.log("error in signup", err);
        alert("Erorr in Signup");
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={inputValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={inputValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default FormNew;
