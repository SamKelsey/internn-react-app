import React from "react";
import "./noBookings.css";

import PageHeader from "../utilities/PageHeader/PageHeader";

const NoBookings = () => {
  return (
    <div className="no-bookings">
      <PageHeader
        title="Opening soon!"
        subtitle="Follow us on social media @internnOfficial to stay up to date!"
      />
    </div>
  );
};

export default NoBookings;
