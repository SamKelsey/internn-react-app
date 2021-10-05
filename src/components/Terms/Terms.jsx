import React, { useEffect, useState } from "react";
import "./terms.scss";
import ReactMarkdown from "react-markdown";
import TopTile from "../utils/TopTile";
import { scrollToTop } from "../../services/utils";

import markdownFile from "./terms-and-conditions.md";

const Terms = () => {
  scrollToTop();

  useEffect(() => {
    // Get markdownFile text and set state value.
    fetch(markdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error(err));
  }, []);

  const [markdown, setMarkdown] = useState("");

  return (
    <React.Fragment>
      <TopTile image={"IMG_1496-2-md.jpg"} title="Terms and Conditions" />
      <div id="section-terms-and-conditions">
        <ReactMarkdown children={markdown} />
      </div>
    </React.Fragment>
  );
};

export default Terms;
