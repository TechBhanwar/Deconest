import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footernav from '../components/Footernav';

const faqsData = [
  {
    category: 'Payment & Billing Questions',
    questions: [
      { question: 'How can I pay for my order?', answer: 'You can pay using credit/debit cards, net banking, or UPI.' },
      { question: 'Can I pay by bank transfer?', answer: 'Yes, bank transfers are accepted. Contact support for details.' },
      { question: 'What is Amazon Pay?', answer: 'Amazon Pay is a digital wallet service for easy payments.' },
      { question: 'What payment methods do you accept?', answer: 'We accept credit cards, debit cards, PayPal, and bank transfers.' },
      { question: 'Can I pay with Cash on Delivery (COD)?', answer: 'Yes, COD is available for select locations. Check at checkout for eligibility.' },
    ],
  },
  {
    category: 'Account & Order Management',
    questions: [
      { question: 'I want to change my account information.', answer: 'Go to your profile settings to update details.' },
      { question: 'How can I cancel my order?', answer: 'Visit your order history and select cancel on eligible orders.' },
      { question: 'How can I track my order?', answer: 'Go to My Orders and enter your order ID to check the current status.' },
      { question: 'Can I cancel my order?', answer: 'Yes, you can cancel your order within 24 hours of placing it.' },
      { question: 'What if I receive a damaged or wrong product?', answer: 'You can request a replacement or refund by contacting our support team.' },
    ],
  },
];

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' '>
    <div className="border px-4 rounded-md py-2 ">
      <button
        className="flex justify-between w-full py-3 text-left text-lg font-medium text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all transform duration-500 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 pb-3 pl-4">{answer}</p>
      </div>
    </div>
    </div>

  );
};

const Faqs = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 pt-5 space-y-3 lg:space-x-10 mb-5 lg:grid-cols-2">
        <div>
          <img src="/images/faq.jpg" alt="FAQ" />
        </div>
        <div className="flex flex-col justify-center px-5 items-center">
          <div className="text-start space-y-5">
            <h1 className="lg:text-xl text-base font-semibold text-gray-600">FAQs</h1>
            <h1 className="lg:text-4xl text-2xl text-black font-bold">How Can We Assist You</h1>
            <h1 className="lg:text-lg text-base text-gray-600 font-medium">
              Our help center is here to provide you with answers. to frequently asked questions Find answers to common questions or contact our support team.
            </h1>

            <div className="relative shadow-md lg:w-[28rem]">
              <input
                type="text"
                className="py-4 px-4 w-full outline-none border rounded-md pr-12"
                placeholder="Search Your Question"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid container lg:grid-cols-2 py-6 grid-cols-1 gap-8 px-5 lg:px-20">
        {faqsData.map((section, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h1 className="lg:text-2xl text-xl font-semibold text-black">{section.category}</h1>
            {section.questions.map((faq, idx) => (
              <Accordion key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        ))}
      </div>

      <Footer />
      <Footernav />
    </div>
  );
};

export default Faqs;
