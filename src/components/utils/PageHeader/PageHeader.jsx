import React, { Component } from "react";

import "./pageHeader.scss";

class PageHeader extends Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="pageHeader">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    );
  }
}

export default PageHeader;
