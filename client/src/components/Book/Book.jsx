import React, { Component } from "react";
import _ from "lodash";
import "./book.css";
import priceCalculator from "../../services/priceCalculator";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStage: 0,
      formData: {
        numOfRooms: "Rooms...",
      },
      numOfRoomsOpen: false,
    };
  }

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
        <form>
          <div className="rooms-wrapper">
            <label>No. of rooms</label>
            <div className="rooms-help">
              <p>Here is some help for defining a room...</p>
              <i class="far fa-question-circle"></i>
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
                        formData: { numOfRooms: e.target.innerHTML },
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
              <i class="far fa-question-circle"></i>
            </div>
          </div>
          <button
            onClick={() => this.setState({ formStage: 1 })}
            className="next-button"
          >
            Next
            <i className="fas fa-chevron-right fa-sm"></i>
          </button>
        </form>
      );
    } else if (this.state.formStage == 1) {
      return <React.Fragment>Stage 2</React.Fragment>;
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
