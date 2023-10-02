"use client";
import React, { useState } from "react";

const Faq = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const questions = [
    {
      question: "What is Blue Spark Diamond?",
      answer:
        "Blue Spark Diamond Company, Nepal's exclusive natural diamond importer, sources rough diamonds from Africa, including Botswana, South Africa, Sierra Leone, Cameroon, Namibia, and Johannesburg. Our vision is to become a leading global integrated group, driven by boundless ambition.",
    },
    {
      question: "Is Blue Spark Diamond a certified company?",
      answer:
        "Yes, Blue Spark Diamond is a certified company. All diamonds sold by Blue Spark, both through direct and in-auction sales, are GIA Certified and undergo the Kimberly Process, ensuring they are ethically sourced and conflict-free. This guarantees that the diamonds have been evaluated and certified by the Gemological Institute of America and adhere to ethical standards in the diamond industry.",
    },
    {
      question: "How good quality diamonds do we export?",
      answer:
        "We export high-quality diamonds that have undergone GIA Certification and Kimberly Process, ensuring they meet stringent industry standards for both quality and ethical sourcing.",
    },
    {
      question: "Is online payment possible?",
      answer:
        "Yes, we do offer online payment options. In addition to accepting direct cash, we also take payments via MasterCard, Debit, and Visa cards. For further details, feel free to reach out to us on WhatsApp.",
    },
    {
      question: "What are the working hours?",
      answer:
        "Our working hours are from 10:00 am to 4:00 pm, except on Saturdays and Nepalese public holidays. Despite this, we maintain a global network, ensuring seamless communication with customers worldwide. We're committed to providing uncompromised service and eagerly await your calls, emails, and faxes.",
    },
  ];

  return (
    <section className="flex items-center bg-white lg:min-h-screen">
      <div className="p-4 flex flex-col items-center justify-center text-gray-700 py-14 w-full" >
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl text-gray-500">You Ask - We Answer</p>
        </div>
        <div className="flex flex-col item-center justify-center mt-5">
          {questions.map((q, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full lg:w-[45rem] px-6 py-4 mb-3 bg-white rounded shadow"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span
                  className={`font-bold ${expandedIndexes.includes(index) ? "text-blue-500" : ""
                    }`}
                >
                  {q.question}
                </span>
                <div className="p-2 bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        expandedIndexes.includes(index)
                          ? "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                          : "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      }
                    />
                  </svg>
                </div>
              </div>
              {expandedIndexes.includes(index) && (
                <div className="mt-1 text-sm text-gray-500">{q.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
