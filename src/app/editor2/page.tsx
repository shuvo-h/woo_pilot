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
                        isFn: true,
                    },
                    {
                        tag: "div",
                        className: "accordion-content hidden",
                        children: ["Content for the first accordion item."],
                        clsHiden: "hidden",
                        clsBlock: "block",
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
                        isFn: true,
                    },
                    {
                        tag: "div",
                        className: "accordion-content hidden",
                        children: ["Content for the second accordion item."],
                        clsHiden: "hidden",
                        clsBlock: "block",
                    },
                ],
            },
        ],
    },
];

const renderElement = (element, openIndex, setOpenIndex, parentIndex = '') => {
  const { tag, className, children, clsHiden, clsBlock, isFn } = element;
  const Tag = tag || 'div'; // Default to 'div' if no tag is specified

  // Generate a unique key for each element
  const currentKey = `${parentIndex}-${element.key || 0}`;

  // Handle click event for headers
  const handleClick = () => {
    if (isFn) {
      setOpenIndex(openIndex === currentKey ? null : currentKey);
    }
  };

  return (
    <Tag
      className={className}
      key={currentKey}
      onClick={isFn ? handleClick : undefined} // Only attach click handler if it's a clickable element
      style={clsHiden ? { display: openIndex === currentKey ? clsBlock : clsHiden } : {}}
    >
      {children && children.map((child, index) => (
        typeof child === 'string'
          ? child // Render string directly
          : renderElement({ ...child, key: index }, openIndex, setOpenIndex, currentKey) // Recursively render child elements
      ))}
    </Tag>
  );
};

const Editor = () => {
  const [openIndex, setOpenIndex] = useState(null); // Use null to represent no open item initially

  const allList = componentsRaw.map((el, index) => renderElement({ ...el, key: index }, openIndex, setOpenIndex));

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
