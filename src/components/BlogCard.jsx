import React from "react";

import "../style/BlogCard.css";

export default function BlogCard(Props) {
  return (
    <a href={Props.BlogLink} target="_blank">
      <div className="blog-card-container">
        <img src={Props.BlogImg} alt="blog-image" className="blog-img" />
        <h3 className="blog-t">{Props.BlogTitle}</h3>
        <p className="blog-p">{Props.BlogPara}</p>
      </div>
    </a>
  );
}
