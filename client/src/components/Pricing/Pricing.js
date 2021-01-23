import React, { Component } from "react";
import "./pricing.css";
import priceCalculator from "../../services/priceCalculator"

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPrice: "Please select...",
      calculatedPrice: "...",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ calculatedPrice: priceCalculator(this.state.selectedPrice)})
  }

  render() {
    return (
      <div id="section-pricing" className="pricing-section">
        <h3>Price calculator...</h3>
        <div className="form-wrapper">
          <form id="price-calculator-form">
            <label>Number of pictures</label>
            <select
              id="num-of-pics"
              onChange={(e) => this.setState({ selectedPrice: e.target.value })}
            >
              <option>Please select...</option>
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
            <button
              id="price-calc-button"
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              Calculate
            </button>
          </form>
        </div>
        <h1 id="calculated-price" className="price">
          {parseFloat(this.state.calculatedPrice).toFixed(2) == "NaN"
            ? this.state.calculatedPrice
            : "£ " +
              parseFloat(this.state.calculatedPrice).toFixed(2).toString()}
        </h1>
        <p>
          <span>Book now</span> with the form below!
        </p>
      </div>
    );
  }
}

export default Pricing;
