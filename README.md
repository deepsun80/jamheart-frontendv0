# JamHeart Frontend

### Getting Started
* created using create-react-app 
* clone repo
* npm start to run react app - app will run on localhost:3000 in browser
* localhost:3000 - Home Login page
* localhost:3000/app - App page

### File Locations
* icons & logos in public/logos folder
* index.html in public folder
* js components in src folder
* main components - index.js -> App.js & Login.js - in src folder
* sub-components in src/components folder
* social media sub-components in src/components/social media folder
* redux actions and reducers in respective folders in src
* CSS styles in src/styles folder

### Component Functionalities
* redux store initialized in index.js
* Index.js ras two react-router-dom routes, Login.js and App.js
* Login.js path for signup/signin screen, data passed from Redux store via axios calls (in src/actions)
* App.js is the main application component
* user information passed into App.js via Redux store (axois call in src/action)
* all sub-components are routed to App.js as conditional cases:
  * "linkValue" in the redux store controls navigation of the components
  * SideBar.js input methods change "linkValue"
