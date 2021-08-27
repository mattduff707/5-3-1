## Process I followed

- Sketched a rough design
- Identified logic to implement: controlled inputs with conditions, dynamic results and scalability
- Broke it down into manageable tasks

---

## Key Features

- Conditional inputs [Code Snippet](https://github.com/mattduff707/5-3-1/blob/e6919950dc84ec5630ae6886bfb13955bb5fa119/src/App.js#L11-L64)
- Dynamic Results [Code Snippet](https://github.com/mattduff707/5-3-1/blob/e6919950dc84ec5630ae6886bfb13955bb5fa119/src/components/LiftTable.js#L6-L60)

---

## Why I built it this way

- I decided to use an HTML table for this app since it makes the most sense semantically.
- Even though styling was not particularly important in this project, I decided to include styled components. It adds to the scalability if I come back to add more features in the future that require the magic of SC.
- As a small app, useState seemed sufficient for the tasks of this project. Libraries like redux would just add unnecessary bloat.
- This app also served as practice of functional programming principles. I attempted to keep functions pure, utilized built in methods for looping and avoided mutation.

---

## Potential Changes

- I am currently learning about testing in React as I know it is pivotal in professional production. So I will likely return to add a solid test suite.
- I would like to add the option to select from the multiple percentage schemes present in the 5/3/1 program
- Refactor App component. Bloated with functions.

---

## What is the 5/3/1?

The 5/3/1 is a strength training program. It works in 4 week blocks. Each week you will lift heavier weight. You must know your 1 rep max for each lift of the program: squat, deadlift, bench press and strict press. Take 90% of that number for each lift, this new value is your training max. You then break the training max down by various percentage schemes to dictate the weight of each lift.  
Check out the book [here](https://www.jimwendler.com/collections/books-programs/products/5-3-1-second-edition-hard-copy)!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
