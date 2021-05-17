import React, { useEffect, useState } from "react";
import "./terms.css";
import ReactMarkdown from "react-markdown";

import PageHeader from "../utilities/PageHeader/PageHeader";

import markdownFile from "./terms-and-conditions.md";

const Terms = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get markdownFile text and set state value.
    fetch(markdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <React.Fragment>
      <PageHeader title="Terms and Conditions" />
      <div id="section-terms-and-conditions">
        <ReactMarkdown children={markdown} />
      </div>
    </React.Fragment>
  );
};

export default Terms;
