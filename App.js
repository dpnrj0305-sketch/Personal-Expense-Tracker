import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all expenses
  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/expenses');
      if (response.data.success) {
        setExpenses(response.data.data);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching expenses:', err);
      setError('Failed to fetch expenses');
    } finally {
      setLoading(false);
    }
  };

  // Fetch expenses on component mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  // Handle add expense
  const handleAddExpense = async (expenseData) => {
    try {
      const response = await axios.post('/api/expenses', expenseData);
      if (response.data.success) {
        setExpenses([response.data.data, ...expenses]);
        setError(null);
      }
    } catch (err) {
      console.error('Error adding expense:', err);
      setError('Failed to add expense');
    }
  };

  // Handle delete expense
  const handleDeleteExpense = async (id) => {
    try {
      const response = await axios.delete(`/api/expenses/${id}`);
      if (response.data.success) {
        setExpenses(expenses.filter((expense) => expense.id !== id));
        setError(null);
      }
    } catch (err) {
      console.error('Error deleting expense:', err);
      setError('Failed to delete expense');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Personal Expense Tracker</h1>
      </header>

      <main className="main-container">
        {error && <div className="error-message">{error}</div>}

        <div className="content-grid">
          <div className="left-section">
            <Dashboard expenses={expenses} loading={loading} />
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>

          <div className="right-section">
            <ExpenseList
              expenses={expenses}
              loading={loading}
              onDelete={handleDeleteExpense}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
