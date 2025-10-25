# Book My Show - Movie Ticket Booking Application

A full-stack web application for booking movie tickets online. Users can browse movies, select shows, book seats, and make secure payments using Stripe.

## ⚡ Quick Start - Admin Login

> **Email**: `mk@gmail.com`  
> **Password**: `12345678`

Use these credentials to log in as an Admin and access the admin dashboard at `/admin`.

---

## Project Overview

Book My Show is a comprehensive movie ticket booking system built with the MERN stack (MongoDB, Express, React, Node.js). It supports three user roles: Admin, Theatre Partner, and Regular User.

### Application Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       BOOK MY SHOW WORKFLOW DIAGRAM                         │
└─────────────────────────────────────────────────────────────────────────────┘

ADMIN FLOW:
─────────────────────────────────────────────────────────────────────────────
  1. Admin Logs In (mk@gmail.com / 12345678)
       ↓
  2. Admin Dashboard → Movies Management
       ↓
  3. ✅ Add/Edit/Delete Movies
       ├─ Movie Title, Description, Duration
       ├─ Genre, Language, Release Date
       └─ Poster URL
       ↓
  4. Admin Dashboard → Theatres Management
       ↓
  5. View All Theatre Registration Requests from Partners
       ↓
  6. ✅ Approve or Block Theatres
       └─ Only APPROVED theatres can proceed
       ↓
  7. Theatre Status: Pending → Approved → Active


PARTNER FLOW:
─────────────────────────────────────────────────────────────────────────────
  1. Partner Registers Account
       ↓
  2. Partner Logs In
       ↓
  3. Partner Dashboard → Theatres Management
       ↓
  4. ✅ Add Theatre
       ├─ Theatre Name, Address
       ├─ Phone, Email
       └─ Status: PENDING (Waiting for Admin Approval)
       ↓
  5. ⏳ Wait for Admin Approval
       ↓
  6. Once Admin Approves Theatre (Status: APPROVED)
       ↓
  7. ✅ Theatre Status Changes to ACTIVE
       ↓
  8. ✅ Now can Add Shows to Theatre
       ├─ Show Name, Date & Time
       ├─ Select Movie (from movies added by Admin)
       ├─ Ticket Price, Total Seats
       └─ Show is now LIVE
       ↓
  9. ✅ Can Edit/Delete Shows
       ↓
  10. View Real-time Bookings and Seat Status


USER FLOW:
─────────────────────────────────────────────────────────────────────────────
  1. User Registers Account
       ↓
  2. User Logs In
       ↓
  3. Browse Home Page
       ↓
  4. ✅ Search/View All Available Movies
       ↓
  5. Select a Movie → View Movie Details
       ↓
  6. Select Date to Book Show
       ↓
  7. View All Theatres Showing This Movie on Selected Date
       ↓
  8. Select a Theatre & Time Slot
       ↓
  9. ✅ Seat Selection Page
       ├─ View Interactive Seat Layout
       ├─ See Booked Seats (Red)
       ├─ See Available Seats (Gray)
       ├─ Select Desired Seats
       └─ See Real-time Price Calculation
       ↓
  10. Proceed to Payment
       ↓
  11. ✅ Stripe Payment Gateway
       ├─ Enter Card Details
       ├─ Process Payment (Secure)
       └─ Transaction ID Generated
       ↓
  12. ✅ Booking Confirmed
       ├─ Email Ticket Confirmation
       ├─ Show Booking Details
       └─ Seats Reserved
       ↓
  13. View Bookings in Profile
       ↓
  14. Receive Email with Ticket Details


COMPLETE FLOW SUMMARY:
─────────────────────────────────────────────────────────────────────────────

    ADMIN                      PARTNER                      USER
       │                           │                         │
       ├─→ Add Movies ───────┐     │                         │
       │                     │     │                         │
       │                     ├────→├─ Register Theatre       │
       │                     │     │   (Pending)             │
       │                     │     │                         │
       ├─→ Approve Theatre ──┼────→├─ Theatre Approved       │
       │                     │     │   (Status: Active)      │
       │                     │     │                         │
       │                     │     ├─→ Add Shows             │
       │                     │     │   (Now Visible to Users)
       │                     │     │                         │
       │                  ┌──┴─────┴─────────────────────────┤
       │                  │                                  │
       └──────────────────┴──→ USER BROWSING & BOOKING      │
                              Movies → Theatres → Shows      │
                              Select Seats → Pay via Stripe  │
                              Get Email Confirmation         │
```

## Key Features

- **User Authentication**: Secure registration, login, and password reset functionality
- **Movie Management**: Admin can add/edit/delete movies with full details
- **Theatre Approval System**: Admin must approve theatres before they go live
- **Show Management**: Partners can only add shows to approved theatres
- **Show Booking**: View available shows across theatres and select preferred seats
- **Seat Selection**: Interactive seat picker with real-time availability
- **Payment Integration**: Stripe payment gateway for secure transactions
- **Email Notifications**: Automated ticket confirmation emails with booking details
- **Role-Based Access**: Different dashboards and workflows for Admin, Partner, and Users
- **Theatre Management**: Partners can add and manage theatres and shows
- **Real-time Status Updates**: Theatre approval status, seat availability, and booking updates

## Tech Stack

### Frontend
- **React 18.2.0**: UI library
- **Redux & Redux Toolkit**: State management
- **React Router DOM**: Client-side routing
- **Ant Design (antd)**: UI component library
- **Axios**: HTTP client
- **Stripe**: Payment processing
- **Moment.js**: Date and time handling

### Backend
- **Node.js**: Runtime environment
- **Express 4.21.2**: Web framework
- **MongoDB 6.20.0**: NoSQL database
- **Mongoose 8.19.2**: MongoDB ODM
- **JWT (jsonwebtoken)**: Authentication tokens
- **Bcrypt**: Password hashing
- **Nodemailer**: Email sending
- **Stripe**: Payment processing
- **CORS**: Cross-origin resource sharing

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database (local or Atlas)
- Stripe account
- SendGrid account for email sending

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/bookmyshow

# JWT Secret
secret_key_jwt=your_jwt_secret_key_here

# Stripe Keys
stripe_key=pk_test_your_stripe_public_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Port
PORT=8081
```

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:8081
```

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd bms-class
```

2. **Install dependencies**
```bash
npm install
```

3. **Build and start the application**
```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000` (frontend) and the backend API runs on `http://8081`.

## Default Admin Credentials

| Field    | Value        |
|----------|--------------|
| Email    | mk@gmail.com |
| Password | 12345678     |

**Note**: Change these credentials in production immediately after first login.

## Project Structure

```
bms-class/
├── client/                          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Profile/
│   │   │   ├── Admin/
│   │   │   ├── Partner/
│   │   │   ├── SingleMovie.js
│   │   │   ├── BookShow.js
│   │   │   ├── Forget.js
│   │   │   └── Reset.js
│   │   ├── calls/                  # API calls
│   │   ├── redux/                  # Redux slices
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                          # Node/Express backend
│   ├── config/
│   │   └── dbConfig.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── movieModel.js
│   │   ├── theatreModel.js
│   │   ├── showModel.js
│   │   └── bookingModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── movieRoutes.js
│   │   ├── theatreRoute.js
│   │   ├── showRoute.js
│   │   └── bookingRoute.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── utils/
│   │   ├── emailSender.js
│   │   └── email_templates/
│   │       ├── otp.html
│   │       ├── ticketTemplate.html
│   │       └── welcome.html
│   ├── index.js
│   └── package.json
│
└── README.md
```

## User Roles & Features

### Admin (`/admin`)
- View all movies
- Add, edit, and delete movies
- View and manage all theatres
- Approve or block theatre registrations
- Dashboard with theatre status overview

### Theatre Partner (`/partner`)
- Add and manage their theatres
- Create and manage shows for their theatres
- View booking details
- Monitor seat availability

### Regular User (`/profile`)
- Browse and search movies
- View movie details and available shows
- Select seats and book tickets
- Make payments via Stripe
- View booking history
- Receive email confirmations

## API Endpoints

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/get-current-user` - Get current user (protected)
- `PATCH /api/users/forgetpassword` - Send OTP for password reset
- `PATCH /api/users/resetpassword` - Reset password with OTP

### Movies
- `GET /api/movies/get-all-movies` - Get all movies
- `POST /api/movies/add-movie` - Add new movie (admin)
- `PUT /api/movies/update-movie` - Update movie (admin)
- `PUT /api/movies/delete-movie` - Delete movie (admin)
- `GET /api/movies/movie/:id` - Get single movie

### Theatres
- `POST /api/theatres/add-theatre` - Add new theatre
- `GET /api/theatres/get-all-theatres` - Get all theatres (admin)
- `POST /api/theatres/get-all-theatres-by-owner` - Get user's theatres
- `PUT /api/theatres/update-theatre` - Update theatre
- `PUT /api/theatres/delete-theatre` - Delete theatre

### Shows
- `POST /api/shows/add-show` - Add new show
- `POST /api/shows/get-all-shows-by-theatre` - Get shows by theatre
- `POST /api/shows/get-all-theatres-by-movie` - Get theatres showing a movie
- `PUT /api/shows/update-show` - Update show
- `POST /api/shows/delete-show` - Delete show
- `POST /api/shows/get-show-by-id` - Get show details

### Bookings
- `POST /api/bookings/make-payment` - Process Stripe payment
- `POST /api/bookings/book-show` - Create booking
- `GET /api/bookings/get-all-bookings` - Get user bookings (protected)

## Features in Detail

### Seat Selection
- Interactive grid-based seat picker
- Real-time availability status
- Visual indicators for booked, selected, and available seats
- Automatic price calculation based on selected seats

### Payment Processing
- Stripe integration for secure payments
- One-time payment for all selected seats
- Transaction ID generation and storage
- Webhook support for payment status updates

### Email Notifications
- OTP delivery for password reset
- Ticket confirmation emails with booking details
- SendGrid integration for reliable email delivery

### Search & Filtering
- Search movies by title
- Filter shows by date
- Sort shows by time
- View theatre information

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd server
npm install
npm run dev  # or: node -r dotenv/config ./index.js
```

**Terminal 2 - Frontend:**
```bash
cd client
npm install
npm start
```

### Production Mode

```bash
npm run build
npm start
```

## Database Schema

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'user' | 'admin' | 'partner',
  otp: String,
  otpExpiry: Date
}
```

### Movie
```javascript
{
  title: String,
  description: String,
  duration: Number,
  genre: String,
  language: String,
  releaseDate: Date,
  poster: String (URL)
}
```

### Theatre
```javascript
{
  name: String,
  address: String,
  phone: Number,
  email: String,
  owner: ObjectId (User),
  isActive: Boolean
}
```

### Show
```javascript
{
  name: String,
  date: Date,
  time: String,
  movie: ObjectId (Movie),
  ticketPrice: Number,
  totalSeats: Number,
  bookedSeats: Array,
  theatre: ObjectId (Theatre)
}
```

### Booking
```javascript
{
  show: ObjectId (Show),
  user: ObjectId (User),
  seats: Array,
  transactionId: String
}
```

## Troubleshooting

### Connection Issues
- Verify MongoDB URL in `.env` file
- Ensure MongoDB server is running
- Check database credentials

### Payment Issues
- Verify Stripe keys are correct
- Check Stripe account is in test mode for development
- Ensure webhook secret is configured

### Email Not Sending
- Verify SendGrid API key is valid
- Check email templates exist in `server/utils/email_templates/`
- Ensure sender email is verified in SendGrid

### CORS Errors
- Check backend URL in `.env` file
- Verify CORS is enabled in server
- Ensure frontend and backend URLs match

## Security Considerations

- Passwords are hashed using bcrypt
- JWT tokens expire after 24 hours
- Protected routes require authentication middleware
- Input validation on all API endpoints
- Environment variables store sensitive data

## Future Enhancements

- User profile and preferences management
- Advanced search and filtering
- Ratings and reviews for movies
- Wishlist/favorites functionality
- Bulk booking management
- Analytics and reporting dashboard
- Mobile app support
- Real-time seat updates with WebSockets

## Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Commit changes with clear messages
4. Push to the branch
5. Create a pull request

## BY
-Manthan Kalra
-24bcs10478


