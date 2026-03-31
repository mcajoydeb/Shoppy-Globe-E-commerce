# ShoppyGlobe E-commerce

A modern e-commerce web application built using React, Redux Toolkit, and Tailwind CSS. This project demonstrates product listing, cart management, checkout flow, and performance optimization techniques.

---

## Live Repository

https://github.com/mcajoydeb/Shoppy-Globe-E-commerce

---

## Features

### Routing

* Implemented using `createBrowserRouter`
* Pages:

  * Home (Product Listing)
  * Product Detail (Dynamic route)
  * Cart
  * Checkout
* Dynamic routing using product ID

---

### Cart Functionality

* Add to Cart
* Remove from Cart
* Increase / Decrease Quantity
* Persistent cart using **localStorage**
* Cart badge in header

---

### Search

* Real-time product filtering
* Managed using Redux state

---

### Product Listing

* Responsive grid layout
* Card-based UI using Tailwind CSS
* Lazy loading images

---

### Product Detail Page

* WooCommerce-style layout
* Left: Product Image
* Right: Product Details
* Add to Cart functionality

---

### Checkout Page

* WooCommerce-style checkout layout
* Billing form with validation
* Order summary panel
* Place order functionality
* Cart cleared after order

---

### Performance Optimization

* Lazy loading using `React.lazy` and `Suspense`
* Lazy loading images using `loading="lazy"`

---

### UI/UX

* Built with Tailwind CSS
* Responsive design
* Header with logo, menu, search, and cart
* Footer section
* Clean and modern layout

---

## Tech Stack

* React
* Redux Toolkit
* React Router (createBrowserRouter)
* Tailwind CSS
* Vite

---

## Project Structure

```
src/
│── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductItem.jsx
│   ├── CartItem.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│
│── redux/
│   └── cartSlice.js
│
│── App.jsx
│── main.jsx
```

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/mcajoydeb/Shoppy-Globe-E-commerce.git

# Navigate into the project
cd Shoppy-Globe-E-commerce

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

##  Key Functionalities Implemented

* Dynamic routing with parameters
* State management using Redux Toolkit
* Form validation without external libraries
* Persistent cart using localStorage
* Responsive UI with Tailwind CSS

---


## Author

**Joydeb Choudhury (mcajoydeb)**

---

##  License

This project is open-source and available for learning purposes.
