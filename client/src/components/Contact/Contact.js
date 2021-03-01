import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-form-wrapper">
        <h2>Get in touch!</h2>
        <form id="contact-form">
          <input
            className="input-name"
            placeholder="Name..."
            type="text"
            name="name"
          />
          <input
            className="input-email"
            placeholder="Email..."
            type="text"
            name="email"
          />
          <textarea
            rows="4"
            placeholder="Hire an internn or ask us a question..."
            name="message"
          ></textarea>
          <button id="submit-button" type="button">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
