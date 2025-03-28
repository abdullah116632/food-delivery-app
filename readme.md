# 🍔 Food Delivery App

## 📌 Overview
**food-delivery-app** is a fully functional **food delivery application** built using the **MERN stack**. It includes separate **admin and user interfaces**, both powered by **React**, and a shared **Node.js/Express backend**. The app supports **order management, authentication, and secure payments using Stripe**, making it a complete solution similar to commercial food delivery platforms.

## 🚀 Features
### 🛍️ User Side (Frontend)
- 🔐 **User Authentication** (Sign Up, Login, Logout)
- 🍽️ **Browse Menus**
- 🛒 **Add to Cart & Checkout**
- 💳 **Online Payments with Stripe**
- 📦 **Order Tracking & Status Updates**
- ⭐ **Rate & Review Restaurants**

### 🏢 Admin Panel
- 📊 **Dashboard to Manage Orders & Users**
- 🏪 **Add/Edit/Delete Menus**
- 🚀 **Order Management & Status Updates**
- 🎯 **View Sales Reports & Analytics**

### ⚡ Backend
- 🔑 **JWT Authentication for Secure API Access**
- 🗄️ **MongoDB for Storing User & Order Data**
- 🛠️ **Role-Based Access Control (Admin & User)**
- 📦 **Order Processing & Status Updates**
- 💰 **Stripe Integration for Payments**

## 🛠️ Technologies Used
- **Frontend (User & Admin)**
  - React.js
  - Redux (State Management)
  - React Router
  - CSS (Styling)
  - Axios (API Requests)
  
- **Backend**
  - Node.js & Express.js
  - MongoDB & Mongoose
  - JWT Authentication
  - Stripe API (Payment Processing)
  - Cloudinary (Image Upload)
  
- **DevOps & Hosting**
  - Netlify (Frontend & Admin)
  - Render (Backend)
  - MongoDB Atlas (Database)
  
## 🚀 Deployment

### **Frontend**
The frontend of this project is hosted on **Netlify**. You can access it here:  
🔗 [Live Demo](https://quickfoods.netlify.app/)

## 📸 Screenshots
| **User Interface** | **Admin Dashboard** |
|-------------------|-------------------|
| ![User UI](https://res.cloudinary.com/dp0zdj77w/image/upload/v1743141426/forReadme/Screenshot_2025-03-28_115541_vaahim.png) | ![Admin UI](https://res.cloudinary.com/dp0zdj77w/image/upload/v1742364684/forReadme/Screenshot_2025-02-01_153128_ub48b6.png) |


## 📂 Folder Structure
```
food-delivery-app/
│── admin/           # React-based Admin Dashboard
│── frontend/        # React-based User Interface
│── backend/         # Node.js/Express Backend
│── README.md        # Documentation
```

## 🔑 Environment Variables
Create a `.env` file in the **backend** folder and add:

```
PORT=5000
DB_URI=mongodb+srv://your_mongodb_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=your_frontend_url
```

## 🚀 How to Run Locally
1. **Clone the repository**
   ```sh
   git clone https://github.com/abdullah116632/food-delivery-app.git
   cd food-delivery-app
   ```

2. **Install dependencies for each service**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin && npm install
   ```

3. **Run the backend**
   ```sh
   cd backend
   npm start
   ```

4. **Run the user frontend**
   ```sh
   cd ../frontend
   npm start
   ```

5. **Run the admin dashboard**
   ```sh
   cd ../admin
   npm start
   ```

6. **Access the App**
   - User Interface: **`http://localhost:3000`**
   - Admin Dashboard: **`http://localhost:3001`**
   - API Server: **`http://localhost:4000`**

## 📜 API Endpoints

### **User Authentication & Profile**
- `POST /api/user/register` → Register a new user  
- `POST /api/user/login` → User login  
- `GET /api/user/` → Get user information (Requires authentication)  

### **Admin Routes**
- `POST /api/admin/create-admin` → Create a new admin (Requires admin verification)  
- `POST /api/admin/login` → Admin login  

### **Food Management**
- `POST /api/food/add` → Add a new food item (Admin only, requires image upload)  
- `GET /api/food/list` → Get the list of food items (Available for both users and admin)  
- `POST /api/food/remove` → Remove a food item (Admin only)  

### **Cart Management**
- `POST /api/cart/add` → Add an item to the cart (Requires authentication)  
- `POST /api/cart/remove` → Remove an item from the cart (Requires authentication)  
- `POST /api/cart/get` → Get the user's cart details (Requires authentication)  

### **Order Management**
- `POST /api/order/place` → Place a new order (Requires authentication)  
- `POST /api/order/verify` → Verify an order (Requires authentication)  
- `POST /api/order/userorders` → Get orders placed by the logged-in user (Requires authentication)  
- `GET /api/order/list` → Get all orders (Admin only)  
- `POST /api/order/status` → Update order status (Admin only)  

### **Static Files**
- `GET /images/{filename}` → Access uploaded food images  
  

## 🏆 Future Enhancements
- ✅ Implement **live order tracking**  
- 🔄 Add **AI-powered food recommendations**  
- 🚴 Integrate **delivery partner management**  
- 📝 Enhance **review & rating system**  



## 📜 License
This project is open-source and available for learning purposes.

