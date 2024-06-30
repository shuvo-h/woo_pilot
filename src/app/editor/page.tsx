"use client"
import React, { useState } from 'react';

// Simulating dynamic import from @/practice/genOneV1
const componentsRaw = [
    {
        ComponentAndFileName: "Accordion",
        tag: "div",
        className: "accordion-section text-xl bg-yellow-300",
        type:"accordian",
        children: [
            {
                tag: "div",
                className: "accordion-item",
                children: [
                    {
                        tag: "h3",
                        className: "accordion-title cursor-pointer",
                        children: ["Accordion Item 1"],
                    },
                    {
                        tag: "div",
                        className: "accordion-content hidden",
                        children: ["Content for the first accordion item."],
                    },
                ],
            },
            {
                tag: "div",
                className: "accordion-item",
                children: [
                    {
                        tag: "h3",
                        className: "accordion-title cursor-pointer",
                        children: ["Accordion Item 2"],
                    },
                    {
                        tag: "div",
                        className: "accordion-content hidden",
                        children: ["Content for the second accordion item."],
                    },
                ],
            },
        ],
    },

];

const renderElement = (element) => {
  const { tag, className, children } = element;

  // Check if the tag is a valid HTML element
  const Tag = tag || 'div'; // Default to 'div' if no tag is specified

  return (
    <Tag className={className} key={element.key}>
      {children && children.map((child, index) => (
        typeof child === 'string'
          ? child // Render string directly
          : renderElement({ ...child, key: index }) // Recursively render child elements
      ))}
    </Tag>
  );
};

const Editor = () => {
  const allList = componentsRaw.map(el => renderElement(el));
  return (
    <div>
      <h2 className='bg-pink-500'>My Editor</h2>
      <div>
        {allList}
      </div>

    </div>
  );
};

export default Editor;
