
// this is a goog structure
const components = [
  {
    ComponentAndFileName: "NavBar",
    tag: "nav",
    className: "bg-gray-800 p-4",
    children: [
      {
        tag: "ul",
        className: "flex space-x-4",
        children: [
          {
            tag: "li",
            className: "text-white",
            children: [
              {
                tag: "a",
                className: "hover:text-gray-300",
                children: [],
              },
            ],
          },
          {
            tag: "li",
            className: "text-white",
            children: [
              {
                tag: "a",
                className: "hover:text-gray-300",
                children: [],
              },
            ],
          },
          {
            tag: "li",
            className: "text-white",
            children: [
              {
                tag: "a",
                className: "hover:text-gray-300",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    ComponentAndFileName: "HeroSection",
    tag: "section",
    className: "bg-blue-500 text-white py-12 px-4",
    children: [
      {
        tag: "h1",
        className: "text-4xl font-bold",
        children: [],
      },
      {
        tag: "p",
        className: "text-lg",
        children: [],
      },
    ],
  },
  {
    ComponentAndFileName: "Footer",
    tag: "footer",
    className: "bg-gray-900 text-white p-4",
    children: [
      {
        tag: "div",
        className: "flex justify-center space-x-4",
        children: [
          {
            tag: "a",
            className: "text-white hover:text-gray-300",
            children: [],
          },
          {
            tag: "a",
            className: "text-white hover:text-gray-300",
            children: [],
          },
          {
            tag: "a",
            className: "text-white hover:text-gray-300",
            children: [],
          },
        ],
      },
    ],
  },
  {
    ComponentAndFileName: "Accordion",
    tag: "div",
    className: "accordion-section",
    children: [
      {
        tag: "div",
        className: "accordion-item",
        children: [
          {
            tag: "h3",
            className: "accordion-title cursor-pointer",
            children: [],
          },
          {
            tag: "div",
            className: "accordion-content hidden",
            children: [],
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
            children: [],
          },
          {
            tag: "div",
            className: "accordion-content hidden",
            children: [],
          },
        ],
      },
    ],
  },
];
