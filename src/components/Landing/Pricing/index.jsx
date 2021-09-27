import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./pricing.scss";
import priceCalculator from "../../../services/priceCalculator";
import config from "../../../config";
import FadeInSection from "../../utils/FadeInSection";

const Pricing = () => {
  const [calculatedPrice, setCalculatedPrice] = useState("...");
  const [selectedPrice, setSelectedPrice] = useState("...");

  return (
    <FadeInSection>
      <div id="pricing" className="section-pricing">
        <h2>Price Calculator</h2>
        <div className="pricing-content-wrapper">
          <p className="pricing-text">
            Our prices really are worth sharing! We truly believe we offer the
            most competitive prices for top tier property photography. Simply
            use the price calculator to get an instant quote for your property,
            before booking. Questions? Don't hesitate to get in touch via our
            contact form.
          </p>
          <div className="pricing-calculator">
            <h3>Total cost</h3>
            <h2 className="price">
              {calculatedPrice == "..." ? "..." : `£ ${calculatedPrice}`}
            </h2>
            <div className="custom-select">
              <select
                id="num-of-pics"
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
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
              <div className="custom-icon">
                <div className="icon-wrapper">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCalculatedPrice(priceCalculator(selectedPrice))}
            >
              Calculate
            </button>
            <i className="far fa-question-circle"></i>
            <HashLink to="/#faqs" className="pricing-faqs-link">
              See our FAQ's
            </HashLink>
          </div>
        </div>
        <p>
          Like what you see?{" "}
          <span>
            <a href={config["booking-url"]}>Book now</a>
          </span>
        </p>
      </div>
    </FadeInSection>
  );
};

export default Pricing;
