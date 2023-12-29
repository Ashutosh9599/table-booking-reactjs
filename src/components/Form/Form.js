import React, { useState } from 'react';
import './Form.css';


const Form = ({ onSubmit }) => {
    const [orderId, setOrderId] = useState('');
    const [price, setPrice] = useState('');
    const [dish, setDish] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
  
    const handleOrderIdChange = (e) => {
      setOrderId(e.target.value);
    };
  
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };
  
    const handleDishChange = (e) => {
      setDish(e.target.value);
    };
  
    const handleTableChange = (e) => {
      setSelectedTable(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ orderId, price, dish, selectedTable });
      setOrderId('');
      setPrice('');
      setDish('');
      setSelectedTable('');
    };
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">
          Unique Order ID:
          <input type="text" className="form-input" value={orderId} onChange={handleOrderIdChange} />
        </label>
        <br />
        <label className="form-label">
          Choose Price:
          <input type="number" className="form-input" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label className="form-label">
          Choose Dish:
          <input type="text" className="form-input" value={dish} onChange={handleDishChange} />
        </label>
        <br />
        <label className="form-label">
          Choose Table:
          <select className="form-select" value={selectedTable} onChange={handleTableChange}>
            <option value="">Select a table</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </label>
        <br />
        <button className="form-button" type="submit">Add Table</button>
      </form>
    );
  };
  
  export default Form;