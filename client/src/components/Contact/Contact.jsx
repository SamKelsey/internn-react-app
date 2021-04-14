import React, { Component } from "react";
import "./contact.css";

import validateEmail from "../utilities/validateEmail";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      errors: [],
      notifications: [],
    };
  }

  handleSubmit() {
    this.setState({
      notifications: [],
      errors: [],
    });

    // Check for any errors
    if (!this.validateFormData()) {
      return;
    }

    try {
      this.sendEmail();

      // Clear form and display notification.
      this.setState({
        name: "",
        email: "",
        message: "",
        notifications: [
          ...this.state.notifications,
          "We have received your message.",
        ],
      });
    } catch (err) {
      this.setState({ errors: [...this.state.errors, err.message] });
    }
  }

  validateFormData() {
    const { name, email, message } = this.state;
    let newErrors = [];

    if (name == "") {
      console.log("name not present.");
      newErrors = [...newErrors, "Please provide a name."];
    }

    if (email == "") {
      console.log("email not present");
      newErrors = [...newErrors, "Please provide an email."];
    } else if (!validateEmail(email)) {
      newErrors = [...newErrors, "Invalid email address provided."];
    }

    if (message == "") {
      console.log("message not present.");
      newErrors = [...newErrors, "Please provide a message."];
    }

    this.setState({
      errors: newErrors,
    });

    if (newErrors.length) {
      return false;
    }

    return true;
  }

  renderErrors() {
    const { errors } = this.state;
    return errors.map((err) => (
      <p key={err} className="err">
        {err}
      </p>
    ));
  }

  renderNotifications() {
    const { notifications } = this.state;
    return notifications.map((notification) => (
      <p key={notification} className="notification">
        {notification}
      </p>
    ));
  }

  async sendEmail() {
    console.log("sending email");
    const { name, email, message } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        reply_to: email,
        message,
      }),
    };

    const response = await fetch("/api/contact-us", requestOptions);
    const data = response.json();

    console.log(data);
  }

  render() {
    return (
      <div className="contact-form-wrapper">
        <h2>Get in touch!</h2>
        <form id="contact-form">
          <input
            className="input-name"
            placeholder="Name..."
            value={this.state.name}
            type="text"
            name="name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <input
            className="input-email"
            placeholder="Email..."
            value={this.state.email}
            type="text"
            name="email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <textarea
            rows="4"
            placeholder="Hire an internn or ask us a question..."
            name="message"
            value={this.state.message}
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
          ></textarea>
          {this.state.errors != "" && this.renderErrors()}
          {this.state.notifications != "" && this.renderNotifications()}
          <button
            id="submit-button"
            type="button"
            onClick={() => this.handleSubmit()}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
