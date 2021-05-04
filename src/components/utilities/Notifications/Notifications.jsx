import React from "react";
import PropTypes from "prop-types";

import "./notifications.css";

const Notification = ({ notifications }) => {
  return (
    <div className="notifications">
      {notifications.map(({ message, notificationType }, index) => (
        <div key={index} className={`notification ${notificationType}`}>
          <h4>{message}</h4>
        </div>
      ))}
    </div>
  );
};

Notification.propTypes = {
  notificationType: PropTypes.oneOf(["error", "warning", "success", "none"]),
  message: PropTypes.string.isRequired,
};

export default Notification;
