# Instructions for Running the Program
To run the credit card validation program, follow these instructions:

### Prerequisites
* Make sure you have Node.js installed on your system. You can download it from nodejs.org.

### Steps for Execution
1. **Clone the Repository:**

* Open the terminal or command prompt.
* Execute the following command to clone the repository:
~~~bash
git clone <REPOSITORY URL>
~~~
Replace <REPOSITORY URL> with the project repository's URL or simply copy the source code to a directory of your choice.

2. **Install Dependencies:**

* Navigate to the cloned project directory:
~~~bash
cd project-directory
~~~
* Execute the following command to install Node.js dependencies:
~~~bash
npm install
~~~
3. **Run the Server:**

* After installing the dependencies, run the Node.js server with the following command:
~~~bash
node app.js
~~~
This will start the server on port 3000.

4. **Access the Application:**

* Open a web browser and go to the following address:

http://localhost:3000

You will be directed to the credit card validation page.

# Code Explanation

The code is divided into several parts, including HTML, CSS, and JavaScript on the client-side, as well as Node.js on the server-side. Let's examine each part in detail:

## Frontend

Let's start with the Frontend.

###  script.js

The JavaScript in the script.js file is responsible for making the page interactive and handling the credit card validation process. Here's an overview of the main functions:

1. **document.addEventListener('DOMContentLoaded', () => { ... })**: This is a DOM event that waits for the page to fully load before executing the code inside it. This ensures that JavaScript only runs when the DOM is ready.

2. **const form = document.getElementById('creditCardForm');**: This line gets the HTML element with the ID creditCardForm, which is the credit card validation form.

3. **const successIcon = document.getElementById('successIcon');** and **const failureIcon = document.getElementById('failureIcon');**: These lines get the HTML elements with IDs successIcon and failureIcon, which are the validation icons (success and failure).

4. **successIcon.style.display = 'none';** and **failureIcon.style.display = 'none';**: These lines initially set the display property of the icons to "none," making them invisible on the page.

5. **form.addEventListener('submit', async (e) => { ... })**: This adds an event listener to the form to capture the form submission event.

6. **e.preventDefault();**: This prevents the form from being submitted in the traditional way, which would cause the page to reload.

7. **const cardNumber = document.getElementById('cardNumber').value;, const expiryDate = document.getElementById('expiryDate').value;** and **const cvv = document.getElementById('cvv').value;**: These lines get the values entered by the user in the form input fields for card number, expiry date, and CVV.

8. **const response = await fetch('/validate', { ... })**: This sends a POST request to the /validate route on the server. The card details are sent as a JSON object in the request body.

9. **const result = await response.json();**: This converts the JSON response from the server into a JavaScript object.

10. The final parts of the code determine whether the card is valid based on the server's response and display the appropriate validation icon (success or failure) on the page.

The script.js file is responsible for adding interactivity to the web page of the credit card validation app. It controls the behavior of the form, listens to events like form submission, collects user-entered data, and sends that data to the backend server for validation. Additionally, script.js handles the dynamic display of validation icons based on the server's response, providing an interactive and informative user experience. In summary, script.js allows the user to input card details, validate them, and view the validation result on the web page.

### index.html
It provides the structure and content needed to create the user interface of the credit card validation app, including forms, text elements, and validation icons. JavaScript and CSS (referenced in the <script> and <link> elements) are used to add interactivity and style to the page.

### style.css

The CSS file (style.css) is responsible for applying styles and layout to the web page of the credit card validation app. Here are details about the main features and sections of the file:

1. **Global Styles**: The CSS file defines global styles that affect the entire page, such as the choice of font (font-family) and background color (background-color) of the page body. It also sets some properties to enhance display on mobile devices, like justify-content and align-items to center content both vertically and horizontally.

2. **Styles for the "container" Div**: The .container class is used to wrap all the content on the page. CSS applies specific styles to this div, such as text-align: center; to center text in the middle of the page and margin-top to create top spacing.

3. **Styles for the "card" Div**: The .card class is used to style the div that contains the credit card validation form. CSS defines properties like background-color, border-radius, box-shadow, and max-width to create a card with a pleasant appearance and subtle shadow.

4. **Styles for the h1 Title**: CSS defines styles for the main page title (h1) within the .card class. This includes text color (color) and margin-bottom.

5. **Styles for Input Fields and Labels (<label> and <input>)**: Input fields (card number, expiry date, and CVV) and their labels are styled to have a width of 100%, padding, margins, and a subtle border. The .icon class is used to style the validation icons with text-align and margin-top.

6. **Styles for the "Validate" Button**: The "Validate" button receives background and text colors, border zero, padding, border-radius, and an interactive cursor to provide an attractive and clickable button.

7. **Styles for Validation Icons**: CSS defines specific styles for the success and failure icons. They are centered both vertically and horizontally using display: flex and justify-content: center. The failure icon also gets a red circle color (fill: red) and a white border (stroke: white) to make it more visible.

These are the main features and sections of the CSS file (style.css). It plays a crucial role in the appearance and layout of the web page of the credit card validation app, making it attractive and responsive while providing a pleasant user experience.

## Backend

### app.js

The backend server is created with Node.js and Express.js and plays a crucial role in validating credit card details. Here's an overview of the main functions:

1. **const app = express();** and **const port = 3000;**: Here, Express.js is initialized, and the port number (3000) is set for the server.

2. **app.use(bodyParser.json());**: This allows the server to parse requests with JSON bodies.

3. **app.use(express.static(path.join(__dirname, 'public')));**: This serves static files (HTML, CSS, JavaScript) from the public folder so that the browser can access them.

4. **app.get('/', (req, res) => { ... });**: This defines a GET route for the root of the app, which serves the main HTML file from the public folder.

5. **app.post('/validate', (req, res) => { ... });**: This defines a POST route for /validate that handles the validation of credit cards based on the details received in the request body. The specific validation details are not included in this code, but this is the function responsible for handling the validation.

6. **app.listen(port, () => { ... });**: This starts the server on the specified port (3000) and displays a message in the console when the server is running.

In summary, the JavaScript code on the client-side (script.js) handles the interactivity of the web page, while the JavaScript code on the server-side (app.js) uses Express.js to create a Node.js server that handles HTTP requests, including credit card validation. The functions on the client-side are triggered by user events, such as form submission, while the functions on the server-side are triggered by the routes defined in Express.js.

### Summary

The credit card validation app is built using HTML, CSS, JavaScript, Node.js, and Express.js. Its logic can be divided into two main parts: frontend and backend.

In the frontend (JavaScript - script.js), the code handles user interaction and communication with the server. It waits for the page to fully load, collects form data, sends a POST request to the backend server with that data, and displays validation icons (success or failure) based on the server's response. The choice of JavaScript on the frontend enables an interactive experience for users.

In the backend (Node.js - app.js), the Express server is configured to handle HTTP requests. It serves static resources (HTML, CSS, JavaScript) and defines routes for the main page and credit card validation. The credit card validation logic includes detailed checks, such as card number length, expiry date format, and comparison with the current date. The server responds with a success or failure indicator based on the validation.

The choice of Node.js and JavaScript both on the frontend and backend provides a cohesive and effective development environment for creating an interactive and responsive credit card validation web app. The code is structured to allow users to input card details, instantly validate those details, and view the validation result on the web page.


# Input Examples

**Example 1: Valid Input**

* Credit Card Number: 4111111111111111
* Credit Card Expiration Date: 12/2024
* Security Code (CVV): 123

**Example 2: Valid Input**

* Credit Card Number: 5555555555554444
* Credit Card Expiration Date: 06/2023
* Security Code (CVV): 789

**Example 4: Valid Input (American Express)**

* Credit Card Number: 3714496353984312
* Credit Card Expiration Date: 05/2024
* Security Code (CVV): 2344

**Example 3: Invalid Input (Invalid Credit Card Number Length)**

* Credit Card Number: 123456789012345
* Credit Card Expiration Date: 11/2024
* Security Code (CVV): 456

**Example 5: Invalid Input (Incorrect CVV)**

* Credit Card Number: 6011000990139424
* Credit Card Expiration Date: 09/2025
* Security Code (CVV): 9999
