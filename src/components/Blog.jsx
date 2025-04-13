import React from "react";
import BlogCard from "./BlogCard";

import "../style/blog.css";

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2 className="blog-s-t">
          Sharing is <span>Learning</span>
        </h2>
        <p className="blog-s-p">
          Sharing your knowledge is the best way to learn.
        </p>
      </div>
      <div className="blogs-container">
        <BlogCard
          BlogImg="https://lh3.googleusercontent.com/-4D2-MFwvDqo/Yh-PP0F7IGI/AAAAAAAAAFI/jC0cEPnD7P8SsengdXL2eG9hfociMCZEQCNcBGAsYHQ/s1600/1646235443564528-0.png"
          BlogLink="https://arincs.blogspot.com/2022/03/how-to-c-compiler-and-make-vs-code.html"
          BlogTitle="How to install C Compiler and make VS Code ready for Getting Started with C"
          BlogPara="Getting started with C - 01 This blog can be divided into two parts: Installing VS Code (IDE) Setting it up for an optimised experience Installing C Compiler Watch Full Installation Video"
        />
        <BlogCard
          BlogImg="https://i3.ytimg.com/vi/u3Ov-tAFHTk/hqdefault.jpg"
          BlogLink="https://arincs.blogspot.com/2022/03/stop-writing-this-code-again-again-make.html"
          BlogTitle="Stop writing this code again & again | Make boilerplate in VS Code for C"
          BlogPara="What is boilerplate? In VS Code there is one option called user snippet. In it, we can declare a code that that is being repeatedly used by us like basic structure of C program."
        />
        <BlogCard
          BlogImg="https://lh3.googleusercontent.com/-0eEZE--tpNY/YgXiPghlY_I/AAAAAAAAADg/93YjZQR1fFkKxBDVQBPQq4xwJaksBKmAgCNcBGAsYHQ/s1600/1644552759275356-0.png"
          BlogLink="https://arincs.blogspot.com/2022/02/data-structure-introduction.html"
          BlogTitle="Data Structure: Basic Introduction"
          BlogPara="What is Data Structure? The Logical and Mathematical Collection of Interrelated Data in an organised way . Why do we need data structure?"
        />
      </div>
    </section>
  );
}
