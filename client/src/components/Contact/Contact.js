import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-form-wrapper">
        <h2>Get in touch!</h2>
        <i className="fas fa-use icon"></i>
        <form id="contact-form">
          <div className="form-input">
            <label className="label-email">
              <i className="fas fa-user fa-fw"></i>
            </label>
            <br />
            <input
              className="input-name"
              placeholder="name..."
              type="text"
              name="name"
            />
          </div>
          <div className="form-input">
            <label className="label-email">
              <i className="fas fa-envelope fa-fw"></i>
            </label>
            <br />
            <input
              className="input-email"
              placeholder="email..."
              type="text"
              name="email"
            />
          </div>
          <div className="message-input">
            <label>
              <i className="far fa-comment-dots fa-fw"></i>
            </label>
            <textarea
              rows="4"
              placeholder="Hire an internn or ask us a question..."
              name="message"
            ></textarea>
          </div>
          <button id="submit-button" type="button">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
