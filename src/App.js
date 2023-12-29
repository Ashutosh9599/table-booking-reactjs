import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {
  const [orders, setOrders] = useState({});

  const fetchOrdersFromLocalStorage = () => {
    const storedOrders = {};
    Object.keys(localStorage).forEach((key) => {
      if (key !== 'orders') {
        storedOrders[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    return storedOrders;
  };

  useEffect(() => {
    const storedOrders = fetchOrdersFromLocalStorage();
    setOrders(storedOrders);
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleSubmit = (data) => {
    const { orderId, selectedTable } = data;
    const updatedOrders = {
      ...orders,
      [orderId]: { ...data, table: selectedTable },
    };
    setOrders(updatedOrders);

    localStorage.setItem(orderId, JSON.stringify({ ...data, table: selectedTable }));
  };

  const handleDelete = (orderId) => {
    const updatedOrders = { ...orders };
    delete updatedOrders[orderId];

    setOrders(updatedOrders);
    localStorage.removeItem(orderId);
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <List orders={orders} onDelete={handleDelete} />
    </div>
  );
}

export default App;
