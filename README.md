# namaste-react 

# igniting the app

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Reload
- File watching Algorithm - written in c++
- Caching - faster build'
- Image Optimization
- Minification
- Bundling
- Compress the files
- Consistent hashing
- Code Splitting
- Differential Bundling - support other browsers
- Diagonstic 
- Error Handling - shows proper error messages with nice view
- Hosts app in Https
- Tree Shaking - removes unused code for u
- Different dev and production build
- 


/**
 *
 * - Header
 *      - Logo
 *      - navbar
 * - Body
 *      - RestroContainer
 *          - RestroCards
 *              - img
 *              - Name of Res, Star Rating, cuisines, delivery time.
 * - Footer
 *      - copyright
 *
 */



 #React Hooks
 - utiliy functions provided by js.
 - useState() - powerful 
 - , useEffect()

 # 3 tyypes of testing
 - Unit testing
    - test react application in isolation. We use reat testing library to test our application.
 - Integration testing 
    - integration of multiple components. We will develop a flow 
 - E2E testing
    - similating what the user does from end to end

# setting up our testing in our app
- Install Testing Library
- Installed jest
- Installed Babel dependency
- Configured babel
- Configure Parcel config file to disable babel transpilation 
- install jest dom library - npm install --save-dev jest-environment-jsdom
- install @babel/preset-react inside the project. 
- Our app is not configured to test JSX code.
- In order to do that we need to add preset-react to our babel configuration so that the transpilation is done smoothly from jsx to html
- In order for assersion to work as expected, we need to add @testing-library/jest-dom
- npm i -D @testing-library/jest-dom 