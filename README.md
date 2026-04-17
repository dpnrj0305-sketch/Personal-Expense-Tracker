# Personal Expense Tracker

A full-stack personal expense tracker application built with React, Node.js, Express, and SQLite.

## 📁 Project Structure

```
Personal Expense Tracker/
├── backend/
│   ├── config/
│   │   └── database.js          # Database connection configuration
│   ├── models/
│   │   └── Expense.js           # Expense model definition
│   ├── routes/
│   │   └── expenses.js          # Expense API routes
│   ├── middleware/
│   │   └── errorHandler.js      # Global error handling middleware
│   ├── server.js                # Main server file
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables
│
├── frontend/
│   ├── public/
│   │   └── index.html           # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js     # Dashboard with charts
│   │   │   ├── Dashboard.css
│   │   │   ├── ExpenseForm.js   # Form to add expenses
│   │   │   ├── ExpenseForm.css
│   │   │   ├── ExpenseList.js   # List of expenses
│   │   │   └── ExpenseList.css
│   │   ├── App.js               # Main app component
│   │   ├── App.css
│   │   ├── index.js             # React entry point
│   │   └── index.css
│   └── package.json             # Frontend dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

#### 1. Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will start on `http://localhost:5000`

#### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend app will open on `http://localhost:3000`

## 📊 Features

### Dashboard
- **Total Balance**: Displays total expenses
- **Pie Chart**: Visual breakdown of expenses by category
- **Bar Chart**: Alternative category visualization

### Expense Management
- **Add Expenses**: Form to add title, amount, category, and date
- **View Expenses**: Table view of all expenses sorted by date
- **Delete Expenses**: Remove expenses with confirmation
- **Categories**: Food, Rent, Transport, Entertainment, Utilities, Healthcare, Other

## 🔌 API Endpoints

### Get All Expenses
```
GET /api/expenses
```

### Get Single Expense
```
GET /api/expenses/:id
```

### Create Expense
```
POST /api/expenses
Body: {
  "title": "string",
  "amount": "number",
  "category": "string",
  "date": "YYYY-MM-DD"
}
```

### Update Expense
```
PUT /api/expenses/:id
Body: {
  "title": "string",
  "amount": "number",
  "category": "string",
  "date": "YYYY-MM-DD"
}
```

### Delete Expense
```
DELETE /api/expenses/:id
```

## 🛠 Tech Stack

### Backend
- **Express.js**: Web framework
- **Sequelize**: ORM for database management
- **SQLite**: Local database
- **CORS**: Cross-origin resource sharing
- **Nodemon**: Development server auto-reload

### Frontend
- **React.js**: UI framework
- **Axios**: HTTP client
- **Recharts**: Chart library
- **CSS3**: Styling

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
DATABASE_URL=./database.sqlite
NODE_ENV=development
```

## 🎨 Styling

The application uses:
- **Gradient backgrounds** for visual appeal
- **Responsive design** for mobile and desktop
- **CSS Grid** for layout management
- **Modern UI components** with smooth transitions

## 🚀 Next Steps

1. **Testing**: Add unit and integration tests
2. **Authentication**: Implement user login/signup
3. **Deployment**: Deploy to Heroku, Vercel, or similar platforms
4. **Features**: Add monthly budgets, expense filtering, export to CSV
5. **Mobile**: Create a mobile app version

## 📄 License

MIT

## 👨‍💻 Author

Created for personal expense tracking
