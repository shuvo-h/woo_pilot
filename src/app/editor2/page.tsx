"use client";
import React, { useState } from 'react';

// Simulating dynamic import from @/practice/genOneV1
const componentsRaw = [
    {
        ComponentAndFileName: "Accordion",
        tag: "div",
        className: "accordion-section text-xl bg-yellow-300",
        type: "accordion",
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
                        className: "accordion-content ",
                        children: ["Content for the first accordion item."],
                        clsHidden: "hidden",
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
                        className: "accordion-content ",
                        children: ["Content for the second accordion item."],
                        clsHidden: "hidden",
                        clsBlock: "block",
                    },
                ],
            },
        ],
    },
    // You can add more components with different types
    {
        ComponentAndFileName: "SimpleDiv",
        tag: "div",
        className: "simple-div bg-blue-300 p-4",
        type: "simple",
        children: [
            {
                tag: "p",
                className: "simple-text",
                children: ["This is a simple component."],
            },
        ],
    },
];

// Accordion Renderer
const AccordionRenderer = ({ element }) => {
    const [activeIndex, setActiveIndex] = useState(-1); // State to keep track of which accordion item is open

    const handleClick = (index) => {
        console.log(index);

        setActiveIndex( index);
    };

    return (
        <div className={element.className}>
            {element.children.map((child, index) => (
                <div key={index} className="accordion-item">
                    {child.children.map((childElement, childIndex) => {
                        if (childElement.tag === "h3") {
                            return (
                                <h3
                                    key={childIndex}
                                    className={childElement.className}
                                    onClick={() => handleClick(index)}
                                >
                                    {childElement.children}
                                </h3>
                            );
                        } else {
                            return (
                                <div
                                    key={childIndex}
                                    className={`${childElement.className} ${
                                        activeIndex === index ? childElement.clsBlock : childElement.clsHidden
                                    } block`}
                                >
                                    {childElement.children}
                                </div>
                            );
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

// Simple Component Renderer
const SimpleRenderer = ({ element }) => {
    return (
        <div className={element.className}>
            {element.children.map((child, index) => (
                <div key={index} className={child.className}>
                    {child.children}
                </div>
            ))}
        </div>
    );
};

// Main Render Function
const renderComponent = (element) => {
    switch (element.type) {
        case "accordion":
            return <AccordionRenderer key={element.ComponentAndFileName} element={element} />;
        case "simple":
            return <SimpleRenderer key={element.ComponentAndFileName} element={element} />;
        // Add more cases for different types
        default:
            return null;
    }
};

const Editor = () => {
    return (
        <div>
            <h2 className='bg-pink-500'>My Editor</h2>
            <div>
                {componentsRaw.map((component, index) => (
                    renderComponent(component)
                ))}
            </div>
        </div>
    );
};

export default Editor;
