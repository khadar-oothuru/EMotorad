# 🌟 EMotorad React Client

Welcome to the **EMotorad React Client**! This is the frontend application for the EMotorad platform, built using **React**. The app includes authentication, dynamic routing, and a sidebar layout for authenticated users.

## 🛠️ Features

- **🔐 User Authentication**: Protects routes by ensuring only authenticated users can access certain pages.
- **🚪 Protected Routes**: Pages like **Dashboard**, **Transactions**, **Schedules**, and more are accessible only after login.
- **📑 Sidebar Layout**: Authenticated users enjoy a sidebar for easy navigation between pages.
- **📱 Responsive UI**: The app is designed to be user-friendly and responsive across all devices.

## 📥 Installation

Follow these steps to get the app up and running locally:

### 1. Clone the repository
Clone the repository using:


git clone https://github.com/khadar-oothuru/EMotorad

### 2. Install dependencies
Navigate to your project directory and install the required dependencies:

cd <project-directory>
npm install
### 3. Set up environment variables

Create a .env file in the root of the project and add the following variables:

VITE_GOOGLEID=
VITE_Backend_URL=http://localhost:5000
VITE_web_access=

Make sure to replace the API URL with your actual backend URL.


### 4. Start the development server
Run the following command to start the React development server:


npm start
The app will be running at http://localhost:5731 in your browser.

🗂️ App Structure

src/components/: Contains reusable UI components like AuthPage, Layout, etc.
src/pages/: Contains individual pages such as Dashboard, Transactions, Schedules, etc.
src/context/: Contains the UserContext for managing global state (authentication and user data).
src/AppRouter.js: Handles routing and navigation between different pages based on user authentication.

🔗 Routing Overview
Public Routes:
/login: Login page (accessible to unauthenticated users).
Protected Routes (with Sidebar Layout):
/: Home page
/dashboard: Dashboard page
/transactions: Transactions page
/schedules: Schedules page
/users: Users page
/settings: Settings page
/help: Help page
/contact: Contact page
Note: If a user is not authenticated, they will be redirected to the login page when trying to access protected routes.

🚀 Technologies Used
React.js: A JavaScript library for building user interfaces.
React Router: For routing and navigation within the app.
Context API: For managing global state (user authentication status).
Tailwind css : For styling the application.