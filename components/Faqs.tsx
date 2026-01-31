"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How to create an account?",
    answer:
      "You can create an account by signing up using your email address. Once registered, you’ll gain access to the SheBuilds community and events.",
  },
  {
    question: "How can I make payment using PayPal?",
    answer:
      "Payments can be made securely through PayPal during checkout. You’ll be redirected to PayPal to complete the transaction.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Yes, you can cancel your plan anytime from your account settings without additional charges.",
  },
  {
    question: "How can I reach support?",
    answer:
      "You can contact our support team via email or through the contact form on our website.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about SheBuilds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-4 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg transition hover:bg-gray-50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:px-6"
                >
                  <span className="text font-semibold text-black text-left">
                    {faq.question}
                  </span>

                  <p className="w-6 h-6 text-gray-400 items-center justify-center flex text-2xl font-light transition-all">
                    {isOpen ? "−" : "+"}
                  </p>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
