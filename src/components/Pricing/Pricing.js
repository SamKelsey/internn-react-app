import React, { Component } from "react";
import "./pricing.css";
import priceCalculator from "../../services/priceCalculator";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatedPrice: "...",
    };
  }

  handleChange(e) {
    this.setState({
      calculatedPrice: priceCalculator(e.target.value),
    });
  }

  render() {
    return (
      <div id="section-pricing" className="section-pricing">
        <h2>Price Calculator</h2>
        <h3>Receive an instant quote</h3>
        <p>
          How many rooms do you need photographed?{" "}
          <div className="rooms-help">
            <p>
              A "room" is defined as any area (eg. kitchen, bedroom, garden,
              garage, etc...) in your property that requires 2 or less
              photographs.
            </p>
            <i className="far fa-question-circle"></i>
          </div>
        </p>
        <select id="num-of-pics" onChange={(e) => this.handleChange(e)}>
          <option>Rooms...</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </select>
        <h2 className="price">
          {this.state.calculatedPrice == "..."
            ? "..."
            : "£ " + this.state.calculatedPrice}
        </h2>
        <p>
          Like what you see?{" "}
          <span>
            <a href="https://squareup.com/appointments/book/lh5bwjbbh62mfi/L9SG5QR4MCQA8/services">
              Book now
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default Pricing;
