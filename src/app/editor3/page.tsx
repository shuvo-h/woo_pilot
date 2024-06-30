"use client";
import React, { useState } from "react";

// Simulating dynamic import from @/practice/genOneV1
const componentsRaw = [
  {
    ComponentAndFileName: "Accordion",
    tag: "div",
    className: "accordion-section text-xl bg-yellow-300",
    type: "accordian",
    children: [
      {
        tag: "div",
        type: "accordian_items",
        className: "accordion-item",
        children: [
          {
            tag: "h3",
            type: "accordian_title",
            className: "accordion-title cursor-pointer",
            children: ["Accordion Item 1"],
            isOpen: false,
          },
          {
            tag: "div",
            type: "accordian_content",
            className: "accordion-content",
            children: ["Content for the first accordion item."],
          },
        ],
      },
      {
        tag: "div",
        type: "accordian_item",
        className: "accordion-item",
        children: [
          {
            tag: "h3",
            type: "accordian_title",
            className: "accordion-title cursor-pointer",
            children: ["Accordion Item 2"],
            isOpen: true,
          },
          {
            tag: "div",
            type: "accordian_content",
            className: "accordion-content",
            children: ["Content for the second accordion item."],
          },
        ],
      },
      {
        tag: "div",
        type: "accordian_item",
        className: "accordion-item",
        children: [
          {
            tag: "h3",
            type: "accordian_title",
            className: "accordion-title cursor-pointer",
            children: ["Accordion Item 3"],
            isOpen: false,
          },
          {
            tag: "div",
            type: "accordian_content",
            className: "accordion-content",
            children: ["Content for the second accordion item. 33"],
          },
        ],
      },
    ],
  },
];



const renderAccordianElement = (element) => {
  const { tag, className, children,  } = element;


  const Tag = tag || "div";
    // console.log({openNumber});

  return (
    <Tag className={className} key={element.key}>
      {children &&
        children.map((child, index) =>{
            const [openNumber, setOpenNumber] = useState(0);
            switch (child?.type) {
                case 'accordian_title':
                    return (
                        <Tag className={child?.className} onClick={()=>{
                            console.log("Click = ",index);
                            setOpenNumber(index);
                        }} key={index}>
                            {child?.children &&
                            child?.children.map((childNest, indexNest) =>
                            typeof childNest === "string"
                                ? childNest
                                : renderElement({ ...childNest, key: indexNest, index:indexNest })
                            )}
                        </Tag>
                    );
                case 'accordian_content':
                    return (
                        <Tag className={`${child?.className} ${openNumber === index ? "block":"hidden"}`} key={index}>
                            {child?.children &&
                            child?.children.map((childNest, indexNest) =>
                            typeof childNest === "string"
                                ? childNest
                                : renderElement({ ...childNest, key: indexNest, index:indexNest })
                            )}
                        </Tag>
                    );


                default:
                    return typeof child === "string"
                    ? child
                    : renderElement({ ...child, key: index });
            }
            // check type: accordian_items
            // check type: accordian_title
            // check type: accordian_content


        }

        )}
    </Tag>
  );
};

const renderElement = (element) => {
  const { tag, type, className, children } = element;

  const Tag = tag || "div";

  if (type === "accordian_items") {
    return renderAccordianElement(element);
  }

  return (
    <Tag className={className} key={element.key}>
      {children &&
        children.map((child, index) =>
          typeof child === "string"
            ? child // Render string directly
            : renderElement({ ...child, key: index })
        )}
    </Tag>
  );
};

const Editor = () => {
    
  const allList = componentsRaw.map((el) => renderElement(el));
  return (
    <div>
      <h2 className="bg-pink-500">My Editor</h2>
      <div>{allList}</div>
    </div>
  );
};

export default Editor;
