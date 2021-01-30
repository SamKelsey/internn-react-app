import React, { Component } from "react";
import _ from "lodash";
import "./book.css";
import { loadStripe } from "@stripe/stripe-js";
import priceCalculator from "../../services/priceCalculator";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStage: 0,
      formData: {
        numOfRooms: "Rooms...",
        name: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        postcode: "",
      },
      numOfRoomsOpen: false,
    };
  }
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  stripePromise = loadStripe(
    "pk_test_51IEKpEBIl6HQpdRxMsA9bZbp2ScbPOaMSq36IkcqomhGu2ZArFimCr9J5UNtOtuEievfeS1IWy24XHDF4Z8nIusd00xoBdokQN"
  );

  handleClick = async (event) => {
    event.preventDefault();
    // Get Stripe.js instance
    const stripe = await this.stripePromise;

    const data = {
      price: priceCalculator(this.state.formData.numOfRooms),
      numOfRooms: this.state.formData.numOfRooms,
      email: this.state.formData.email,
    };

    // Call your backend to create the Checkout Session
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error.message);
    }
  };

  // Define options for number of rooms.
  numOfRooms = _.range(4, 21);

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  }

  renderForm() {
    if (this.state.formStage == 0) {
      return (
        <React.Fragment>
          <div className="rooms-wrapper">
            <label>No. of rooms</label>
            <div className="rooms-help">
              <p>Here is some help for defining a room...</p>
              <i className="far fa-question-circle"></i>
            </div>
            <br />
            <div
              className="custom-select"
              onClick={() => {
                this.setState({ numOfRoomsOpen: !this.state.numOfRoomsOpen });
              }}
            >
              <i className="fas fa-bed"></i>
              <ul className="num-of-rooms">
                {this.state.formData.numOfRooms}
                {this.numOfRooms.map((num) => (
                  <li
                    key={num}
                    style={{
                      display: this.state.numOfRoomsOpen ? "block" : "none",
                    }}
                    onClick={(e) => {
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          numOfRooms: e.target.innerHTML,
                        },
                      });
                    }}
                  >
                    {num}
                  </li>
                ))}
              </ul>
              <i className="fas fa-arrow-down"></i>
            </div>
          </div>
          <h1 className="price">
            {priceCalculator(this.state.formData.numOfRooms) == "..."
              ? "..."
              : "£ " + priceCalculator(this.state.formData.numOfRooms)}
          </h1>
          <label>Pick a time slot</label>
          <br />
          <input min={this.getDate()} type="date" className="date" />
          <br />
          <input
            type="time"
            min="09:00"
            max="18:00"
            step="300"
            className="time"
          />
          <br />
          <div className="textarea-wrapper">
            <textarea placeholder="&#xf4ad; Extra info..." rows="6"></textarea>
            <div className="textarea-help rooms-help">
              <p>Here is some help for extra stuff to add in here...</p>
              <i className="far fa-question-circle"></i>
            </div>
          </div>
          <button
            onClick={() => this.setState({ formStage: 1 })}
            className="next-button"
          >
            Next
            <i className="fas fa-chevron-right fa-sm"></i>
          </button>
        </React.Fragment>
      );
    } else if (this.state.formStage == 1) {
      return (
        <div className="stage-2">
          <input
            type="text"
            className="name"
            placeholder="Name..."
            value={this.state.formData.name}
            onChange={(e) =>
              this.setState({
                formData: {
                  ...this.state.formData,
                  name: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="email"
            placeholder="Email..."
            value={this.state.formData.email}
            onChange={(e) =>
              this.setState({
                formData: {
                  ...this.state.formData,
                  email: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="address-1"
            placeholder="Address Line 1..."
            value={this.state.formData.address1}
            onChange={(e) =>
              this.setState({
                formData: {
                  ...this.state.formData,
                  address1: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="address-2"
            placeholder="Address Line 2..."
            value={this.state.formData.address2}
            onChange={(e) =>
              this.setState({
                formData: {
                  ...this.state.formData,
                  address2: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="city"
            placeholder="City/Town..."
            value={this.state.formData.city}
            onChange={(e) =>
              this.setState({
                formData: {
                  ...this.state.formData,
                  city: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="postcode"
            placeholder="Postcode..."
            value={this.state.formData.postcode}
            onChange={(e) =>
              this.setState({
                formData: {
                  ...this.state.formData,
                  postcode: e.target.value,
                },
              })
            }
          />
          <div className="buttons">
            <button onClick={() => this.setState({ formStage: 0 })}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={() => this.setState({ formStage: 2 })}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    } else if (this.state.formStage == 2) {
      return (
        <React.Fragment>
          <div className="confirmation-timeslot">
            <h1>
              24<sup>th</sup> December 2021
            </h1>
            <br />
            <h1>10:00 AM</h1>
            <p
              className="change-booking"
              onClick={() => this.setState({ formStage: 0 })}
            >
              Change Booking
            </p>
          </div>
          <div className="confirmation-personal-details">
            <div className="details">
              <h2>Name:</h2>
              <p>{this.state.formData.name}</p>
              <h2>Email:</h2>
              <p>{this.state.formData.email}</p>
              <h2>Address:</h2>
              <p>{this.state.formData.address1}</p>
              {this.state.formData.address2 != "" && (
                <p>{this.state.formData.address2}</p>
              )}
              <p>{this.state.formData.city}</p>
              <p>{this.state.formData.postcode}</p>
            </div>
            <p
              className="confirmation-change-info"
              onClick={() => this.setState({ formStage: 1 })}
            >
              Change Information
            </p>
          </div>
          <div className="confirmation-price">
            <div className="line">
              <p>{this.state.formData.numOfRooms} rooms</p>
              <p>
                £
                {(
                  priceCalculator(this.state.formData.numOfRooms) * 0.8
                ).toFixed(2)}
              </p>
            </div>
            <div className="line vat">
              <p>VAT</p>
              <p>
                £
                {(
                  priceCalculator(this.state.formData.numOfRooms) * 0.2
                ).toFixed(2)}
              </p>
            </div>
            <div className="line total">
              <p>Total</p>
              <p>£{priceCalculator(this.state.formData.numOfRooms)}</p>
            </div>
          </div>
          <button
            role="link"
            onClick={this.handleClick}
            className="next-button"
          >
            Pay
          </button>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="booking-wrapper">
          <p className="stage-counter">Step {this.state.formStage + 1} of 3</p>
          <form>{this.renderForm()}</form>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
