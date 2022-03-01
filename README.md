# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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





----

## The login page

The login page lets the user log in and use the rest of the
app. Broken out into individual features:

- [ ] The user provides a username and password and submits it to log
in. If the provided password is correct (the only valid password is
"password"), the server will respond with a user token that must be
included in all other server calls as described under 
[server routes](#server-routes)

- [ ] The app remembers the user's token when the page is refreshed.

## The dashboard page

The dashboard page consists of a table of calculations and a form to
start a new one. Broken out into individual features:

- A table of calculations provided by the server - some running, some completed,
some cancelled, some errored. The UI sorts the list by `started_at`, such
that calculations started most recently sort to the top. 

To render the table, please do not use an off-the-shelf table
component that provides common bells and whistles like sorting by
column and pagination. Although that might make sense on the job
depending on the use case, for this exercise we would prefer to see
the list rendered using vanilla react code. Third-party components for
individual cell values are fine though.

- Above the list of running calculations, a form letting the user
start a new calculation. The details of the inputs are described 
under [Server Routes](#server-routes). The UI should not let the user
submit invalid values, and should use the most appropriate UI
component for each input.

- The table updates with data from the server once per second.

Don't worry about pagination. The server "forgets" finished calculations
after a period of time to reclaim memory, and this also keeps the
list you need to display to a manageable size.

- The list visually distinguishes the current user's calculations
  from those of other users.

- The user can cancel any running calculation in the list that they started.

- The user can toggle between viewing all users' calculations
and just the ones they started themselves.

- The user can hide any rows in the list they don't want to
monitor by marking the row "Hidden". It should disappear from the list.

- A toggle component above the list, "Show hidden rows",
lets the user decide whether rows they've marked as hidden should
be rendered in the list or not. The UI should remember which rows are marked
hidden, such that once the user has marked some rows as hidden, toggling
"Show hidden rows" will alternately show them and hide them from the list. 

- Instead of displaying a calculation's `fraction_complete` as
verbatim text or a percentage, render it as a visual progress
bar. 

- A row flashes when its calculation completes, i.e. when the latest server data 
shows the calculation is completed, and the data from the previous poll did not.