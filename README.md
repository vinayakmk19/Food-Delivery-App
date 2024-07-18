# Food Delivery App

## Overview
A modern, full-stack food delivery application built using the MERN stack. This project showcases an end-to-end implementation, incorporating user-friendly interfaces, secure authentication, and efficient data handling.

## Key Features
- **User Authentication:** Secure registration, login, and session management using JWT.
- **Restaurant & Menu Browsing:** Intuitive UI for exploring restaurants and their offerings.
- **Cart Management:** Add, update, and remove items with real-time feedback.
- **Order Processing:** Seamless checkout and order confirmation.
- **Order History:** Detailed user order history for easy reordering.

## Tech Stack
- **Frontend:** React.js, Redux, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Styling:** Material-UI, CSS Modules
- **Hosting:** Render.com

## Installation & Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vinayakmk19/Food-Delivery-App.git
   cd Food-Delivery-App

2. **Install Dependencies:**
   - **Frontend:**
   ```bash
   cd frontend
   npm install
 
- **Backend:**
   ```bash
   cd ../backend
   npm install

3. **Environment Variables:**
   - Create a .env file in the backend directory with the following variables:**
   ```makefile
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. **Run the Application:**
   - **backend:**
   ```bash
   cd backend
   npm start

- **frontend:**
   ```bash
   cd ../frontend
   npm start

## Project Structure:
- **FrontEnd**
   - **src/components:** React components.
   - **src/redux:** Redux store and slices.
   - **src/pages:** Application pages (Home, Menu, Cart, etc.).
   - **src/styles:** CSS Modules for styling.

- **Backend**
   - **models:** Mongoose models for MongoDB collections.
   - **routes:** Express routes for API endpoints.
   - **controllers:** Logic for handling requests.
   - **middleware:** Custom middleware for authentication and error handling.

## Development Process
- **Planning:** Defined project scope, features, and UI/UX design.
- **Implementation:** Used agile methodology, breaking down tasks into sub tasks and implemented.
- **Testing:** Performed unit testing and integration testing with Postman.
- **Deployment:** Deployed using Render.com, ensuring smooth CI/CD pipeline.

## Challenges & Solutions
- **State Management:** Leveraged Redux to manage complex state across components.
- **API Integration:** Handled asynchronous operations with Redux Thunk.
- **Security:** Implemented JWT for secure authentication and bcrypt for password hashing.

## Future Enhancements
- **Real-time Updates:** Integrate WebSockets for real-time order tracking.
- **Payment Integration:**  Add payment gateway for processing transactions.
- **User Reviews & Ratings:** Allow users to rate restaurants and leave reviews.


### Hosted Url Link:
https://food-delivery-app-frontend-t3so.onrender.com

## Conclusion
This project demonstrates proficiency in the MERN stack, showcasing the ability to build and deploy a full-stack application with a focus on user experience, security, and performance.




