# 🏥 Trust Care

### Baby Sitting & Elderly Care Service Platform

Trust Care is a web application that provides reliable and trusted caregiving services for children, elderly people, and sick family members. The platform helps users easily find, book, and manage care services based on their needs, location, and duration.

---

## 🎯 Project Goal

The main goal of this project is to make caregiving **easy, secure, and accessible for everyone** by offering a trusted digital platform for booking care services.

---

## 🌐 Live Website

🔗 Live Link: _(https://trust-care-rho.vercel.app/)_

---

## ✨ Key Features

### 🔹 General

- Fully responsive design (Mobile, Tablet, Desktop)
- User-friendly and modern UI
- Secure and scalable architecture

### 🔐 Authentication

- Email & Password authentication
- Google social login
- User registration with:
  - NID Number
  - Full Name
  - Email Address
  - Contact Number
  - Password validation:
    - Minimum 6 characters
    - At least 1 uppercase and 1 lowercase letter
- Protected private routes
- Logged-in users remain authenticated on page reload

### 🛎️ Services

- Baby Care Service
- Elderly Care Service
- Sick People Care Service
- Individual service detail pages

### 📅 Booking System

- Select service duration (Hours / Days)
- Location selection:
  - Division
  - District
  - City
  - Area
  - Full Address
- Automatic total cost calculation
- Booking status:
  - Pending
  - Confirmed
  - Completed
  - Cancelled
- Email invoice sent after successful booking

### 📄 My Booking Page

- View all bookings
- Booking details:
  - Service Name
  - Duration
  - Location
  - Total Cost
  - Booking Status
- Cancel booking option

---

## 🗺️ Pages & Routes

### 🏠 Homepage (`/`)

- Banner / Slider with caregiving motivation
- About section explaining the platform mission
- Services overview
- Testimonials and success metrics

### 🧾 Service Detail Page (`/service/:service_id`)

- Detailed service information
- Book Service button
- Redirects to login page if user is not authenticated

### 📌 Booking Page (`/booking/:service_id`) _(Private Route)_

- Booking steps:
  1. Select duration
  2. Select location
  3. Dynamic total cost calculation
  4. Confirm booking (Status: Pending)
- Service and location data fetched from **Zapshift resources**

### 🔐 Authentication

- Login Page (`/login`)
- Registration Page (`/register`)
- Redirect to booking page after successful login or registration

### 📋 My Bookings (`/my-bookings`) _(Private Route)_

- List of all user bookings
- View booking details
- Cancel booking option

### ❌ Error Page (`/404`)

- Not Found message
- Button to return to Home page

---

## 🧠 Challenges Implemented

- SEO metadata for Home and Service Detail pages
- Email invoice generation after booking
- Secure private routing
- Dynamic pricing calculation

---

## 💳 Optional Features

- Stripe payment integration
- Booking created only after successful payment
- Admin dashboard:
  - View all bookings
  - View payment history

---

## 🛠️ Technology Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- Axios
- React Hook Form

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Additional Tools

- Firebase Authentication
- Stripe (Optional)
- Nodemailer (Email Service)
- Zapshift API (Location Data)

---

## 🔐 Environment Variables

All sensitive configuration keys are stored in environment variables.
