import React, { Component } from "react";
import queryString from "query-string";

class SuccessPage extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="stage-counter">
          Order complete!{" "}
          {queryString.parse(this.props.location.search).session_id}
        </p>
        <i class="far fa-check-circle"></i>
      </React.Fragment>
    );
  }
}

export default SuccessPage;
