# React Card Component

This repository contains a simple React application that displays pricing plans using cards. The application consists of two main components: `Cards` and `App`.

### `Cards` Component

The `Cards` component (`Cards.jsx`) is responsible for rendering pricing plan cards. It receives an array of plan objects (`planObj`) as a prop and maps through them to generate individual cards. Each card displays plan details such as plan name, price, features, and a button.

#### Features:

*   Displays pricing plan details in cards.
*   Features include plan name, price, user limit, storage, project limits, community access, and support details.
*   Buttons are enabled or disabled based on the plan type.

### `App` Component

The `App` component (`App.jsx`) is the main component of the application. It imports the `Cards` component and passes the `planObj` array containing plan details as a prop to `Cards`.

#### Features:

*   Defines an array of plan objects with details such as plan name, price, features, etc.
*   Renders the `Cards` component with the `planObj` prop.

### File Structure

*   `Cards.js`: Contains the `Cards` component responsible for rendering plan cards.
*   `App.js`: Contains the `App` component, the main component of the application, rendering the `Cards` component.

### How to Run

1.  Ensure you have Node.js and npm (Node Package Manager) installed on your system.
2.  Clone the repository to your local machine.
3.  Navigate to the project directory in your terminal.
4.  Run `npm install` to install project dependencies.
5.  Run `npm start` to start the development server.
6.  Open your browser and visit `http://localhost:5173` to view the application.

### Notes

*   This application uses React for building user interfaces.
*   Modify the plan objects in `App.js` to update or add new pricing plans.
*   Adjust the CSS classes and styles in `CompA.css` to customize the appearance of the pricing cards.

Feel free to explore and modify the code to suit your requirements or add additional features to the application.
