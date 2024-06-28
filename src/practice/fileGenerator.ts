import path from 'path';
import fs from 'fs';

const generateElement = ({ tag, className, content, children = [], href }) => {
  let element = `<${tag}`;
  if (className) element += ` className="${className}"`;
  if (href) element += ` href="${href}"`;
  element += '>';

  if (content) {
    element += content;
  } else {
    children.forEach(child => {
      element += generateElement(child);
    });
  }

  element += `</${tag}>`;
  return element;
};

const createComponentString = (component) => {
  const jsxContent = component.components.map(generateElement).join('\n');
  return `
import React from 'react';

const ${component.name} = () => {
  return (
    <>
      ${jsxContent}
    </>
  );
};

export default ${component.name};
  `;
};
const createPageString = (page) => {
  const jsxContent = page.components.map(component => {
    const { type, props } = component;
    return `<${type} {...${JSON.stringify(props)}} />`;
  }).join('\n');

  const imports = page.components.map(component => {
    return `import ${component.type} from '../components/${component.type}';`;
  }).join('\n');

  return `
import React from 'react';
${imports}

const ${page.name.charAt(0).toUpperCase() + page.name.slice(1)} = () => {
  return (
    <>
      ${jsxContent}
    </>
  );
};

export default ${page.name.charAt(0).toUpperCase() + page.name.slice(1)};
  `;
};






export const writeComponentFiles = async (components) => {
  const baseDir = path.join(process.cwd(), 'src', 'app'); // Adjust to match the app structure

  for (const component of components) {
    if (component.type === 'page') {
      const pageDir = path.join(baseDir, component.path); // Directory for the page
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
        console.log(`Directory ${pageDir} created.`);
      }

      const pageFilePath = path.join(pageDir, 'page.jsx'); // Use Next.js 14's file naming convention
      const pageString = createPageString(component);
      fs.writeFileSync(pageFilePath, pageString, "utf-8");
      console.log(`Page ${component.name} created at ${pageFilePath}`);
    } else if (component.type === 'component') {
      const componentDir = path.join(baseDir, 'components');
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
        console.log(`Directory ${componentDir} created.`);
      }

      const componentFilePath = path.join(componentDir, `${component.name}.jsx`);
      const componentString = createComponentString(component);
      fs.writeFileSync(componentFilePath, componentString, "utf-8");
      console.log(`Component ${component.name} created at ${componentFilePath}`);
    }
  }
};
