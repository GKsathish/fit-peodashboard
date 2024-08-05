// src/components/CustomerFeedback.js
import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      customer: 'Jenny Wilson',
      rating: 5,
      comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.',
    },
    {
      customer: 'Dianne Russell',
      rating: 4,
      comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
      customer: 'Devon Lane',
      rating: 4,
      comment: 'The wings were great, and the service was prompt. A bit noisy but overall a good experience.',
    },
  ];

  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <div className="customer">{feedback.customer}</div>
          <div className="rating">{'★'.repeat(feedback.rating)}</div>
          <p>{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
