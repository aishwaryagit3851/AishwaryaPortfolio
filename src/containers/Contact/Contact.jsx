import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./Contact.css";
const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
function Contact() {
  const form = useRef();
  const [data, setData] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    validate(data)
      ? emailjs
          .sendForm(
            "service_3253mz8",
            "template_lds6qmg",
            form.current,
            "Q2AExKoKGEdtzFqlp"
          )
          .then(
            (result) => {
              setData(initialState);
              setSuccess(true);
              setError(false);
            },
            (error) => {
              setError(true);
            }
          )
      : setError(true);
  };
  const validate = (data) => {
    if (data.phone.length < 10 || data.phone.length > 15) {
      return false;
    }
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(data.email);
  };
  const handleInputChange = (item, value) => {
    setData((prev) => ({
      ...prev,
      [item]: value,
    }));
    console.log(data.item);
  };
  return (
    <div className="contact pt-5 flex flex-col align-center">
      <div className="text-center">
        <h3 className="text-xxl sm:text-2xl md:text-4xl font-bold heading">
          Contact Me
        </h3>
      </div>
      {success ? (
        <div className="text-center p-2 m-2">
          <p className="text-lg sm:text-xl font-semibold text-success">
            Thank you contacting me, have a nice day!.
          </p>
        </div>
      ) : null}
      {error ? (
        <div className="text-center p-2 m-2">
          <p className="text-lg sm:text-xl font-semibold text-danger">
            Something went wrong pls try again.
          </p>
        </div>
      ) : null}
      <div>
        <form ref={form} onSubmit={(e) => sendEmail(e)} className="form">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="from_name"
            placeholder="username"
            // autoComplete="off"
            value={data.name}
            onInput={(e) => handleInputChange("name", e.target.value)}
            required
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            // autoComplete="off"
            value={data.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
          <label className="form-label">Mobile Number</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            placeholder="9999999999"
            // autoComplete="off"
            value={data.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
          <label className="form-label">Message</label>
          <textarea
            name="message"
            cols="10"
            rows="3"
            className="form-control"
            value={data.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            required
          ></textarea>
          <input type="submit" className="submit btn" value="send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
