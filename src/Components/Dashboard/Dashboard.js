// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Card from '../Card/Card';
import ActivityChart from '../ActivityChart/ActivityChart';
import RecentOrders from '../RecentOrders/RecentOrders';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-cards">
        <Card title="Total Orders" value="75" />
        <Card title="Total Delivered" value="70" />
        <Card title="Total Cancelled" value="05" />
        <Card title="Total Revenue" value="$12k" />
        <Card title="Net Profit" value="$6759.25" />
      </div>
      <ActivityChart />
      <div className="bottom-section">
        <RecentOrders />
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default Dashboard;
