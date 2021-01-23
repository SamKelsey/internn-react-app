import React, { Component } from "react";
import _ from "lodash";
import "./book.css";
import priceCalculator from "../../services/priceCalculator";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStage: 0,
      formData: {},
      selectedNumOfRooms: "Rooms...",
      numOfRoomsOpen: false,
    };
  }

  // Define options for number of rooms.
  numOfRooms = _.range(4, 21);

  renderForm() {
    if (this.state.formStage == 0) {
      return (
        <form>
          <div className="rooms-wrapper">
            <label>No. of rooms</label>
            <br />
            <div
              className="custom-select"
              onClick={() => {
                this.setState({ numOfRoomsOpen: !this.state.numOfRoomsOpen });
              }}
            >
              <i class="fas fa-bed"></i>
              <ul className="num-of-rooms">
                {this.state.selectedNumOfRooms}
                {this.numOfRooms.map((num) => (
                  <li
                    style={{
                      display: this.state.numOfRoomsOpen ? "block" : "none",
                    }}
                    onClick={(e) => {
                      this.setState({ selectedNumOfRooms: e.target.innerHTML });
                    }}
                  >
                    {num}
                  </li>
                ))}
              </ul>
              <i class="fas fa-arrow-down"></i>
            </div>
          </div>
          <h1 className="price">
            {priceCalculator(this.state.selectedNumOfRooms) == "..."
              ? "..."
              : "£ " + priceCalculator(this.state.selectedNumOfRooms)}
          </h1>
          <label>Pick a time slot</label>
          <br />
          <input type="date" className="date" />
          <br />
          <input
            type="time"
            min="09:00"
            max="18:00"
            step="3600"
            className="time"
          />
          <br />
          <textarea placeholder="&#xf4ad; Extra info..." rows="6"></textarea>
          <button
            onClick={() => this.setState({ formStage: 1 })}
            className="next-button"
          >
            Next
            <i class="fas fa-chevron-right fa-sm"></i>
          </button>
        </form>
      );
    } else if (this.state.formStage == 1) {
      return "Stage 1";
    } else if (this.state.formStage == 2) {
      return "Stage 2";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="booking-wrapper">
          <p>Step {this.state.formStage + 1} of 3</p>
          {this.renderForm()}
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
