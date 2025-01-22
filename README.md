# Tailwind CSS Custom Color Not Applying Bug

This repository demonstrates a common bug encountered when working with custom colors in Tailwind CSS. The problem involves defining a custom color in your configuration, but it fails to apply correctly in your HTML. This often happens due to simple errors such as typos or issues with the `content` option in your Tailwind configuration file.

## Setup

1. Make sure you have Node.js and npm (or yarn) installed.
2. Clone this repository: `git clone <repository_url>`
3. Navigate to the project directory: `cd tailwind-custom-color-bug`
4. Install dependencies: `npm install` (or `yarn install`)
5. Start the development server:  `npm run dev` (or follow the instructions in your project's package.json)

## Bug Reproduction

Observe that the custom color `bg-custom-blue` defined in `tailwind.config.js` doesn't apply the expected blue color to the div in the `index.html` file. The color should be #007bff but will likely not be applied properly.

## Solution

The solution involves verifying the following:

- Correct color name and definition in `tailwind.config.js`
- Correct paths specified in the `content` option of `tailwind.config.js`, making sure it includes the files where you are using the custom color.
- Restarting the development server after changes to `tailwind.config.js`.
- Ensure that your HTML element correctly references the Tailwind CSS class.  Common mistakes include typos in the class name or incorrect use of the `class` attribute.