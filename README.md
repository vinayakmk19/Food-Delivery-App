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
   npm install ```

   - **Frontend:**
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
