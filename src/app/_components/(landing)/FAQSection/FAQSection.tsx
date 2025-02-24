import React from "react";
import { FAQCard } from "@/app/_components";
import "./FAQSection.scss";

const faqQuestions = [
  {
    id: 1,
    question: "What types of budget data can I visualize with Budgit?",
    answer:
      "Budgit supports a wide range of data! You can upload project budgets, department expenses, marketing spend, revenue projections, and more. If you can put it in a spreadsheet, you can visualize it with Budgit.",
  },
  {
    id: 2,
    question: "How can Budgit help me optimize my budget allocations?",
    answer:
      "Budgit's visualizations make it easy to identify spending trends, uncover inefficiencies, and see how your resources are distributed across different projects and categories. Use this to reallocate funds where they'll have the greatest impact.",
  },
  {
    id: 3,
    question:
      "Can I connect Budgit to my existing accounting software or spreadsheets?",
    answer:
      "Yes! Budgit offers seamless integration with popular spreadsheet programs like Google Sheets. We're also working on integrations with accounting software – stay tuned for updates!",
  },
  {
    id: 4,
    question: "Is my budget data secure with Budgit?",
    answer:
      "Absolutely. We take data security seriously. Budgit uses industry-standard encryption and security protocols to protect your financial information. Your data is stored securely and is only accessible to authorized users.",
  },
  {
    id: 5,
    question: "How much does Budgit cost?",
    answer:
      "Great news – Budgit is currently completely free to use! You can access all of our core visualization features without paying a dime. We believe in making powerful budget insights accessible to everyone. Enjoy!",
  },
];

const FAQSection = () => {
  return (
    <div className="faq-section" id="faq">
      <div className="app-container faq-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">
            Frequently Asked <span>Questions</span>
          </div>
          <div className="description-text">
            {`Have budget questions? We've got answers. Discover everything you
            need to know to visualize your spending and take control of your
            finances.`}
          </div>
        </div>

        {/* BODY AREA */}
        <div className="body-area">
          {faqQuestions.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
