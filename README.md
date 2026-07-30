# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Simple CRUD Application

A simple full-stack CRUD (Create, Read, Update, Delete) application built with **React**, **React Router**, **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates the basic CRUD operations between a React frontend and an Express/MongoDB backend.

## 🚀 Features

- Add new users
- View all users
- View user details
- Update user information
- Delete users
- Add new products
- View all products
- View product details
- Update product information
- Delete products
- Dynamic routing with React Router
- Route loaders for data fetching
- REST API integration using Fetch API

## 🛠️ Technologies Used

### Client

- React
- React Router
- JavaScript (ES6+)
- Fetch API

### Server

- Node.js
- Express.js
- MongoDB Atlas
- CORS
- dotenv

## 📂 Project Structure

### Client

- User Management
- Product Management
- User Details Page
- Product Details Page
- Update User Page
- Update Product Page

### Server API

#### Users

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

#### Products

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

## 📌 CRUD Operations

### Users

- ✅ Create User
- ✅ Read Users
- ✅ Read Single User
- ✅ Update User
- ✅ Delete User

### Products

- ✅ Create Product
- ✅ Read Products
- ✅ Read Single Product
- ✅ Update Product
- ✅ Delete Product

## ▶️ Run Locally

### Client

```bash
npm install
npm run dev
```

### Server

```bash
npm install
npm start
```

Create a `.env` file in the server directory:

```env
DB_USER=your_database_username
DB_PASS=your_database_password
```

## 🎯 Purpose

This project was built for practicing full-stack CRUD operations, React Router loaders, REST APIs, and MongoDB integration using the MERN stack.
