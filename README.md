[VISIT BudgetBuddy](https://aditya-1838.github.io/BudgetBuddy/)

# BudgetBuddy

## Overview

BudgetBuddy is a simple and intuitive personal finance and budget management tool designed to help users track their income, expenses, and savings. The web app allows users to add financial data, view past transactions, and track their progress toward savings goals.

### Currently the frontend has been made and will undego some changes.
### Where as the backend is still in the progrees and will be intergated in the project in upcoming days.

## Technologies Used

- **Frontend**: 
  - HTML, CSS, Tailwind CSS
  - Font Awesome (Icons)
  - JavaScript (for interactivity)
  
- **Backend**:(Still Pending ) 
  - Node.js
  - Express.js (Routing)
  - MongoDB (Database for storing income and expenses)

- **View Engine**:
  - EJS (Embedded JavaScript for templating)

## Features

- **User-Friendly Interface**: A responsive, clean design using Tailwind CSS for a great user experience across devices.
  
- **Add Income and Expenses**: Easily input your financial details, including income source, currency type, and expense categories.
  
- **Dashboard View**: Provides a summary of your financial data, including total income, expenses, and savings, with future plans to include graphical insights.

- **Track Savings Goals**: Users can set monthly savings goals and track their progress towards achieving them.
- **PDF Downloading**: User can download the report in pdf format.
- **Transaction History**: A clear table that displays past transactions, including dates, descriptions, categories, and amounts.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/BudgetBuddy.git
   cd BudgetBuddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following:

   ```bash
   PORT=5000
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. Run the app:
   ```bash
   npm start
   ```

5. Navigate to `http://localhost:5000` to start using BudgetBuddy.

## Future Updates

- **Savings Tracker**: A feature to set and track savings goals.
- **Recurring Transactions**: Automatically add recurring expenses or incomes.
- **Budget Alerts**: Notify users when exceeding budget limits.
- **Mobile App**: Plan to develop a mobile application version.
- **Login/Signup**: Secure authentication system with JWT for user-specific data handling.
