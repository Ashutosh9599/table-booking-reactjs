import React from 'react';
import './List.css';

const List = ({ orders, onDelete }) => {
    const getOrdersForTable = (table) => {
        return Object.keys(orders)
            .filter((orderId) => orders[orderId].table === table)
            .map((orderId, index) => (
                <li className="order-item" key={index}>
                    <div>
                        <span className="order-info">
                            {orders[orderId].price}
                        </span>
                        <span className="order-info">
                            {orders[orderId].table}
                        </span>
                        <span className="order-info">
                            {orders[orderId].dish}
                        </span>
                    </div>
                    <button className="order-item-button" onClick={() => onDelete(orderId)}>
                        Delete
                    </button>
                </li>
            ));
    };

    return (
        <div className="container">
            <h2>Orders</h2>
            <div className="table-section">
                <h3 className="table-header">Table 1</h3>
                <ul className="order-list">
                    {getOrdersForTable('Table 1')}
                </ul>
            </div>
            <div className="table-section">
                <h3 className="table-header">Table 2</h3>
                <ul className="order-list">
                    {getOrdersForTable('Table 2')}
                </ul>
            </div>
            <div className="table-section">
                <h3 className="table-header">Table 3</h3>
                <ul className="order-list">
                    {getOrdersForTable('Table 3')}
                </ul>
            </div>
        </div>
    );
};

export default List;
