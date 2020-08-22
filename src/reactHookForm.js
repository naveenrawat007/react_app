import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import _ from "lodash/fp";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/checkOutFrom";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    firstName: "Naveen Rawat",
    email: "naveen@complitech.net",
    phone: 9634420545,
  });
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  function userChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const stripePromise = loadStripe("");

  // const setTheme = (color) => {
  //   if (color === "black") {
  //     document.documentElement.style.setProperty("--theme-color", color);
  //   } else if (color === "green") {
  //     document.documentElement.style.setProperty("--theme-color", color);
  //   } else if (color === "blue") {
  //     document.documentElement.style.setProperty("--theme-color", color);
  //   } else if (color === "red") {
  //     document.documentElement.style.setProperty("--theme-color", color);
  //   }
  // };

  const onSubmit = (data, e) => {
    alert(JSON.stringify(data));
    e.target.reset();
  };

  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          name="firstName"
          autoComplete="off"
          value={user.firstName}
          onChange={userChange}
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z ]+$/i,
          })}
        />
        {_.get("firstName.type", errors) === "required" && (
          <p>This field is required</p>
        )}
        {_.get("firstName.type", errors) === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {_.get("firstName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Email</label>
        <input
          name="email"
          autoComplete="off"
          onChange={userChange}
          value={user.email}
          ref={register({
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
          })}
        />
        {_.get("email.type", errors) === "pattern" && <p>Invalid Email</p>}
        <label>Phone</label>a
        <input
          name="phone"
          autoComplete="off"
          value={user.phone}
          onChange={userChange}
          ref={register({ minLength: 10, maxLength: 10 })}
        />
        {errors.phone && <p>Should be 10 digit</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
