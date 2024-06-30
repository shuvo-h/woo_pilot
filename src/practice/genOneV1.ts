
import fs from 'fs';
import path from 'path';

async function createReactComponentFiles(components) {
    // Define the output directory
    // const outputDir = path.join(process.cwd(), 'src', 'components');
    const outputDir = path.join(process.cwd(), 'src', 'convert_files', 'components');


    try {
        // Ensure the output directory exists
        await fs.promises.mkdir(outputDir, { recursive: true });

        // Iterate over each component in the array
        for (const component of components) {
            const { ComponentAndFileName, tag, className, children } = component;

            // Generate TSX content for the component
            const componentContent = generateComponentTSX(ComponentAndFileName, tag, className, children);

            // Write the content to a TSX file
            const filePath = path.join(outputDir, `${ComponentAndFileName}.tsx`);
            await fs.promises.writeFile(filePath, componentContent);
            console.log(`${ComponentAndFileName}.tsx has been created successfully at ${filePath}`);
        }

        // Once all components are created, generate the page.tsx file
        await createPageFile(components, outputDir);

    } catch (error) {
        console.error(`Error creating component files: ${error.message}`);
        return `Error: ${error.message}`;
    }
}

function generateComponentTSX(ComponentAndFileName, tag, className, children) {
    // Recursive function to generate JSX for nested children and text nodes
    function generateJSX(children) {
        return children.map(child => {
            if (typeof child === 'string') {
                // Directly return text nodes
                return child;
            } else {
                // Deconstruct the child element
                const { tag: childTag, className: childClassName, children: nestedChildren } = child;
                return `
                    <${childTag} className="${childClassName}">
                        ${nestedChildren.length ? generateJSX(nestedChildren) : ''}
                    </${childTag}>
                `.trim(); // Trim to clean up whitespace
            }
        }).join('\n');
    }

    // Generate the component's full content with imports
    return `
import React from 'react';

const ${ComponentAndFileName}: React.FC = () => (
    <${tag} className="${className}">
        ${generateJSX(children)}
    </${tag}>
);

export default ${ComponentAndFileName};
    `.trim();
}


// create the page
async function createPageFile(components, componentsDir) {
    // Define the path for the page.tsx file outside the components folder
    const pageFilePath = path.join(process.cwd(), 'src', 'convert_files', 'page.tsx');

    // Generate import statements for all components inside the components folder
    const imports = components.map(component => {
        return `import ${component.ComponentAndFileName} from './components/${component.ComponentAndFileName}';`;
    }).join('\n');

    // Generate JSX rendering for all components
    const renderComponents = components.map(component => {
        return `<${component.ComponentAndFileName} />`;
    }).join('\n        '); // Indentation for readability

    // Generate the content for the page.tsx file
    const pageContent = `
import React from 'react';

${imports}

const Page: React.FC = () => (
    <div>
        ${renderComponents}
    </div>
);

export default Page;
    `.trim();

    try {
        // Write the content to the page.tsx file
        await fs.promises.writeFile(pageFilePath, pageContent);
        console.log(`page.tsx has been created successfully at ${pageFilePath}`);
    } catch (error) {
        console.error(`Error creating page.tsx file: ${error.message}`);
        return `Error: ${error.message}`;
    }
}


// Example usage
export const components = [
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
                                children: ["Home"],
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
                                children: ["About"],
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
                                children: ["Contact"],
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
        className: "bg-gray-800 text-white my-4 py-12 px-4",
        children: [
            {
                tag: "h1",
                className: "text-4xl font-bold bg-pink-700",
                children: ["Welcome to Our Website"],
            },
            {
                tag: "p",
                className: "text-lg",
                children: ["Discover our features and services tailored for you."],
            },
        ],
    },
    {
        ComponentAndFileName: "Footer",
        tag: "footer",
        className: "bg-pink-900 text-white p-4",
        children: [
            {
                tag: "div",
                className: "flex justify-center space-x-4",
                children: [
                    {
                        tag: "a",
                        className: "text-white hover:text-gray-300",
                        children: ["Facebook"],
                    },
                    {
                        tag: "a",
                        className: "text-white hover:text-gray-300",
                        children: ["Twitter"],
                    },
                    {
                        tag: "a",
                        className: "text-white hover:text-gray-300",
                        children: ["Instagram"],
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


export const ABCOM = () =>{
    createReactComponentFiles(components);

}
