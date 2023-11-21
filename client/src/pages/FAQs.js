import React, { useState } from 'react';
import './FAQs.css'; // Import the CSS file for FAQs styles

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const scrollToItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAnswer = (id) => {
    scrollToItem(id);
    setActiveQuestion(id === activeQuestion ? null : id);
  };

  return (
    <div className="your-page3">
      <div className="faqs-container">
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question1')}>What is BlogBlitz?</h3>
          <div
            id="question1"
            className={`answer ${activeQuestion === 'question1' ? 'active' : ''}`}
          >
            BlogBlitz is a blogging platform that allows users to create, publish, and share their thoughts and stories with the world. It provides a user-friendly interface and a supportive community of writers.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question2')}>How do I create an account?</h3>
          <div
            id="question2"
            className={`answer ${activeQuestion === 'question2' ? 'active' : ''}`}
          >
            Creating an account on BlogBlitz is easy. Click on the "Sign Up" button, fill in the required information, and you'll be ready to start your blogging journey.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question3')}>Can I customize my blog's appearance?</h3>
          <div
            id="question3"
            className={`answer ${activeQuestion === 'question3' ? 'active' : ''}`}
          >
            Yes, BlogBlitz offers customization options for your blog. You can personalize the layout, color scheme, and even use a custom domain to give your blog a unique look.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question4')}>Is BlogBlitz free to use?</h3>
          <div
            id="question4"
            className={`answer ${activeQuestion === 'question4' ? 'active' : ''}`}
          >
            Yes, BlogBlitz offers a free plan with basic features. Additionally, there are premium plans with advanced features for users who want an enhanced blogging experience.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question5')}>How can I publish my articles?</h3>
          <div
            id="question5"
            className={`answer ${activeQuestion === 'question5' ? 'active' : ''}`}
          >
            Publishing articles on BlogBlitz is simple. After logging in, go to your dashboard and click on the "New Post" button. Then, write your article, add images or media, and click "Publish" to share it with your audience.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question6')}>Can I collaborate with other writers?</h3>
          <div
            id="question6"
            className={`answer ${activeQuestion === 'question6' ? 'active' : ''}`}
          >
            Absolutely! BlogBlitz encourages collaboration among writers. You can invite other writers to co-author articles or participate in guest blogging to create diverse content.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question7')}>How do I delete my blog posts?</h3>
          <div
            id="question7"
            className={`answer ${activeQuestion === 'question7' ? 'active' : ''}`}
          >
            To delete a blog post, navigate to your dashboard, find the post you want to delete, click on it to open, and then look for the delete or trash icon. Confirm the deletion to remove the post permanently.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question8')}>What are the benefits of a premium plan?</h3>
          <div
            id="question8"
            className={`answer ${activeQuestion === 'question8' ? 'active' : ''}`}
          >
            The premium plan offers additional features like advanced analytics, access to premium templates, ad-free experience, priority customer support, and more customization options for your blog.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question9')}>Is there a limit to the number of articles I can publish?</h3>
          <div
            id="question9"
            className={`answer ${activeQuestion === 'question9' ? 'active' : ''}`}
          >
            No, there's no limit to the number of articles you can publish on BlogBlitz. You have the freedom to create and publish as many articles as you want based on your interests and schedule.
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleAnswer('question10')}>How can I reset my password?</h3>
          <div
            id="question10"
            className={`answer ${activeQuestion === 'question10' ? 'active' : ''}`}
          >
            To reset your password, go to the login page, click on the "Forgot Password" option, and follow the instructions sent to your registered email address to create a new password.
          </div>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQs;
