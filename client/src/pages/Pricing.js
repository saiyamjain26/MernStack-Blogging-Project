// Pricing.js
import React from 'react';
import './Pricing.css'; // Import the CSS file for Pricing styles

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Basic Plan',
      price: '$4.99/month',
      features: ['10 blog posts per month', 'Basic support'],
    },
    {
      title: 'Standard Plan',
      price: '$9.99/month',
      features: ['Unlimited blog posts', 'Priority support', 'Custom domain'],
    },
    {
      title: 'Premium Plan',
      price: '$15.99/month',
      features: [
        'Unlimited blog posts',
        'Priority support',
        'Custom domain',
        'Analytics dashboard',
      ],
    },
  ];

  return (
    
    <div className="pricing-container">
      <h1>Pricing</h1>
      <p>Explore our flexible pricing plans tailored to meet your needs.</p>
      <div className="pricing-plans">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            <br></br>
            </ul>
            <button className="purchase-button">Purchase</button>
          </div>
        ))}
      </div>
      <div className="additional-content">
        
        <h2>Why Choose Us?</h2>
        <p>
          Our blogging platform offers more than just a space to publish your thoughts. With our premium plans, you get access to advanced analytics, personalized support, and the ability to customize your domain for a professional online presence.
        </p>
        <p>
          Whether you're a hobbyist or a professional blogger, our plans are designed to scale with your needs. Join our community and start sharing your stories with the world!
        </p>
      </div>
    </div>
  );
};

export default Pricing;
